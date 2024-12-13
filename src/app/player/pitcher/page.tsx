import Image from 'next/image'

export default function Pitcher() {
  return (
    <>
      <div className="">
        <Image
          className="object-cover"
          src="/images/player-test-img.jpg"
          alt="Profile Image"
          width={100} // 너비를 기준으로 비율 유지
          height={150} // 높이는 자동 계산
          layout="intrinsic" // 원본 비율 유지
        />
      </div>
    </>
  )
}
