import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import './layout.css'

const SIDEBAR_KEY = 'vnr-sidebar-collapsed'

export function AppShell() {
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(SIDEBAR_KEY) === 'true')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const isImmersive = pathname === '/' || pathname === '/final' || pathname === '/completed'

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  const toggleCollapsed = () => {
    setCollapsed((current) => {
      localStorage.setItem(SIDEBAR_KEY, String(!current))
      return !current
    })
  }

  return (
    <div className={`app-shell ${collapsed ? 'sidebar-collapsed' : ''} ${isImmersive ? 'is-immersive' : ''}`}>
      <Header
        menuAvailable={!isImmersive}
        mobileMenuOpen={mobileOpen}
        onToggleMenu={() => setMobileOpen((current) => !current)}
        onToggleSound={() => setSoundEnabled((current) => !current)}
        soundEnabled={soundEnabled}
      />
      {!isImmersive && (
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
          onToggleCollapsed={toggleCollapsed}
        />
      )}
      <main className="app-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
