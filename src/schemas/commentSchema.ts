import { z } from 'zod'

export const commentSchema = z.object({
  content: z
    .string()
    .min(2, '내용을 2글자 이상 입력하세요')
    .max(500, '내용은 500자 이내여야 합니다.'),
})
