import { z } from 'zod'

export const postSchema = z.object({
  title: z
    .string()
    .min(2, '제목을 2글자 이상 입력하세요')
    .max(20, '제목은 20자 이내여야 합니다.'),
  content: z
    .string()
    .min(2, '내용을 2글자 이상 입력하세요')
    .max(1000, '내용은 1000자 이내여야 합니다.'),
})
