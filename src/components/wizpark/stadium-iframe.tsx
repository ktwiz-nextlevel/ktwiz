import './iframe.css'
import IframeBanner from '@/components/wizpark/iframe-banner'
function StadiumIframe() {
  return (
    <div className="hidden lg:block">
      <IframeBanner />
      <iframe
        src="https://stadium.kimpuro.com"
        width={1100}
        height={636.172}
        title="KTWiz Stadium 3D"
      ></iframe>
    </div>
  )
}

export default StadiumIframe
