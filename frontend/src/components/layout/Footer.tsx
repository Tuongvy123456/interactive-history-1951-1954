import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../common/Icon'

type FooterState = {
  stage: string
  step: string
  previous?: string
  next?: string
  nextLabel?: string
}

const footerStates: Record<string, FooterState> = {
  '/game/level-1': { stage: 'Màn 01 / 03', step: 'Dòng thời gian', previous: '/game', next: '/game/level-2' },
  '/game/level-2': { stage: 'Màn 02 / 03', step: 'Bàn diễn biến', previous: '/game/level-1', next: '/game/level-3' },
  '/game/level-3': { stage: 'Màn 03 / 03', step: 'Giải mã bức tranh', previous: '/game/level-2', next: '/final' },
  '/final': { stage: 'Đoạn kết', step: 'Điện Biên Phủ', previous: '/game/level-3', next: '/completed', nextLabel: 'Hoàn thành' },
}

export function Footer() {
  const { pathname } = useLocation()
  const state = footerStates[pathname]

  return (
    <footer className="app-footer">
      <div className="app-footer__meta">
        <strong>{state?.stage ?? 'Hồ sơ 1951–1954'}</strong>
        <span>{state?.step ?? 'Tư liệu giáo dục lịch sử'}</span>
      </div>
      <div className="app-footer__actions">
        {state?.previous && (
          <Link to={state.previous}>
            <Icon name="arrow_back" /> Quay lại
          </Link>
        )}
        {state?.next && (
          <Link className="is-primary" to={state.next}>
            {state.nextLabel ?? 'Tiếp tục'} <Icon name="arrow_forward" />
          </Link>
        )}
      </div>
    </footer>
  )
}

