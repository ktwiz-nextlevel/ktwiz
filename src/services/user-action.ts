'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { nicknameSchema } from '@/schemas/nicknameSchema'

export async function updateNickname(formData: FormData) {
  const validateFields = nicknameSchema.safeParse({
    nickname: formData.get('nickname') as string,
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: '입력값을 확인해주세요',
    }
  }
  const { nickname } = validateFields.data

  const supabase = await createClient()

  const { data: userData } = await supabase.auth.getUser()
  const userId = userData.user?.id

  const { error } = await supabase
    .from('profiles')
    .update({ nickname: nickname })
    .eq('id', userId)

  if (error) {
    redirect('/error')
  }

  redirect('/mypage')
}
