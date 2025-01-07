'use client'
import { ProfileDetail } from '@/types'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useRef, useState } from 'react'

interface MessageEntity {
  id: string
  user_id: string
  nickname: string
  content: string
  created_at: Date
}
const supabase = createClient()

export default function LiveTalk({
  userData,
}: {
  userData: ProfileDetail | null
}) {
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<MessageEntity[]>([])
  const [isAutoUpdate, setIsAutoUpdate] = useState<boolean>(true) // 자동 업데이트 상태
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false) // 로딩 상태 추가
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false) // 구독 상태 추가

  useEffect(() => {
    const fetchMessages = async () => {
      setIsFetching(true)
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })

      if (data) {
        setMessages(data as MessageEntity[])
      }
      if (error) console.error('Error fetching messages:', error.message)
      setIsFetching(false)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null

    if (isAutoUpdate) {
      channel = supabase
        .channel('ktwiz-realtime-chat')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'messages' },
          (payload) => {
            setMessages((prevMessages) => [
              ...prevMessages,
              payload.new as MessageEntity,
            ])
          },
        )
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            setIsSubscribed(true)
          }
        })
    }

    return () => {
      if (channel) {
        supabase.removeChannel(channel)
        setIsSubscribed(false)
      }
    }
  }, [isAutoUpdate])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!userData) {
      alert('로그인이 필요합니다')
      return
    }
    if (!input.trim()) {
      alert('메시지를 입력해주세요')
      return
    }
    const { error } = await supabase.from('messages').insert([
      {
        user_id: userData.id,
        nickname: userData.nickname,
        content: input.trim(),
      },
    ])
    if (error) console.error('Error sending message:', error.message)
    setInput('')
  }

  const toggleAutoUpdate = () => {
    setIsAutoUpdate((prev) => !prev)
  }

  const messagesList = messages.map((msgObj) => (
    <div key={msgObj.id} className="flex w-full">
      <div className="flex w-full flex-col py-2 text-sm">
        <div className="w-full space-y-4 break-words rounded-xl bg-gray-100 px-4 pb-4 pt-2 text-gray-800 shadow-sm">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-xs font-semibold text-gray-600">
              {msgObj.nickname}
            </div>
            <div className="text-xs text-gray-400">
              {new Date(msgObj.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
          <div className="whitespace-pre-wrap">{msgObj.content}</div>{' '}
          {/**줄바꿈 표시*/}
        </div>
      </div>
    </div>
  ))

  return (
    <div className="mt-[50px] flex h-[630px] w-[350px] flex-col rounded-xl border bg-white p-2">
      <div className="p-4 pb-1 font-extrabold">응원 오픈톡</div>
      <div className="flex items-center justify-end px-2">
        <span className="text-xs">자동 업데이트</span>
        <button
          onClick={toggleAutoUpdate}
          className={`ml-2 flex w-10 justify-center rounded px-3 py-1 text-xs font-semibold text-white ${
            isAutoUpdate ? 'bg-[--blue-color-100]' : 'bg-[--gray-color-100]'
          }`}
        >
          {isAutoUpdate ? 'ON' : 'OFF'}
        </button>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-1 items-center space-x-2">
          <textarea
            className="h-24 flex-1 resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                if (e.nativeEvent.isComposing) return
                handleSendMessage()
              }
            }}
            disabled={!isSubscribed} // 구독 상태가 아니면 입력 비활성화
            placeholder={isSubscribed ? '메시지를 입력하세요...' : ''}
          />
        </div>
      </div>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-2">
        {isFetching ? (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-400 border-t-transparent"></div>
              <p className="text-sm text-gray-500">
                메시지를 불러오는 중입니다...
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse">{messagesList}</div>
        )}
      </div>
    </div>
  )
}
