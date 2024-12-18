import LoginModal from '@/components/modal/login'
import { createServerSupabaseClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createServerSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <div className="">
      Welcome {session?.user?.email?.split('@')?.[0]}!
      <LoginModal />
    </div>
  )
}
