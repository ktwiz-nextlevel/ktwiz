'use client'
import { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPost } from '@/services/post-action'

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

type PostFormValues = z.infer<typeof postSchema>

export default function CreatePostForm() {
  const router = useRouter()
  const [imagePreviews, setImagePreviews] = useState<
    { file: File; preview: string }[]
  >([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []

    // 중복된 파일 제거
    const newFiles = files.filter(
      (file) =>
        !imagePreviews.some(
          (image) =>
            image.file.name === file.name &&
            image.file.lastModified === file.lastModified,
        ),
    )

    // 업로드 제한 (최대 3개)
    if (newFiles.length + imagePreviews.length > 3) {
      alert('이미지는 최대 3개까지 업로드할 수 있습니다.')
      return
    }

    const newImagePreviews = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))

    setImagePreviews((prev) => [...prev, ...newImagePreviews])
  }

  const handleImageRemove = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: PostFormValues) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    imagePreviews.forEach((img) => formData.append('images', img.file))
    try {
      await createPost(formData)
      setImagePreviews([])
      reset()
      alert('게시글이 작성되었습니다.')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <div className="flex whitespace-nowrap border-b">
              <input
                id="title"
                type="text"
                placeholder="제목"
                className="block w-full p-5 font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                {...register('title')}
              />
              {errors.title && (
                <p className="p-5 text-xs text-[--main-red-color]">
                  {errors.title.message}
                </p>
              )}
            </div>
            <label htmlFor="content" className="sr-only">
              Content
            </label>
            <textarea
              id="content"
              rows={10}
              placeholder="내용을 입력하세요"
              className="block w-full resize-none p-5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              {...register('content')}
            />
            {errors.content && (
              <p className="p-5 text-xs text-[--main-red-color]">
                {errors.content.message}
              </p>
            )}
          </div>

          <div className="px-3 py-3">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="mt-3 flex min-h-[80px] gap-4">
              {imagePreviews.map((img, index) => (
                <div key={index} className="relative">
                  <Image
                    src={img.preview}
                    alt="미리보기"
                    width={200}
                    height={200}
                    className="rounded object-cover"
                    unoptimized // 로컬 파일 URL 최적화 방지
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[--main-red-color] text-xs text-white"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-3">
            <label
              htmlFor="file-input"
              className="flex cursor-pointer items-center text-gray-500 hover:text-gray-600"
            >
              <PaperClipIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              <span className="text-sm italic">파일 추가</span>
            </label>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  router.push('/fan/board')
                }}
                className="rounded bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-400"
              >
                목록보기
              </button>
              <button
                type="submit"
                className="rounded bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-400"
              >
                작성하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
