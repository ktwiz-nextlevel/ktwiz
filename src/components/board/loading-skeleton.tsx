export function LoadingSkeleton() {
  return (
    <div className="relative h-full min-h-[500px] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-500 border-t-transparent"></div>
      </div>
    </div>
  )
}
