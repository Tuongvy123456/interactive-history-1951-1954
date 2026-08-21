import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CodedPuzzle } from '../components/game/CodedPuzzle'
import { Icon } from '../components/common/Icon'
import { puzzleQuestions } from '../data/puzzleQuestions'
import './game.css'

type PuzzleAnswers = Record<number, string>

export function Level3Page() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState<PuzzleAnswers>({})
  const [score, setScore] = useState<number | null>(null)
  const allAnswered = puzzleQuestions.every((question) => answers[question.id])
  const revealedCodes = useMemo(() => {
    if (score === null) return new Set<string>()
    return new Set(
      puzzleQuestions
        .filter((question) => answers[question.id] === question.correctAnswer)
        .map((question) => `${question.id}${question.correctAnswer}`),
    )
  }, [answers, score])

  const submitAnswers = () => {
    if (!allAnswered) return
    const nextScore = puzzleQuestions.filter((question) => answers[question.id] === question.correctAnswer).length
    setScore(nextScore)
    if (nextScore >= 4) localStorage.setItem('vnr-level-3', 'complete')
  }

  const retry = () => {
    setAnswers({})
    setScore(null)
  }

  return (
    <div className="page game-page">
      <header className="game-page__header game-page__header--split">
        <div>
          <p className="page-kicker">Màn 03 / Vận dụng</p>
          <h1 className="page-heading">Giải mã bức tranh</h1>
          <p className="page-lead">Trả lời đủ năm câu hỏi, sau đó xác nhận một lần để mở các vùng chính xác.</p>
        </div>
        <span className="stamp">Hồ sơ ảnh / 60 vùng</span>
      </header>

      <div className="puzzle-layout">
        <section className="paper-card puzzle-layout__visual">
          <CodedPuzzle complete={score === 5} revealedCodes={revealedCodes} />
          {score !== null && (
            <div className={`puzzle-result ${score === 5 ? 'is-perfect' : ''}`} aria-live="polite">
              <strong>{score} / 5 câu chính xác</strong>
              <span>{score * 20}% bức tranh đã được giải mã</span>
            </div>
          )}
        </section>

        <section className="paper-card puzzle-questions" aria-labelledby="puzzle-question-title">
          <div className="question-panel__meta">
            <h2 id="puzzle-question-title">Tài liệu hỏi cung</h2>
            <span>Đã trả lời {Object.keys(answers).length} / 5</span>
          </div>
          <div className="puzzle-questions__scroll">
            {puzzleQuestions.map((question) => (
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
              {score <= 3 && 'Bạn cần ít nhất 4/5 câu đúng. Hãy xem lại tư liệu và thử lại.'}
              {score === 4 && 'Bạn được phép tiếp tục. Bức tranh mới hoàn thiện 80% vì còn một đáp án chưa đúng.'}
              {score === 5 && 'Bức tranh đã được giải mã hoàn chỉnh.'}
            </div>
          )}

          <div className="question-panel__actions">
            {score === null && (
              <button className="button" disabled={!allAnswered} onClick={submitAnswers} type="button">
                <Icon name="fact_check" /> Xác nhận đáp án
              </button>
            )}
            {score !== null && score <= 3 && (
              <button className="button" onClick={retry} type="button"><Icon name="restart_alt" /> Thử lại</button>
            )}
            {score !== null && score >= 4 && (
              <button className="button" onClick={() => navigate('/final')} type="button">
                Xem đoạn kết <Icon name="arrow_forward" />
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

