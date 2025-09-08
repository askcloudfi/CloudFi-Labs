import { ReactNode } from 'react'

export default function RolesLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="py-6">
      {children}
    </div>
  )
}