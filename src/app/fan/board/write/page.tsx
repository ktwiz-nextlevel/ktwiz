import CreatePostForm from '@/components/board/create-post-form'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: '게시판',
  description:
    'kt wiz의 게시판 작성 페이지입니다. 제목, 내용을 작성하고 이미지를 업로드해보세요! ',
}
export default async function BoardWritePage() {
  return (
    <div className="page px-10 pb-16">
      <div className="mt-[50px] flex w-full justify-end">
        <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간', '작성하기']} />
      </div>
      <CreatePostForm />
    </div>
  )
}
