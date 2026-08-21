import { CardSortGame } from '../components/game/CardSortGame'
import { GameHeader } from '../components/game/GameHeader'
import './game.css'

export function Level2Page() {
  return (
    <div className="page game-page">
      <GameHeader
        concept="Phân loại & liên kết"
        level="Màn 02"
        progress="12 thẻ / 4 nhóm"
        subtitle="Phân loại các quyết định và hoạt động để tái hiện thế chủ động Đông – Xuân 1953–1954."
        title="Xây dựng thế trận"
      />
      <CardSortGame />
    </div>
  )
}
