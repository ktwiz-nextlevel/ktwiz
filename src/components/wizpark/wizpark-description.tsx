import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: '최적의 경기 환경 조성.',
    description:
      '야구장의 온도와 습도, 조명을 자동 조절할 수 있는 유비쿼터스 센서 네트워크 시스템(USN)을 도입하여 선수단과 팬들에게 경기에 더욱 집중할 수 있는 최적의 경기 환경을 제공합니다.',
    icon: CloudArrowUpIcon,
  },
  {
    name: '스마트한 구장 시설.',
    description:
      '구장 내 무선 인터넷(WIFI) 설치 등 ICT 인프라 확충을 통해 다양한 모바일 기기를 활용하여 입장 등록, 실시간 주차 정보, 지정석 찾기, 음식 주문 등 다른 경기장에서 경험하지 못했던 스마트한 콘텐츠를 이용하실 수 있습니다.',
    icon: LockClosedIcon,
  },
  {
    name: '다양한 관람층을 위한 복합 문화공간.',
    description:
      '익사이팅석, 프랜들리서, 커플석, 패밀리석, 장애인석 등 다양한 관람층을 고려하여 완벽한 관람시설을 제공하고, 각종 센서와 모바일 기기가 설치된 체험존 등을 제공하여 경기 관람 뿐 아니라 오락, 레저, 교육의 복합 문화공간을 선보입니다.',
    icon: ServerIcon,
  },
]

export default function WizparkDescription() {
  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                복합 문화공간의 첨단 야구장!
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                수원 구장
              </p>
              {/*<p className="mt-6 text-lg/8 text-gray-600">*/}
              {/*</p>*/}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/wiz-park/ktwizpark.jpg"
            width={2432}
            height={1442}
            className="m-auto w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
