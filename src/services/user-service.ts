import { ProfileDetail } from '@/types'
import { createClient } from '@/utils/supabase/server'

export async function fetchProfile(): Promise<ProfileDetail | null> {
  try {
    const supabase = await createClient()
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id
    const { data: memberData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (!memberData) {
      return null
    }
    const clientData: ProfileDetail = {
      id: memberData.id,
      nickname: memberData.nickname,
    }
    return clientData
  } catch (error) {
    console.error(error)
    return null
  }
}
