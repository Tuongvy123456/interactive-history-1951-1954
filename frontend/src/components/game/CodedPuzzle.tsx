import { level3PuzzleRegions } from '../../data/level3PuzzleRegions'

type CodedPuzzleProps = {
  revealedCodes: Set<string>
  complete: boolean
}

export function CodedPuzzle({ revealedCodes, complete }: CodedPuzzleProps) {
  const flagVisible = complete || revealedCodes.has('1A')
  const starVisible = complete || revealedCodes.has('2C')
  const bunkerVisible = complete || revealedCodes.has('3B')

  return (
    <div className={`coded-puzzle ${complete ? 'is-complete' : ''}`}>
      <div className="coded-puzzle__meta"><span>Ảnh mã hóa: DBP–07.05.1954</span><span>{level3PuzzleRegions.length} vùng</span></div>
      <svg aria-label={`Bức tranh Điện Biên Phủ gồm ${level3PuzzleRegions.length} vùng đa giác`} role="img" viewBox="0 0 500 600">
        <title>Lá cờ chiến thắng trên hầm chỉ huy Điện Biên Phủ</title>
        <rect fill="#F6E7BF" height="600" width="500" />
        <g className="puzzle-contours" fill="none" stroke="#8F7754" strokeOpacity=".2">
          <path d="M0 88Q120 34 250 92T500 74M0 226Q130 170 260 222T500 206M0 488Q140 412 280 472T500 446" />
        </g>
        {level3PuzzleRegions.map((region) => {
          const revealed = complete || revealedCodes.has(region.code)
          return (
            <g key={region.id}>
              <polygon className={revealed ? 'is-revealed' : ''} fill={revealed ? region.fill : 'var(--color-sepia)'} points={region.points} />
              {!revealed && <text className="puzzle-code" x={region.labelX} y={region.labelY}>{region.code}</text>}
            </g>
          )
        })}
        <g className={`puzzle-illustration ${flagVisible ? 'is-visible' : ''}`}>
          <path className="puzzle-flag" d="M118 76Q235 38 374 91L360 220Q236 168 120 214Z" />
        </g>
        <polygon
          className={`puzzle-star ${starVisible ? 'is-visible' : ''}`}
          points="246,86 260,119 296,122 268,145 277,180 246,160 215,180 224,145 196,122 232,119"
        />
        <g className={`puzzle-bunker ${bunkerVisible ? 'is-visible' : ''}`}>
          <path d="M98 404L132 286H370L410 404Z" />
          <path d="M166 404V330H334V404M215 404V350H285V404" />
          <path d="M58 476Q174 426 246 458T450 438" />
        </g>
        {complete && <text className="puzzle-date" x="250" y="555">07.05.1954</text>}
      </svg>
      <p>Mỗi mã đáp án đúng mở sáu mảnh của bức tranh. Hoàn thành 5/5 để hiện toàn bộ lá cờ chiến thắng.</p>
    </div>
  )
}
