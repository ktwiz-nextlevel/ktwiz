'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'

const postSchema = z.object({
  title: z
    .string()
    .min(2, '제목을 2글자 이상 입력하세요')
    .max(100, '제목은 100자 이내여야 합니다.'),
  content: z
    .string()
    .min(2, '내용을 2글자 이상 입력하세요')
    .max(1000, '내용은 1000자 이내여야 합니다.'),
})

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
