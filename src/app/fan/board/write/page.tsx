import CreatePostForm from '@/components/board/create-post-form'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

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
