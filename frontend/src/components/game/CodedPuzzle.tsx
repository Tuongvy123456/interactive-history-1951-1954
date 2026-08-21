import { puzzleRegions } from '../../data/puzzleRegions'

type CodedPuzzleProps = {
  revealedCodes: Set<string>
  complete: boolean
}

export function CodedPuzzle({ revealedCodes, complete }: CodedPuzzleProps) {
  return (
    <div className={`coded-puzzle ${complete ? 'is-complete' : ''}`}>
      <div className="coded-puzzle__meta"><span>Ảnh mã hóa: DBP–54</span><span>60 vùng</span></div>
      <svg aria-label="Bức tranh mã hóa gồm 60 vùng đa giác" role="img" viewBox="0 0 500 600">
        <title>Bức tranh lịch sử được giải mã theo câu trả lời đúng</title>
        <rect fill="#ead18a" height="600" width="500" />
        {puzzleRegions.map((region) => {
          const revealed = revealedCodes.has(region.code)
          return (
            <g key={region.regionId}>
              <polygon
                className={revealed ? 'is-revealed' : ''}
                fill={revealed ? region.fillColor : '#e6ca7f'}
                points={region.points}
              />
              {!revealed && (
                <text className="puzzle-code" x={region.points.split(' ')[0].split(',')[0]} y={region.points.split(' ')[0].split(',')[1]}>
                  {region.code}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <p>Những vùng có mã tương ứng với đáp án đúng sẽ được tô sau khi xác nhận.</p>
    </div>
  )
}

