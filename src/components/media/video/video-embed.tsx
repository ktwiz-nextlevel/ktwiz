export default function VideoEmbed({ embedUrl }: { embedUrl: string }) {
  return (
    <iframe
      src={embedUrl}
      style={{
        width: '960px',
        height: '540px',
      }}
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  )
}
