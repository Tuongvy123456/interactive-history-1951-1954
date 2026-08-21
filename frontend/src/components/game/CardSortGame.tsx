import { type DragEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { level2Cards } from '../../data/level2Cards'
import { level2Categories } from '../../data/level2Categories'
import type { SortCard } from '../../data/gameTypes'
import { Icon } from '../common/Icon'

type SortStatus = 'idle' | 'partial' | 'correct'
type Assignments = Record<string, string>

const initialOrder = ['G', 'A', 'K', 'D', 'H', 'C', 'J', 'F', 'B', 'L', 'E', 'I']

export function CardSortGame() {
  const navigate = useNavigate()
  const [assignments, setAssignments] = useState<Assignments>({})
  const [lockedIds, setLockedIds] = useState<Set<string>>(() => new Set())
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [status, setStatus] = useState<SortStatus>('idle')
  const cardsById = useMemo(() => new Map(level2Cards.map((card) => [card.id, card])), [])
  const assignedCount = Object.keys(assignments).length
  const complete = lockedIds.size === level2Cards.length

  const placeCard = (cardId: string, categoryId: string) => {
    if (lockedIds.has(cardId) || complete) return
    setAssignments((current) => ({ ...current, [cardId]: categoryId }))
    setSelectedCardId(null)
    setStatus('idle')
  }

  const returnCard = (cardId: string) => {
    if (lockedIds.has(cardId) || complete) return
    setAssignments((current) => {
      const next = { ...current }
      delete next[cardId]
      return next
    })
    setSelectedCardId(cardId)
    setStatus('idle')
  }

  const handleDragStart = (event: DragEvent, cardId: string) => {
    event.dataTransfer.setData('text/plain', cardId)
    event.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (event: DragEvent, categoryId: string) => {
    event.preventDefault()
    const cardId = event.dataTransfer.getData('text/plain')
    if (cardsById.has(cardId)) placeCard(cardId, categoryId)
  }

  const validate = () => {
    if (assignedCount !== level2Cards.length) return
    const correctCards = level2Cards.filter((card) => assignments[card.id] === card.categoryId)
    const nextLocked = new Set(correctCards.map((card) => card.id))
    setLockedIds(nextLocked)

    if (nextLocked.size === level2Cards.length) {
      setStatus('correct')
      localStorage.setItem('vnr-game-v2-level-2', 'complete')
      return
    }

    setAssignments(Object.fromEntries(correctCards.map((card) => [card.id, card.categoryId])))
    setStatus('partial')
  }

  const resetUnlocked = () => {
    setAssignments(Object.fromEntries([...lockedIds].map((id) => [id, cardsById.get(id)!.categoryId])))
    setSelectedCardId(null)
    setStatus('idle')
  }

  const renderCard = (card: SortCard, inCategory = false) => {
    const locked = lockedIds.has(card.id)
    return (
      <button
        aria-pressed={selectedCardId === card.id}
        className={`sort-card ${selectedCardId === card.id ? 'is-selected' : ''} ${locked ? 'is-locked' : ''}`}
        disabled={locked}
        draggable={!locked && !complete}
        key={card.id}
        onClick={() => inCategory ? returnCard(card.id) : setSelectedCardId(card.id)}
        onDragStart={(event) => handleDragStart(event, card.id)}
        type="button"
      >
        <span>{card.label}</span>
        <strong>{card.id}</strong>
        <p>{card.content}</p>
        {locked && <small><Icon name="lock" /> Đã khóa đúng</small>}
      </button>
    )
  }

  if (complete) {
    return (
      <section className="paper-card sort-complete" aria-live="polite">
        <p className="page-kicker">Thế trận đã hoàn chỉnh</p>
        <div className="strategy-progression">
          {level2Categories.map((category, index) => (
            <div key={category.id}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{category.progression}</strong>
              {index < level2Categories.length - 1 && <Icon name="south" />}
            </div>
          ))}
        </div>
        <h2>Xác định đúng hướng → tổ chức thực hiện → tạo thế → huy động hậu phương.</h2>
        <button className="button" onClick={() => navigate('/game/level-3')} type="button">
          Tiếp tục <Icon name="arrow_forward" />
        </button>
      </section>
    )
  }

  const poolCards = initialOrder.map((id) => cardsById.get(id)!).filter((card) => !assignments[card.id])

  return (
    <div className="card-sort-game">
      <div className="sort-progress"><span>Đã xếp {assignedCount} / 12 thẻ</span><span>{lockedIds.size} thẻ đã khóa đúng</span></div>
      <section className="sort-categories" aria-label="Bốn nhóm phân loại">
        {level2Categories.map((category) => {
          const categoryCards = level2Cards.filter((card) => assignments[card.id] === category.id)
          return (
            <article
              className={`sort-category ${selectedCardId ? 'can-receive' : ''}`}
              key={category.id}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => handleDrop(event, category.id)}
            >
              <header><span>{categoryCards.length} / 3</span><h2>{category.label}</h2></header>
              <button
                className="sort-category__place"
                disabled={!selectedCardId}
                onClick={() => selectedCardId && placeCard(selectedCardId, category.id)}
                type="button"
              >
                {selectedCardId ? `Đặt thẻ ${selectedCardId} vào nhóm` : 'Chọn một thẻ để đặt'}
              </button>
              <div className="sort-category__cards">{categoryCards.map((card) => renderCard(card, true))}</div>
            </article>
          )
        })}
      </section>

      <section className="paper-card sort-pool" aria-labelledby="sort-pool-title">
        <div className="event-pool__heading">
          <div><p className="page-kicker">Tài liệu chưa phân loại</p><h2 id="sort-pool-title">Hồ sơ Đông – Xuân 1953–1954</h2></div>
          <button className="button button--secondary" onClick={resetUnlocked} type="button"><Icon name="restart_alt" /> Xếp lại thẻ chưa khóa</button>
        </div>
        <p className="sort-pool__hint">Trên máy tính: kéo thẻ vào nhóm. Trên thiết bị cảm ứng: chọn thẻ, sau đó chọn nhóm.</p>
        <div className="sort-pool__grid">{poolCards.map((card) => renderCard(card))}</div>
      </section>

      {status === 'partial' && (
        <div className="status-message status-message--error" aria-live="polite">
          Các thẻ đúng đã được khóa. {level2Cards.length - lockedIds.size} thẻ chưa đúng đã trở về hồ sơ để bạn phân loại lại.
        </div>
      )}
      <div className="game-actions">
        <button className="button" disabled={assignedCount !== level2Cards.length} onClick={validate} type="button">
          <Icon name="fact_check" /> Xác nhận phân loại
        </button>
      </div>
    </div>
  )
}
