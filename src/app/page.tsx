import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return <div className="">Welcome {user?.email?.split('@')?.[0]}!</div>
}
