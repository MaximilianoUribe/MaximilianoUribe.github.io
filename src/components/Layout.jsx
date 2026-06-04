import TopBar from './TopBar.jsx'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <TopBar />
      <main className="content">{children}</main>
    </div>
  )
}
