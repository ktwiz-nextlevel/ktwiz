import './container.css'
export default function WizparkContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="container">{children}</div>
}
