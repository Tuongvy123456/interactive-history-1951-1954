import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameHeader } from '../components/game/GameHeader'
import { KnowledgeTree } from '../components/game/KnowledgeTree'
import { Icon } from '../components/common/Icon'
import { level1Questions } from '../data/level1Questions'
import './game.css'

type Feedback = 'idle' | 'correct' | 'incorrect'

export function Level1Page() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<Feedback>('idle')
  const [unlockedBranches, setUnlockedBranches] = useState<Set<string>>(() => new Set())
  const [unlockedNodes, setUnlockedNodes] = useState<Set<string>>(() => new Set())
  const [activeBranch, setActiveBranch] = useState<string | null>(null)
  const question = level1Questions[currentIndex]
  const complete = currentIndex === level1Questions.length - 1 && feedback === 'correct'

  const confirmAnswer = () => {
    if (!selectedAnswer) return
    if (selectedAnswer !== question.correctAnswer) {
      setFeedback('incorrect')
      return
    }

    const branchesToUnlock = question.unlockBranches ?? [question.unlockBranch]
    setFeedback('correct')
    setActiveBranch(question.unlockBranch)
    setUnlockedBranches((current) => new Set([...current, ...branchesToUnlock]))
    setUnlockedNodes((current) => new Set([...current, ...question.unlockNodes]))
    if (currentIndex === level1Questions.length - 1) localStorage.setItem('vnr-game-v2-level-1', 'complete')
  }

  const nextQuestion = () => {
    setCurrentIndex((index) => index + 1)
    setSelectedAnswer(null)
    setFeedback('idle')
    setActiveBranch(null)
  }

  return (
    <div className="page game-page">
      <GameHeader
        concept="Nhận biết & hiểu"
        level="Màn 01"
        progress={`Câu ${complete ? 8 : currentIndex + 1} / 8`}
        subtitle="Trả lời đúng để từng bước hoàn thiện sơ đồ Đại hội II và Chính cương 1951."
        title="Giải mã đường lối 1951"
      />

      <div className="knowledge-game-layout">
        <section className="paper-card knowledge-game-layout__visual" aria-label="Sơ đồ tri thức đường lối 1951">
          <KnowledgeTree
            activeBranch={activeBranch}
            complete={complete}
            unlockedBranches={unlockedBranches}
            unlockedNodes={unlockedNodes}
          />
        </section>

        <section className={`paper-card question-panel knowledge-question ${feedback === 'correct' ? 'is-resolved' : ''}`} aria-live="polite">
          {!complete ? (
            <>
              <div className="question-panel__meta"><span>Câu {question.id} / 08</span><span>{question.topic}</span></div>
              <h2>{question.question}</h2>
              <div className="answer-list" role="radiogroup" aria-label="Các phương án trả lời">
                {question.answers.map((answer) => (
                  <label className={selectedAnswer === answer.id ? 'is-selected' : ''} key={answer.id}>
                    <input
                      checked={selectedAnswer === answer.id}
                      disabled={feedback === 'correct'}
                      name={`level-1-${question.id}`}
                      onChange={() => { setSelectedAnswer(answer.id); setFeedback('idle') }}
                      type="radio"
                    />
                    <span><strong>{answer.id}.</strong> {answer.label}</span>
                  </label>
                ))}
              </div>
              {feedback !== 'idle' && (
                <div className={`status-message ${feedback === 'correct' ? 'status-message--success' : 'status-message--error'}`}>
                  {feedback === 'correct' ? `Chính xác. ${question.explanation}` : 'Chưa chính xác. Hãy đối chiếu nội dung Đại hội II và Chính cương 1951 rồi thử lại.'}
                </div>
              )}
              <div className="question-panel__actions">
                {feedback === 'correct' ? (
                  <button className="button" onClick={nextQuestion} type="button">Câu tiếp theo <Icon name="arrow_forward" /></button>
                ) : (
                  <button className="button" disabled={!selectedAnswer} onClick={confirmAnswer} type="button"><Icon name="fact_check" /> Xác nhận đáp án</button>
                )}
              </div>
            </>
          ) : (
            <div className="game-complete-panel">
              <Icon name="verified" filled />
              <p className="page-kicker">Hoàn thành Màn 01</p>
              <h2>Đường lối 1951 đã được giải mã</h2>
              <p>Đại hội II và Chính cương 1951 đã xác lập tổ chức, nhiệm vụ, lực lượng và phương hướng của cách mạng.</p>
              <button className="button" onClick={() => navigate('/game/level-2')} type="button">Tiếp tục <Icon name="arrow_forward" /></button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
