import { Link } from 'react-router-dom'
import { Icon } from '../components/common/Icon'
import './pages.css'

const levels = [
  {
    number: '01',
    concept: 'Nhớ',
    title: 'Xếp lại dòng lịch sử',
    description: 'Sắp xếp sáu sự kiện theo đúng trình tự từ năm 1951 đến năm 1954.',
    icon: 'history',
    to: '/game/level-1',
  },
  {
    number: '02',
    concept: 'Hiểu',
    title: 'Bàn diễn biến lịch sử',
    description: 'Trả lời tám câu hỏi để từng lớp diễn biến xuất hiện trên bản đồ.',
    icon: 'hub',
    to: '/game/level-2',
  },
  {
    number: '03',
    concept: 'Vận dụng',
    title: 'Giải mã bức tranh',
    description: 'Hoàn thành năm câu hỏi để giải mã sáu mươi vùng của bức tranh.',
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

