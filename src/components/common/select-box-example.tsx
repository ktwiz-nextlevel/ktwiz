'use client'
import { useState } from 'react'
import SelectBox from '@/components/common/select-box'

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
]

export default function SelectBoxExample() {
  const [selectedOption, setSelectedOption] = useState(options[0]) // 선택된 값을 저장할 상태

  const handleOptionChange = (option) => {
    setSelectedOption(option) // 선택된 값을 업데이트
    console.log('현재 선택된 값:', option) // 선택된 값을 콘솔에 출력
  }

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">SelectBox Example</h1>
      <SelectBox option={options} onChange={handleOptionChange} />
      <p className="mt-4">현재 선택된 값: {selectedOption.name}</p>
    </div>
  )
}
