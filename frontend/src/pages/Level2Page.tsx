import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HistoricalVisualization } from '../components/game/HistoricalVisualization'
import { Icon } from '../components/common/Icon'
import { historicalSequence } from '../data/historicalSequence'
import './game.css'

export function Level2Page() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [unlockedSteps, setUnlockedSteps] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle')
  const completed = unlockedSteps === historicalSequence.length
  const currentStep = historicalSequence[currentIndex]

  const confirmAnswer = () => {
    if (!selectedAnswer) return
    if (selectedAnswer === currentStep.correctAnswer) {
      setFeedback('correct')
      setUnlockedSteps((count) => Math.max(count, currentIndex + 1))
      if (currentIndex === historicalSequence.length - 1) {
        localStorage.setItem('vnr-level-2', 'complete')
      }
    } else {
      setFeedback('incorrect')
    }
  }

  const nextStep = () => {
    if (currentIndex < historicalSequence.length - 1) {
      setCurrentIndex((index) => index + 1)
      setSelectedAnswer(null)
      setFeedback('idle')
    }
  }

  return (
    <div className="page game-page">
      <header className="game-page__header game-page__header--split">
        <div>
          <p className="page-kicker">Màn 02 / Hiểu</p>
          <h1 className="page-heading">Bàn diễn biến lịch sử</h1>
          <p className="page-lead">Mỗi câu trả lời đúng mở thêm một lớp diễn biến trên bản đồ.</p>
        </div>
        <span className="stamp">Đã mở {unlockedSteps} / 8 lớp</span>
      </header>

      <div className="historical-board">
        <section className="paper-card historical-board__map">
          <HistoricalVisualization unlockedSteps={unlockedSteps} />
          <p className="historical-caption">
            {unlockedSteps > 0 ? historicalSequence[unlockedSteps - 1].caption : 'Bản đồ đang chờ quyết định đầu tiên.'}
          </p>
        </section>

        <section className="paper-card question-panel" aria-live="polite">
          {!completed ? (
            <>
              <div className="question-panel__meta">
                <span>Bước {String(currentStep.id).padStart(2, '0')} / 08</span>
                <span>{currentStep.title}</span>
              </div>
              <h2>{currentStep.question}</h2>
              <div className="answer-list" role="radiogroup" aria-label="Các phương án trả lời">
                {currentStep.answers.map((answer) => (
                  <label className={selectedAnswer === answer.id ? 'is-selected' : ''} key={answer.id}>
                    <input
                      checked={selectedAnswer === answer.id}
                      disabled={feedback === 'correct'}
                      name={`historical-${currentStep.id}`}
                      onChange={() => {
                        setSelectedAnswer(answer.id)
                        setFeedback('idle')
                      }}
                      type="radio"
                    />
                    <span><strong>{answer.id}.</strong> {answer.label}</span>
                  </label>
                ))}
              </div>
              {feedback !== 'idle' && (
                <div className={`status-message ${feedback === 'correct' ? 'status-message--success' : 'status-message--error'}`}>
                  {feedback === 'correct' ? `Chính xác. ${currentStep.caption}` : `Chưa chính xác. Gợi ý: ${currentStep.hint}`}
                </div>
              )}
              <div className="question-panel__actions">
                {feedback === 'correct' && currentIndex < historicalSequence.length - 1 ? (
                  <button className="button" onClick={nextStep} type="button">Câu tiếp theo <Icon name="arrow_forward" /></button>
                ) : (
                  <button className="button" disabled={!selectedAnswer} onClick={confirmAnswer} type="button">
                    <Icon name="done_all" /> Xác nhận quyết định
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="game-complete-panel">
              <Icon name="military_tech" filled />
              <p className="page-kicker">Hoàn thành Màn 02</p>
              <h2>Tám lớp diễn biến đã được tái hiện</h2>
              <p>Bản đồ giữ lại toàn bộ tuyến, điểm chiến lược và mạng lưới hậu cần đã mở.</p>
              <button className="button" onClick={() => navigate('/game/level-3')} type="button">
                Tiếp tục Màn 03 <Icon name="arrow_forward" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

