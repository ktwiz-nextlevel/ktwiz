import { create } from 'zustand'

interface YearState {
  currentYear: number // 현재 연도
  setYear: (year: number) => void // 연도 설정 함수
}

const useYearStore = create<YearState>((set) => ({
  currentYear:
    new Date().getFullYear() === 2025 ? 2024 : new Date().getFullYear(), // 초기값: 현재 연도
  setYear: (year: number) => set({ currentYear: year }), // 연도 업데이트 함수
}))

export default useYearStore
