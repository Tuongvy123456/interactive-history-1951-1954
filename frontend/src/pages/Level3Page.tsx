import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CodedPuzzle } from '../components/game/CodedPuzzle'
import { GameHeader } from '../components/game/GameHeader'
import { Icon } from '../components/common/Icon'
import { level3Questions } from '../data/level3Questions'
import './game.css'

type PuzzleAnswers = Record<string, string>

export function Level3Page() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState<PuzzleAnswers>({})
  const [score, setScore] = useState<number | null>(null)
  const answeredCount = Object.keys(answers).length
  const allAnswered = level3Questions.every((question) => answers[question.id])
  const revealedCodes = useMemo(() => {
    if (score === null) return new Set<string>()
    return new Set(
      level3Questions
        .filter((question) => answers[question.id] === question.correctAnswer)
        .map((question) => `${question.id}${question.correctAnswer}`),
    )
  }, [answers, score])

  const submitAnswers = () => {
    if (!allAnswered) return
    const nextScore = level3Questions.filter((question) => answers[question.id] === question.correctAnswer).length
    setScore(nextScore)
    if (nextScore >= 4) localStorage.setItem('vnr-game-v2-level-3', 'complete')
  }

  const retry = () => {
    setAnswers({})
    setScore(null)
  }

  return (
    <div className="page game-page">
      <GameHeader
        concept="Củng cố"
        level="Màn 03"
        progress={`Đã trả lời ${answeredCount} / 5`}
        subtitle="Trả lời đúng để từng bước hoàn thiện bức tranh chiến thắng."
        title="Giải mã Điện Biên Phủ"
      />

      <div className="puzzle-layout">
        <section className="paper-card puzzle-layout__visual">
          <CodedPuzzle complete={score === 5} revealedCodes={revealedCodes} />
          {score !== null && (
            <div className={`puzzle-result ${score === 5 ? 'is-perfect' : ''}`} aria-live="polite">
              <strong>{score} / 5 câu chính xác</strong>
              <span>{score === 5 ? 'Bức tranh Điện Biên Phủ đã được giải mã' : `${score * 20}% bức tranh đã được giải mã`}</span>
            </div>
          )}
        </section>

        <section className="paper-card puzzle-questions" aria-labelledby="puzzle-question-title">
          <div className="question-panel__meta"><h2 id="puzzle-question-title">Hồ sơ Điện Biên Phủ</h2><span>Đã trả lời {answeredCount} / 5</span></div>
          <div className="puzzle-questions__scroll">
            {level3Questions.map((question) => (
              <fieldset disabled={score !== null} key={question.id}>
                <legend><span>{question.id}</span>{question.question}</legend>
                {question.answers.map((answer) => (
                  <label className={answers[question.id] === answer.id ? 'is-selected' : ''} key={answer.id}>
                    <input
                      checked={answers[question.id] === answer.id}
                      name={`puzzle-${question.id}`}
                      onChange={() => setAnswers((current) => ({ ...current, [question.id]: answer.id }))}
                      type="radio"
                    />
                    <span><strong>{answer.id}.</strong> {answer.label}</span>
                  </label>
                ))}
              </fieldset>
            ))}
          </div>

          {score !== null && (
            <div className={`status-message ${score >= 4 ? 'status-message--success' : 'status-message--error'}`}>
              {score <= 3 && 'Bạn cần ít nhất 4/5 câu đúng. Hãy xem lại hồ sơ chiến dịch và thử lại.'}
              {score === 4 && '80% bức tranh đã được giải mã. Bạn có thể thử lại để hoàn thiện hoặc tiếp tục.'}
              {score === 5 && 'Bức tranh Điện Biên Phủ đã được giải mã hoàn chỉnh.'}
            </div>
          )}

          <div className="question-panel__actions puzzle-actions">
            {score === null && <button className="button" disabled={!allAnswered} onClick={submitAnswers} type="button"><Icon name="fact_check" /> Xác nhận đáp án</button>}
            {score !== null && score <= 3 && <button className="button" onClick={retry} type="button"><Icon name="restart_alt" /> Thử lại</button>}
            {score === 4 && <button className="button button--secondary" onClick={retry} type="button"><Icon name="restart_alt" /> Thử lại để hoàn thiện</button>}
            {score === 4 && <button className="button" onClick={() => navigate('/final')} type="button">Tiếp tục <Icon name="arrow_forward" /></button>}
            {score === 5 && <button className="button" onClick={() => navigate('/final')} type="button">Xem đoạn kết <Icon name="arrow_forward" /></button>}
          </div>
        </section>
      </div>
    </div>
  )
}
