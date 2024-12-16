'use client'
import { useState } from 'react'
import Input from './input'

interface InputProps {
  name?: string
  id?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPassword({
  name,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const [isPrivate, setIsPrivate] = useState(true)
  return (
    <div className="relative">
      <Input
        type={isPrivate ? 'password' : 'text'}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button
        onClick={() => setIsPrivate(!isPrivate)}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-0"
      >
        <svg width="1em" height="1em" fill="none" viewBox="0 0 16 16">
          <path
            fill="#999"
            fill-rule="evenodd"
            d="M4.571 8c0 1.767 1.535 3.2 3.429 3.2 1.893 0 3.428-1.433 3.428-3.2 0-1.767-1.535-3.2-3.428-3.2-1.894 0-3.43 1.433-3.43 3.2ZM8 2.667c3.084 0 5.812 1.51 7.518 3.838a2.558 2.558 0 0 1 0 2.99c-1.706 2.327-4.434 3.838-7.518 3.838-3.084 0-5.812-1.51-7.518-3.839a2.556 2.556 0 0 1 0-2.989C2.188 4.178 4.916 2.667 8 2.667ZM6.667 8a1.333 1.333 0 1 1 2.665-.001 1.333 1.333 0 0 1-2.665 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}
