'use client'
import InputPassword from '@/components/common/input/input-password'
import InputWithDelBtn from '@/components/common/input/input-with-del'
import { login, signup } from './actions'

export const metadata = {
  title: '로그인',
  description: ' 로그인 페이지 입니다.',
}
export default function LoginPage() {
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>

      {/* <InputWithDelBtn name="email" placeholder="아이디를 입력하세요" />
      <InputPassword name="password" placeholder="비밀번호를 입력해주세요" /> */}
    </>
  )
}
