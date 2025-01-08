import './section.css'
export default function WizparkSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className="section pt-24 sm:pt-32">{children}</section>
}
