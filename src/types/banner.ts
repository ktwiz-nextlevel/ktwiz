export interface TabsType {
  title: string
  href: string | null
}
export interface BannerInterface {
  title: string
  description: string
  tabs?: TabsType[] | null
}

export type BannerData = Record<string, BannerInterface>
