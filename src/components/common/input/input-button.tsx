interface InputBtn {
  children: React.ReactNode
}

export default function InputBtn({ children }: InputBtn) {
  return (
    <button className="h-[56px] w-full rounded-full text-[20px] hover:border-none focus:outline-none">
      {children}
    </button>
  )
}
