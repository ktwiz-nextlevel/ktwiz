'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { postSchema } from '@/schemas/postSchema'

export async function createPost(formData: FormData) {
  try {
    const supabase = await createClient()
    const images = formData
      .getAll('images')
      .filter((file): file is File => file instanceof File)

    const validateFields = postSchema.safeParse({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      images: images.length > 0 ? images : undefined,
    })

    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
        message: '입력값을 확인해주세요',
      }
    }
    const { title, content } = validateFields.data
    const { data: userData, error: userError } = await supabase.auth.getUser()

    if (userError || !userData?.user) {
      return { message: '로그인이 필요합니다' }
    }

    const userId = userData.user.id

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('nickname')
      .eq('id', userId)
      .single()

    if (profileError || !profileData) {
      return { message: '프로필 정보를 가져오는데 실패했습니다' }
    }

    const { data: postData, error: postError } = await supabase
      .from('posts')
      .insert([
        {
          user_id: userData.user.id,
          title,
          content,
          view_count: 0,
          author: profileData.nickname || 'Anonymous',
        },
      ])
      .select('id')
      .single()

    if (postError || !postData) {
      return { message: '게시글 저장에 실패했습니다' }
    }
    const postId = postData.id

    if (images.length) {
      const uploadResults = await Promise.allSettled(
        images.map(async (image) => {
          const extension = image.name.split('.').pop() || 'png'
          const fileName = `${Date.now()}_${uuidv4()}.${extension}`

          const { error: uploadError } = await supabase.storage
            .from('post-images')
            .upload(`images/${fileName}`, image, {
              cacheControl: '3600',
              upsert: false,
            })

          if (uploadError) throw new Error(uploadError.message)

          const { data: publicUrlData } = supabase.storage
            .from('post-images')
            .getPublicUrl(`images/${fileName}`)

          await supabase
            .from('images')
            .insert({ post_id: postId, image_url: publicUrlData.publicUrl })
        }),
      )

      if (uploadResults.some((result) => result.status === 'rejected')) {
        return { message: '일부 이미지 업로드에 실패했습니다.' }
      }
    }
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message:
        '게시글 작성 중 예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }

  revalidatePath('/fan/board')
  redirect('/fan/board')
}

export async function updatePost(formData: FormData, postId: number) {
  try {
    const supabase = await createClient()
    const images = formData
      .getAll('images')
      .filter((file): file is File => file instanceof File)

    const existingImages = formData.getAll('existingImages') as string[]

    const validateFields = postSchema.safeParse({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      images: images.length > 0 ? images : undefined,
    })

    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
        message: '입력값을 확인해주세요',
      }
    }

    const { title, content } = validateFields.data

    const { error: postError } = await supabase
      .from('posts')
      .update({
        title: title,
        content: content,
      })
      .eq('id', postId)

    if (postError) {
      return { message: '게시글 수정에 실패했습니다' }
    }

    // 기존 이미지 처리
    const { data: currentImages, error: currentImagesError } = await supabase
      .from('images')
      .select('image_url')
      .eq('post_id', postId)

    if (currentImagesError) {
      return { message: '기존 이미지를 가져오는 데 실패했습니다.' }
    }

    const currentImageUrls = currentImages?.map((img) => img.image_url) || []

    // 삭제 대상 이미지
    const imagesToDelete = currentImageUrls.filter(
      (url) => !existingImages.includes(url),
    )

    if (imagesToDelete.length > 0) {
      const deleteResults = await Promise.allSettled(
        imagesToDelete.map(async (url) => {
          const path = new URL(url).pathname.replace(
            '/storage/v1/object/public/post-images/',
            '',
          )
          const { error: deleteError } = await supabase.storage
            .from('post-images')
            .remove([path])

          if (deleteError) {
            console.error(
              `스토리지에서 이미지 삭제 실패: ${path}`,
              deleteError.message,
            )
            throw new Error(deleteError.message)
          }
          // DB에서 이미지 삭제
          await supabase.from('images').delete().eq('image_url', url)
        }),
      )

      if (deleteResults.some((result) => result.status === 'rejected')) {
        return { message: '일부 이미지를 삭제하는 데 실패했습니다.' }
      }
    }

    // 새 이미지 업로드
    if (images.length > 0) {
      const uploadResults = await Promise.allSettled(
        images.map(async (image) => {
          const extension = image.name.split('.').pop() || 'png'
          const fileName = `${Date.now()}_${uuidv4()}.${extension}`

          const { error: uploadError } = await supabase.storage
            .from('post-images')
            .upload(`images/${fileName}`, image, {
              cacheControl: '3600',
              upsert: false,
            })

          if (uploadError) throw new Error(uploadError.message)

          const { data: publicUrlData } = supabase.storage
            .from('post-images')
            .getPublicUrl(`images/${fileName}`)

          await supabase
            .from('images')
            .insert({ post_id: postId, image_url: publicUrlData.publicUrl })
        }),
      )

      if (uploadResults.some((result) => result.status === 'rejected')) {
        return { message: '일부 이미지를 업로드하는 데 실패했습니다.' }
      }
    }
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message: '예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }
  revalidatePath('/fan/board', 'layout')
  redirect('/fan/board')
}

export async function deletePost(postId: number) {
  try {
    const supabase = await createClient()
    const { data: images, error: imagesError } = await supabase
      .from('images')
      .select('image_url')
      .eq('post_id', postId)

    if (imagesError) {
      return { message: '이미지 정보를 가져오는 데 실패했습니다.' }
    }

    if (images && images.length > 0) {
      const imagePaths = images.map((img) =>
        new URL(img.image_url).pathname.replace(
          '/storage/v1/object/public/post-images/',
          '',
        ),
      )

      const { error: deleteError } = await supabase.storage
        .from('post-images')
        .remove(imagePaths)

      if (deleteError) {
        console.error('스토리지에서 이미지 삭제 실패:', deleteError.message)
        return { message: '이미지 파일 삭제 중 오류가 발생했습니다.' }
      }
    }

    const { error: postError } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId)

    if (postError) {
      return { message: '게시글 삭제에 실패했습니다' }
    }
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message: '예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }
  revalidatePath('/fan/board')
  redirect('/fan/board')
}
