export interface BannerInterface {
  title: string
  description: string
  tabs?: string[] | null
}

export type BannerData = Record<string, BannerInterface>
