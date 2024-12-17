interface TitleName {
  text: string
}

const Title = ({ text }: TitleName) => (
  <div className="flex items-center">
    <div className="mr-2 h-6 w-1 bg-red-500"></div>
    <h2 className="text-xl font-bold text-gray-700">{text}</h2>
  </div>
)

export default Title
