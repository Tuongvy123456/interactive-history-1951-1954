import { Link } from 'react-router-dom'
import { Icon } from '../components/common/Icon'
import './pages.css'

const levels = [
  {
    number: '01',
    concept: 'Nhận biết & hiểu',
    title: 'Giải mã đường lối 1951',
    description: 'Hoàn thiện sơ đồ Đại hội II và Chính cương 1951 qua các câu hỏi.',
    icon: 'account_tree',
    to: '/game/level-1',
  },
  {
    number: '02',
    concept: 'Phân loại & liên kết',
    title: 'Xây dựng thế trận',
    description: 'Phân loại các quyết định và hoạt động của Đông – Xuân 1953–1954.',
    icon: 'view_kanban',
    to: '/game/level-2',
  },
  {
    number: '03',
    concept: 'Củng cố',
    title: 'Giải mã Điện Biên Phủ',
    description: 'Trả lời đúng để hoàn thiện bức tranh chiến thắng Điện Biên Phủ.',
    icon: 'extension',
    to: '/game/level-3',
  },
]

export function GameSelectPage() {
  return (
    <div className="page game-select">
      <header className="section-header section-header--center">
        <div>
          <p className="page-kicker">Hành trình 1951–1954</p>
          <h1 className="page-heading">Trò chơi</h1>
          <p className="page-lead">Hoàn thành ba thử thách để tái hiện hành trình lịch sử.</p>
        </div>
      </header>
      <section className="level-grid" aria-label="Ba màn chơi">
        {levels.map((level) => (
          <article className="paper-card level-card" key={level.number}>
            <div className="level-card__top"><span>Màn {level.number}</span><span className="stamp">Sẵn sàng</span></div>
            <div className="level-card__icon"><Icon name={level.icon} /></div>
            <span className="mono-label">{level.concept}</span>
            <h2>{level.title}</h2>
            <p>{level.description}</p>
            <Link className="button" to={level.to}>Bắt đầu <Icon name="arrow_forward" /></Link>
          </article>
        ))}
      </section>
    </div>
  )
}
