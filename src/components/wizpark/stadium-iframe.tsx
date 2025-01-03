import './iframe.css'
function StadiumIframe() {
  return (
    <div>
      <iframe
        src="https://stadium.kimpuro.com"
        width={1100}
        height={636.172}
        title="KTWiz Stadium 3D"
        className="hidden md:block"
      ></iframe>
    </div>
  )
}

export default StadiumIframe
