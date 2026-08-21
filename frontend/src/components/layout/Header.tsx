import { NavLink } from 'react-router-dom'
import { Icon } from '../common/Icon'

type HeaderProps = {
  menuAvailable: boolean
  mobileMenuOpen: boolean
  soundEnabled: boolean
  onToggleMenu: () => void
  onToggleSound: () => void
}

export function Header({ menuAvailable, mobileMenuOpen, soundEnabled, onToggleMenu, onToggleSound }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__brand">1951–1954</div>
      <nav aria-label="Điều hướng chính" className="app-header__nav">
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="/theory">
          Lý thuyết
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="/game">
          Trò chơi
        </NavLink>
      </nav>
      <div className="app-header__actions">
        <button aria-label={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'} onClick={onToggleSound} type="button">
          <Icon name={soundEnabled ? 'volume_up' : 'volume_off'} />
        </button>
        <NavLink aria-label="Về trang chủ" className="app-header__home" to="/">
          <Icon name="home" />
        </NavLink>
        {menuAvailable && (
          <button
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            className="app-header__menu"
            onClick={onToggleMenu}
            type="button"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} />
          </button>
        )}
      </div>
    </header>
  )
}
