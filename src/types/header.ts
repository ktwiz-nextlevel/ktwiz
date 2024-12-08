export interface LnbData {
  name: string
  href: string
}
export interface MenuData {
  gnb: string
  href: string
  lnb: LnbData[] | null
}

export type LnbDataArray = (LnbData[] | null)[]
