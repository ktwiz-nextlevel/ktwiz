'use client'
import { useState } from 'react'
import SelectBox from '@/components/common/select-box'

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
]

export default function SelectBoxExample() {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (option) => {
    setSelectedOption(option)
    console.log('현재 선택된 값:', option)
  }

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">SelectBox Example</h1>
      <SelectBox option={options} onChange={handleOptionChange} />
      <p className="mt-4">현재 선택된 값: {selectedOption.name}</p>
    </div>
  )
}
