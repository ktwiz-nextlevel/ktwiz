import { z } from 'zod'

export const nicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임을 2글자 이상 입력하세요')
    .max(15, '닉네임은 15자 이내여야 합니다.'),
})
