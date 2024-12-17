'use client'
import { ProfileDetail } from '@/types'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useRef, useState } from 'react'

interface Message {
  id: string
  userId: string
  nickname: string
  content: string
}
const supabase = createClient()

export default function LiveTalk({
  userData,
}: {
  userData: ProfileDetail | null
}) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isAutoUpdate, setIsAutoUpdate] = useState(true) // 자동 업데이트 상태
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })

      if (data) {
        const clientMessages = data.map((msg) => ({
          id: msg.id,
          userId: msg.user_id,
          nickname: msg.nickname,
          content: msg.content,
        }))
        setMessages(clientMessages)
      }
      if (error) console.error('Error fetching messages:', error.message)
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
              payload.new as Message,
            ])
          },
        )
        .subscribe()
    }

    return () => {
      if (channel) {
        supabase.removeChannel(channel)
      }
    }
  }, [isAutoUpdate])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() || !userData) return
    const { error } = await supabase.from('messages').insert([
      {
        user_id: userData.id,
        nickname: userData.nickname || 'Anonymous',
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
      <div className="flex w-full flex-col text-sm">
        <div className="w-full space-y-3 break-words rounded-xl bg-gray-100 px-4 pb-3 pt-2 text-gray-800 shadow-sm">
          <div className="mb-1 text-xs font-semibold text-gray-600">
            {msgObj.nickname}
          </div>
          <div className="whitespace-pre-wrap">{msgObj.content}</div>{' '}
          {/**줄바꿈 표시*/}
        </div>
      </div>
    </div>
  ))

  return (
    <div className="mt-[50px] flex h-[630px] w-[400px] flex-col rounded-xl border bg-white p-2">
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
            onKeyUp={(e) =>
              e.key === 'Enter' && !e.shiftKey && handleSendMessage()
            }
          />
        </div>
      </div>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-2">
        <div className="flex flex-col-reverse space-y-4">{messagesList}</div>
      </div>
    </div>
  )
}
