import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <div className="">Welcome {session?.user?.email?.split('@')?.[0]}!</div>
  )
}
