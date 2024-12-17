'use client'
import {
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

export default function BoardSelectBox({
  options,
  selected,
  onChange,
}: {
  options: OptionType[]
  selected: OptionType
  onChange: (selected: OptionType) => void
}) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[--gray-color-100]">
          <span className="col-start-1 row-start-1 whitespace-nowrap pr-6">
            {selected.displayString}
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-4 self-center justify-self-end text-gray-500"
          />
        </ListboxButton>
        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.name}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[--gray-color-100] data-[focus]:text-white data-[focus]:outline-none"
            >
              <span className="block whitespace-nowrap font-normal group-data-[selected]:font-semibold">
                {option.displayString}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[--gray-color-100] group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="size-3" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
