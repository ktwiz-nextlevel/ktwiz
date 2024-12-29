'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const commentSchema = z.object({
  content: z
    .string()
    .min(2, '내용을 2글자 이상 입력하세요')
    .max(500, '내용은 500자 이내여야 합니다.'),
})

export async function createComment(formData: FormData, postId: number) {
  const supabase = await createClient()
  try {
    const validateFields = commentSchema.safeParse({
      content: formData.get('content') as string,
    })

    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
        message: '입력값을 확인해주세요',
      }
    }
    const { content } = validateFields.data
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

    const { error: postError } = await supabase
      .from('comments')
      .insert([
        {
          user_id: userData.user.id,
          post_id: postId,
          content,
          author: profileData.nickname || 'Anonymous',
        },
      ])
      .select('id')
      .single()

    if (postError) {
      return { message: '댓글 저장에 실패했습니다' }
    }
    revalidatePath(`/fan/board/${postId}`)
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message:
        '댓글 작성 중 예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }
}

export async function updateComment(formData: FormData, commentId: number) {
  try {
    const supabase = await createClient()
    const validateFields = commentSchema.safeParse({
      content: formData.get('content') as string,
    })

    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
        message: '입력값을 확인해주세요',
      }
    }
    const { content } = validateFields.data

    const { data: commentData, error: postError } = await supabase
      .from('comments')
      .update({ content: content })
      .eq('id', commentId)
      .select('post_id')
      .single()

    if (postError) {
      return { message: '댓글 수정에 실패했습니다' }
    }
    const postId: number = commentData.post_id
    revalidatePath(`/fan/board/${postId}`)
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message:
        '댓글 수정 중 예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }
}

export async function deleteComment(commentId: number) {
  try {
    const supabase = await createClient()
    const { data: commentData, error: postError } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId)
      .select('post_id')
      .single()

    if (postError) {
      return { message: '댓글 삭제에 실패했습니다' }
    }
    const postId: number = commentData.post_id
    revalidatePath(`/fan/board/${postId}`)
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      message:
        '댓글 삭제 중 예상치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.',
    }
  }
}
