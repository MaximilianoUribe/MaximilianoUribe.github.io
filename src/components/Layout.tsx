import type { ReactNode } from 'react'
import TopBar from './TopBar.tsx'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <TopBar />
      <main className="content">{children}</main>
    </div>
  )
}
