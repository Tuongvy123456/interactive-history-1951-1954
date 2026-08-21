import { DragEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../common/Icon'
import {
  initialTimelineOrder,
  timelineEvents,
  timelineSlots,
  type TimelineEvent,
} from '../../data/timelineEvents'

type TimelineStatus = 'idle' | 'incomplete' | 'incorrect' | 'correct'

export function TimelineGame() {
  const navigate = useNavigate()
  const [slots, setSlots] = useState<Array<string | null>>(() => Array(timelineSlots.length).fill(null))
  const [poolOrder, setPoolOrder] = useState(initialTimelineOrder)
  const [status, setStatus] = useState<TimelineStatus>('idle')
  const locked = status === 'correct'

  const eventById = useMemo(
    () => new Map(timelineEvents.map((event) => [event.id, event])),
    [],
  )

  const poolEvents = poolOrder
    .filter((id) => !slots.includes(id))
    .map((id) => eventById.get(id))
    .filter((event): event is TimelineEvent => Boolean(event))

  const placeEvent = (eventId: string, targetIndex: number) => {
    if (locked) return
    setStatus('idle')
    setSlots((current) => {
      const next = [...current]
      const sourceIndex = next.indexOf(eventId)
      const displaced = next[targetIndex]
      next[targetIndex] = eventId
      if (sourceIndex >= 0) next[sourceIndex] = displaced
      return next
    })
  }

  const returnToPool = (eventId: string) => {
    if (locked) return
    setStatus('idle')
    setSlots((current) => current.map((id) => (id === eventId ? null : id)))
    setPoolOrder((current) => [eventId, ...current.filter((id) => id !== eventId)])
  }

  const handleDragStart = (event: DragEvent, eventId: string) => {
    event.dataTransfer.setData('text/plain', eventId)
    event.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (event: DragEvent, targetIndex: number) => {
    event.preventDefault()
    const eventId = event.dataTransfer.getData('text/plain')
    if (eventById.has(eventId)) placeEvent(eventId, targetIndex)
  }

  const validateTimeline = () => {
    if (slots.some((slot) => slot === null)) {
      setStatus('incomplete')
      return
    }

    const correct = slots.every((eventId, index) => eventById.get(eventId!)?.order === index + 1)
    if (correct) {
      setStatus('correct')
      localStorage.setItem('vnr-level-1', 'complete')
    } else {
      setStatus('incorrect')
    }
  }

  const resetTimeline = () => {
    setSlots(Array(timelineSlots.length).fill(null))
    setPoolOrder((current) => [...current].reverse())
    setStatus('idle')
  }

  return (
    <div className="timeline-game">
      <section aria-label="Dòng thời gian" className="timeline-slots">
        {timelineSlots.map((label, index) => {
          const timelineEvent = slots[index] ? eventById.get(slots[index]!) : undefined
          return (
            <div className="timeline-slot-wrap" key={label}>
              <div
                aria-label={`Vị trí ${label}`}
                className={`timeline-slot ${timelineEvent ? 'has-event' : ''}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => handleDrop(event, index)}
              >
                {timelineEvent ? (
                  <button
                    aria-label={`Đưa ${timelineEvent.title} trở lại hồ sơ`}
                    className="timeline-event timeline-event--placed"
                    disabled={locked}
                    draggable={!locked}
                    onClick={() => returnToPool(timelineEvent.id)}
                    onDragStart={(event) => handleDragStart(event, timelineEvent.id)}
                    type="button"
                  >
                    <span>{timelineEvent.label}</span><strong>{timelineEvent.title}</strong>
                  </button>
                ) : (
                  <span>Kéo hoặc chọn sự kiện</span>
                )}
              </div>
              <i />
              <strong>{label}</strong>
            </div>
          )
        })}
      </section>

      <section className="paper-card event-pool" aria-labelledby="event-pool-title">
        <div className="event-pool__heading">
          <div><p className="page-kicker">Tài liệu chưa xếp</p><h2 id="event-pool-title">Hồ sơ sự kiện</h2></div>
          <button className="button button--secondary" disabled={locked} onClick={resetTimeline} type="button">
            <Icon name="restart_alt" /> Xếp lại
          </button>
        </div>
        <div className="event-pool__grid">
          {poolEvents.map((timelineEvent) => (
            <button
              className="timeline-event"
              draggable={!locked}
              key={timelineEvent.id}
              onClick={() => {
                const firstEmpty = slots.indexOf(null)
                if (firstEmpty >= 0) placeEvent(timelineEvent.id, firstEmpty)
              }}
              onDragStart={(event) => handleDragStart(event, timelineEvent.id)}
              type="button"
            >
              <span>{timelineEvent.label}</span>
              <strong>{timelineEvent.title}</strong>
              <small>{timelineEvent.description}</small>
            </button>
          ))}
          {poolEvents.length === 0 && <p className="event-pool__empty">Tất cả hồ sơ đã được đặt lên dòng thời gian.</p>}
        </div>
      </section>

      {status !== 'idle' && (
        <div
          aria-live="polite"
          className={`status-message ${status === 'correct' ? 'status-message--success' : 'status-message--error'}`}
        >
          {status === 'incomplete' && 'Hãy đặt đủ sáu sự kiện trước khi xác nhận.'}
          {status === 'incorrect' && 'Thứ tự chưa chính xác. Hãy kiểm tra lại các mốc thời gian và thử lần nữa.'}
          {status === 'correct' && 'Dòng thời gian chính xác. Các vị trí đã được khóa.'}
        </div>
      )}

      <div className="game-actions">
        {status === 'correct' ? (
          <button className="button" onClick={() => navigate('/game/level-2')} type="button">
            Tiếp tục Màn 02 <Icon name="arrow_forward" />
          </button>
        ) : (
          <button className="button" onClick={validateTimeline} type="button">
            <Icon name="fact_check" /> Xác nhận dòng thời gian
          </button>
        )}
      </div>
    </div>
  )
}

