'use client'
import { useState } from 'react'
import Input from '../common/input'
import InputWithDelBtn from '../common/input-with-del'
import InputPassword from '../common/input-password'
import InputBtn from '../common/input-button'

export default function FormExample() {
  // 상태를 객체로 묶어서 관리
  const [formState, setFormState] = useState({
    value: '',
    id: '',
    password: '',
  })

  // 상태 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="mx-auto w-[600px]">
      <h1 className="mb-10">Form 예시</h1>

      <div className="flex flex-col gap-6">
        <div>
          <b>input</b>
          <Input
            name="value"
            placeholder="기본 input입니다"
            value={formState.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>아이디 입력 input</b>
          <InputWithDelBtn
            name="id"
            placeholder="아이디를 입력하세요"
            value={formState.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <b>비밀번호 입력</b>
          <InputPassword
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputBtn>로그인</InputBtn>
        </div>
      </div>
    </div>
  )
}
