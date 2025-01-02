import Input from './input'

interface InputProps {
  name?: string
  id?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputWithDelBtn({
  name,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) {
  // 빈 값으로 변경
  const handleDelete = () => {
    onChange({
      target: { name, value: '' },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className="relative">
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {value !== '' && (
        <button
          onClick={(e) => {
            e.stopPropagation() // 이벤트 전파 방지
            handleDelete()
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-0"
        >
          <svg width="1em" height="1em" fill="none" viewBox="0 0 16 16">
            <rect width="100%" height="100%" fill="#999" rx="8"></rect>
            <g>
              <path
                fill="#fff"
                d="m8.524 8 3.117-3.12a.365.365 0 0 0 0-.522.369.369 0 0 0-.524 0L8 7.475 4.883 4.358a.369.369 0 0 0-.524 0 .365.365 0 0 0 0 .521L7.476 8l-3.117 3.12a.365.365 0 0 0 0 .522.371.371 0 0 0 .524 0L8 8.525l3.117 3.117a.371.371 0 0 0 .524 0 .365.365 0 0 0 0-.521L8.524 8Z"
              ></path>
            </g>
            <defs>
              <clipPath>
                <path fill="#fff" d="M3 3h10v10H3z"></path>
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </div>
  )
}
