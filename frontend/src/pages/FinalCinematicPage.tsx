import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/common/Icon'
import './cinematic.css'

const phaseNames = ['Quyết định', 'Hậu cần', 'Phương châm', 'Ba đợt tiến công', 'Chiến thắng']

export function FinalCinematicPage() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || phase >= phaseNames.length - 1) return
    const timer = window.setTimeout(() => setPhase((current) => current + 1), 4300)
    return () => window.clearTimeout(timer)
  }, [phase])

  const finish = () => {
    localStorage.setItem('vnr-final', 'complete')
    navigate('/completed')
  }

  return (
    <div className="cinematic-page">
      <div className="cinematic-grain" />
      <div className="cinematic-progress" aria-label={`Cảnh ${phase + 1} trên ${phaseNames.length}`}>
        {phaseNames.map((name, index) => (
          <button
            aria-label={`Chuyển đến cảnh ${name}`}
            className={index === phase ? 'is-active' : index < phase ? 'is-past' : ''}
            key={name}
            onClick={() => setPhase(index)}
            type="button"
          ><span>{index + 1}</span><small>{name}</small></button>
        ))}
      </div>

      <section className={`cinematic-phase ${phase === 0 ? 'is-active' : ''}`} aria-hidden={phase !== 0}>
        <div className="decision-map" aria-hidden="true">
          <svg viewBox="0 0 600 420">
            <path d="M80 100Q200 20 310 105T550 100M30 250Q170 160 300 240T590 220" />
            <circle cx="355" cy="235" r="92" />
            <circle className="decision-map__point" cx="355" cy="235" r="9" />
            <text x="355" y="220">Điện Biên Phủ</text>
          </svg>
        </div>
        <p className="cinematic-kicker">Hồ sơ tác chiến / 1953</p>
        <h1>Quyết định</h1>
        <p>Điện Biên Phủ được khoanh trên bản đồ chiến lược.</p>
      </section>

      <section className={`cinematic-phase ${phase === 1 ? 'is-active' : ''}`} aria-hidden={phase !== 1}>
        <div className="logistics-map" aria-hidden="true">
          <svg viewBox="0 0 700 470">
            <g className="logistics-routes">
              <path d="M80 80L350 235" /><path d="M620 80L350 235" />
              <path d="M80 390L350 235" /><path d="M620 390L350 235" />
              <path d="M40 235H350" />
            </g>
            <circle cx="350" cy="235" r="18" />
            <text x="350" y="275">Mặt trận</text>
            <text x="75" y="68">Nhân lực</text><text x="625" y="68">Lương thực</text>
            <text x="75" y="420">Đạn dược</text><text x="625" y="420">Trang bị</text>
          </svg>
        </div>
        <p className="cinematic-kicker">Nguồn lực hội tụ</p>
        <h1>Hậu cần</h1>
        <p>Những tuyến vận chuyển cùng hướng về chiến trường.</p>
      </section>

      <section className={`cinematic-phase ${phase === 2 ? 'is-active' : ''}`} aria-hidden={phase !== 2}>
        <p className="cinematic-kicker">Phương châm tác chiến</p>
        <h1 className="cinematic-principle"><span>Đánh chắc</span><i>—</i><span>Tiến chắc</span></h1>
        <div className="cinematic-lines" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <section className={`cinematic-phase ${phase === 3 ? 'is-active' : ''}`} aria-hidden={phase !== 3}>
        <div className="campaign-card paper-card">
          <p className="cinematic-kicker">13.03.1954</p>
          <div className="campaign-waves"><span>Đợt 1</span><span>Đợt 2</span><span>Đợt 3</span></div>
          <svg aria-hidden="true" viewBox="0 0 500 280">
            <circle cx="250" cy="140" r="8" />
            <path d="M150 45Q250 5 350 45" />
            <path d="M90 80Q150 140 90 205M410 80Q350 140 410 205" />
            <path d="M150 235Q250 275 350 235" />
            <circle className="campaign-ring" cx="250" cy="140" r="112" />
          </svg>
        </div>
      </section>

      <section className={`cinematic-phase cinematic-finale ${phase === 4 ? 'is-active' : ''}`} aria-hidden={phase !== 4}>
        <p className="cinematic-time">17:30</p>
        <p className="cinematic-date">07.05.1954</p>
        <h1>Điện Biên Phủ</h1>
        <p>Từ những quyết định, nguồn lực và phương châm tác chiến, một chiến dịch lịch sử đi đến hồi kết.</p>
      </section>

      <div className="cinematic-controls">
        <button className="button button--secondary" onClick={() => setPhase(phaseNames.length - 1)} type="button">
          Bỏ qua đoạn phim
        </button>
        {phase < phaseNames.length - 1 ? (
          <button className="button" onClick={() => setPhase((current) => current + 1)} type="button">
            Cảnh tiếp theo <Icon name="arrow_forward" />
          </button>
        ) : (
          <button className="button" onClick={finish} type="button">
            Hoàn thành hành trình <Icon name="military_tech" />
          </button>
        )}
      </div>
    </div>
  )
}

