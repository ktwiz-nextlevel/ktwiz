'use client'
import { ProfileDetail } from '@/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateNickname } from '@/services/user-action'

interface UserInfoProps {
  userData: ProfileDetail
}

const nicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임을 2글자 이상 입력하세요')
    .max(15, '닉네임은 15자 이내여야 합니다.'),
})

type NicknameFormValues = z.infer<typeof nicknameSchema>

export default function UserInfo({ userData }: UserInfoProps) {
  const [isEditing, setIsEditing] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors: updateErrors },
  } = useForm<NicknameFormValues>({
    resolver: zodResolver(nicknameSchema),
  })

  const onUpdateSubmit = async (data: NicknameFormValues) => {
    try {
      const formData = new FormData()
      formData.append('nickname', data.nickname)
      const result = await updateNickname(formData)
      if (result && result.errors) {
        alert('닉네임 변경 중 문제가 발생했습니다.')
        return
      }
      alert('닉네임이 변경되었습니다.')
      setIsEditing(false)
    } catch (error) {
      console.error('Error creating comment:', error)
    }
  }

  const toggleEditing = () => {
    setIsEditing((prev) => !prev)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-10 border-b border-gray-200 pb-6">
        <p className="text-sm font-semibold text-gray-800">이메일</p>
        <p className="text-sm">{userData.email}</p>
      </div>

      <div className="flex items-center space-x-10 border-b border-gray-200 pb-6">
        <p className="text-sm font-semibold text-gray-800">닉네임</p>
        {isEditing ? (
          <form
            className="flex items-center space-x-3"
            onSubmit={handleSubmit(onUpdateSubmit)}
          >
            <input
              {...register('nickname')}
              id="nickname"
              className="rounded-md border border-gray-300 p-2 text-sm"
              name="nickname"
              type="text"
              defaultValue={userData.nickname}
              required
            />
            {updateErrors.nickname && (
              <p className="mt-2 text-sm text-red-500">
                {updateErrors.nickname.message}
              </p>
            )}
            <button
              type="submit"
              className="rounded-md border bg-[--black-color-500] px-4 py-2 text-sm text-white hover:bg-gray-400"
            >
              저장
            </button>
            <button
              type="button"
              className="rounded-md border bg-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-400"
              onClick={toggleEditing}
            >
              취소
            </button>
          </form>
        ) : (
          <>
            <p className="text-sm">{userData.nickname}</p>
            <button
              className="rounded-md border bg-[--black-color-500] px-4 py-2 text-sm text-white hover:bg-gray-400"
              onClick={toggleEditing}
            >
              변경
            </button>
          </>
        )}
      </div>
    </div>
  )
}
