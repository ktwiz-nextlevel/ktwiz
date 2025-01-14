'use client'
import { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PostDetail } from '@/types'
import { updatePost } from '@/services/post-action'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '@/schemas/postSchema'

interface EditPostFormProps {
  post: PostDetail
}

type PostFormValues = z.infer<typeof postSchema>

export default function EditPostForm({ post }: EditPostFormProps) {
  const router = useRouter()
  const [imagePreviews, setImagePreviews] = useState<
    { file?: File; preview: string }[]
  >(post.images.map((url) => ({ preview: url })))
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []

    const newFiles = files.filter(
      (file) =>
        !imagePreviews.some(
          (image) =>
            image.file?.name === file.name &&
            image.file?.lastModified === file.lastModified,
        ),
    )

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

    // 새로운 이미지와 기존 이미지를 구분하여 추가
    imagePreviews.forEach((img) => {
      if (img.file) {
        formData.append('images', img.file)
      } else {
        formData.append('existingImages', img.preview)
      }
    })

    try {
      const result = await updatePost(formData, post.id)
      if (result && result.errors) {
        alert('유효성 검사 실패')
        return
      }
    } catch (error) {
      console.error('Error updating post:', error)
      alert('게시글 수정 중 문제가 발생했습니다. 다시 시도해주세요.')
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
                {...register('title')}
                type="text"
                placeholder="제목"
                className="block w-full border-b p-5 font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
              />
              {errors.title && (
                <p className="p-5 text-xs text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            <label htmlFor="content" className="sr-only">
              Content
            </label>
            <textarea
              {...register('content')}
              rows={10}
              placeholder="내용을 입력하세요"
              className="block w-full resize-none p-5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
            />
            {errors.content && (
              <p className="p-5 text-xs text-red-500">
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
                    unoptimized
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
                수정하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
