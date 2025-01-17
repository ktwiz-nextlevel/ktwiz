export default function VideoEmbed({ embedUrl }: { embedUrl: string }) {
  return (
    <iframe
      src={embedUrl}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
      }}
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  )
}
