import './section.css'
export default function WizparkSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className="section">{children}</section>
}
