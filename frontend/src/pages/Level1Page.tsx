import { TimelineGame } from '../components/game/TimelineGame'
import './game.css'

export function Level1Page() {
  return (
    <div className="page game-page">
      <header className="game-page__header">
        <p className="page-kicker">Màn 01 / Nhớ</p>
        <h1 className="page-heading">Xếp lại dòng lịch sử</h1>
        <p className="page-lead">Đưa các sự kiện về đúng vị trí trên dòng thời gian 1951–1954.</p>
      </header>
      <TimelineGame />
    </div>
  )
}

