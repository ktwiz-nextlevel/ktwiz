'use client'
import { useState } from 'react'
import SelectBox from '@/components/common/select-box'

const options = [
  { name: 'default', displayString: 'default string' },
  { name: 'option 1', displayString: 'Option 1' },
  { name: 'option 2', displayString: 'Option 2' },
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
