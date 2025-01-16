'use client'
import { PostDetail, ProfileDetail } from '@/types'
import { UserIcon } from '@heroicons/react/20/solid'
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  createComment,
  deleteComment,
  updateComment,
} from '@/services/comment-action'
import { deletePost } from '@/services/post-action'
import { commentSchema } from '@/schemas/commentSchema'

interface PostDetailBoxProps {
  post: PostDetail
  userData: ProfileDetail | null
}

type CommentFormValues = z.infer<typeof commentSchema>

export default function PostDetailBox({ post, userData }: PostDetailBoxProps) {
  const router = useRouter()
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // 댓글 작성 폼
  const {
    register: createRegister,
    handleSubmit: handleCreateSubmit,
    reset: resetCreateForm,
    formState: { errors: createErrors },
  } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
  })

  // 댓글 수정 폼
  const {
    register: editRegister,
    handleSubmit: handleEditSubmit,
    setValue: setEditValue,
    formState: { errors: editErrors },
  } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
  })

  const handleEditButtonClick = (comment: { id: number; content: string }) => {
    setEditingCommentId(comment.id)
    setEditValue('content', comment.content)
  }

  const onCreateSubmit = async (data: CommentFormValues) => {
    if (!userData) {
      alert('로그인이 필요합니다')
      return
    }
    try {
      const formData = new FormData()
      formData.append('content', data.content)
      const result = await createComment(formData, post.id)
      if (result && result.errors) {
        alert('댓글 작성 중 문제가 발생했습니다.')
        return
      }
      resetCreateForm()
    } catch (error) {
      console.error('Error creating comment:', error)
      alert('댓글 작성 중 문제가 발생했습니다. 다시 시도해주세요.')
    }
  }

  const onEditSubmit = async (data: CommentFormValues, commentId: number) => {
    try {
      const formData = new FormData()
      formData.append('content', data.content)
      const result = await updateComment(formData, commentId)
      if (result && result.errors) {
        alert('댓글 수정 중 문제가 발생했습니다.')
        return
      }
      setEditingCommentId(null)
    } catch (error) {
      console.error('Error updating comment:', error)
      alert('댓글 수정 중 문제가 발생했습니다. 다시 시도해주세요.')
    }
  }

  const handleDeleteComment = async (commentId: number) => {
    const confirmed = window.confirm('정말로 이 댓글을 삭제하시겠습니까?')
    if (!confirmed) {
      return
    }
    try {
      await deleteComment(commentId)
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const handleDeletePost = async (postId: number) => {
    const confirmed = window.confirm('정말로 이 게시글을 삭제하시겠습니까?')
    if (!confirmed) {
      return
    }
    try {
      setIsLoading(true)
      await deletePost(postId)
      setIsLoading(false)
      alert('게시글이 삭제되었습니다.')
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          <p className="mt-4 text-lg font-semibold text-white">
            게시글을 삭제하고 있습니다
          </p>
        </div>
      ) : (
        <div className="w-full pt-6">
          <div className="flex items-center justify-between rounded-lg border-t-2 border-[--main-red-color] bg-[--white-color-200] p-4">
            <div>
              <p className="line-clamp-1">{post.title}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-[--gray-color-100]">
              <div className="flex items-center gap-1">
                <UserIcon className="h-4 w-4" />
                <p className="whitespace-nowrap">{post.author}</p>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="h-4 w-4" />
                <p className="whitespace-nowrap">{post.createdAt}</p>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircleIcon className="h-4 w-4" />
                <p className="whitespace-nowrap">{post.viewCount}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 min-h-[400px] p-4 text-sm">
            <p>{post.content}</p>
            {post.images?.map((image, index) => (
              <div key={index} className="flex justify-center py-5">
                <Image
                  src={image}
                  alt={`post-image-${index}`}
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-end space-x-4 border-t-2 border-[--main-red-color] pt-3">
            {userData?.id === post.userId && (
              <>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="rounded bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-500"
                >
                  삭제하기
                </button>
                <button
                  onClick={() => router.push(`/fan/board/${post.id}/edit`)}
                  className="rounded bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-500"
                >
                  수정하기
                </button>
              </>
            )}
            <button
              onClick={() => router.push('/fan/board')}
              className="rounded bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-500"
            >
              목록보기
            </button>
          </div>
          <div className="space-y-4 pt-8">
            <h1>댓글</h1>
            <form onSubmit={handleCreateSubmit(onCreateSubmit)}>
              <div className="flex space-x-2">
                <textarea
                  {...createRegister('content')}
                  rows={3}
                  placeholder="내용을 입력하세요"
                  className="block w-full resize-none border-2 p-5 text-sm"
                />
                <button
                  type="submit"
                  className="rounded bg-gray-600 px-6 py-2 text-sm text-white hover:bg-gray-500"
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
              {createErrors.content && (
                <p className="mt-2 text-xs text-red-500">
                  {createErrors.content.message}
                </p>
              )}
            </form>

            <div className="pt-4">
              {post.comments?.map((comment) => (
                <div key={comment.id} className="flex w-full">
                  <div className="flex w-full flex-col border-t text-sm">
                    <div className="w-full space-y-8 break-words p-4 text-gray-800">
                      <div className="mb-1 flex items-center justify-between">
                        {editingCommentId === comment.id ? (
                          <form
                            onSubmit={handleEditSubmit((data) =>
                              onEditSubmit(data, comment.id),
                            )}
                            className="w-full"
                          >
                            <textarea
                              {...editRegister('content')}
                              rows={3}
                              className="block w-full resize-none border p-2 text-sm"
                            />
                            {editErrors.content && (
                              <p className="mt-2 text-sm text-red-500">
                                {editErrors.content.message}
                              </p>
                            )}
                            <div className="flex gap-2 py-2">
                              <button type="submit" className="text-sm">
                                저장
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingCommentId(null)}
                                className="text-sm"
                              >
                                취소
                              </button>
                            </div>
                          </form>
                        ) : (
                          <div className="whitespace-pre-wrap">
                            {comment.content}
                          </div>
                        )}
                        {userData?.id === comment.userId &&
                          editingCommentId !== comment.id && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleEditButtonClick(comment)}
                                className="text-sm"
                              >
                                수정
                              </button>
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="text-sm"
                              >
                                삭제
                              </button>
                            </div>
                          )}
                      </div>
                      <div className="mb-1 flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-600">
                          {comment.author}
                        </div>
                        <div className="text-xs text-gray-400">
                          {comment.createdAt}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
