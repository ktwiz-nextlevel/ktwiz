import CreatePostForm from '@/components/board/create-post-form'
import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu2'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { FAN_BANNER_DATA } from '@/contants'

export default async function BoardWritePage() {
  return (
    <div className="h-full w-full">
      <Banner {...FAN_BANNER_DATA['/']}>
        <TabMenu tabs={FAN_BANNER_DATA['/'].tabs} />
      </Banner>
      <div className="flex w-full space-x-8 px-10 pb-16">
        <div className="mx-auto max-w-[1100px] flex-1">
          <div className="mt-[50px] flex w-full justify-end">
            <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간']} />
          </div>
          <CreatePostForm />
        </div>
      </div>
    </div>
  )
}
