import { Link } from 'react-router-dom'
import { Icon } from '../components/common/Icon'
import { theoryChapters } from '../data/theoryChapters'
import './pages.css'

export function TheoryPage() {
  return (
    <div className="page theory-page">
      <header className="section-header">
        <div>
          <p className="page-kicker"><Icon name="folder_special" /> Hồ sơ mật – Cấp độ 1</p>
          <h1 className="page-heading">Lý thuyết</h1>
          <p className="page-lead">Từ năm 1951 đến Chiến thắng Điện Biên Phủ năm 1954.</p>
        </div>
        <span className="stamp">Tư liệu lưu trữ</span>
      </header>

      <section aria-label="Danh sách chương" className="chapter-grid">
        {theoryChapters.map((chapter) => (
          <article className="paper-card chapter-card" key={chapter.slug}>
            <div className="chapter-card__meta">
              <span>Chương {chapter.number}</span>
              <strong>{chapter.period}</strong>
            </div>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            <img alt={chapter.imageAlt} src={chapter.image} />
            <Link className="button" to={`/theory/${chapter.slug}`}>
              Đọc nội dung <Icon name="arrow_forward" />
            </Link>
          </article>
        ))}
      </section>

      <div className="theory-cta">
        <p>Đã nắm rõ tình hình chiến sự?</p>
        <Link className="button" to="/game"><Icon name="sports_esports" /> Bắt đầu trò chơi</Link>
      </div>
    </div>
  )
}

