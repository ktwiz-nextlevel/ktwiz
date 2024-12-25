interface InputProps {
  name?: string
  id?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export default function Input({
  name,
  id,
  placeholder,
  value,
  onChange,
  type = 'text',
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="h-[48px] w-full border-b-2 focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}
