'use client'

import { useState } from 'react'
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

type OptionType = {
  name: string
  displayString: string
}

/**
 * SelectBox 컴포넌트는 option 배열을 받아서 option을 선택할 수 있는 컴포넌트입니다.
 * option은 name과 displayString 가진 객체 배열이어야 합니다.
 * onChange 콜백 함수를 통해 선택된 option에 대한 정보를 받을 수 있습니다.
 * 0번 인덱스를 가진 객체는 초기 선택 값으로 설정됩니다.
 * 자세한 사용 방법은 같이 있는 SelectBoxExample 컴포넌트를 참고해주세요.
 * @param option - name과 displayString을 가진 객체 배열
 * @param onChange - 선택된 option을 인자로 받는 콜백 함수
 */

//  상태 관리에 관한 부분은 협의가 필요
export default function SelectBox({
  option,
  onChange,
}: {
  option: OptionType[]
  onChange: (selected: OptionType) => void
}) {
  const [selected, setSelected] = useState(option[0])

  const handleChange = (value: OptionType) => {
    setSelected(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      {/* width 크기는 여기 div를 조절 */}
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 truncate pr-6">
            {selected.name}
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {option.map((options) => (
            <ListboxOption
              key={options.displayString}
              value={options}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {options.name}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
