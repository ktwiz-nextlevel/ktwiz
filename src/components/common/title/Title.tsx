interface TitleName {
  text: string
}

const Title = ({ text }: TitleName) => (
  <div className="flex items-center">
    <div className="mr-2 h-6 w-1 bg-red-500"></div>
    <span className="text-2xl font-bold text-black">{text}</span>
  </div>
)

export default Title
