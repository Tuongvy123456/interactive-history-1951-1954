export type PuzzleRegion = {
  regionId: string
  code: string
  points: string
  fillColor: string
}

const answerLetters = ['A', 'B', 'C', 'D']
const revealColors: Record<string, string> = {
  '1A': '#b52820',
  '2B': '#5a3324',
  '3C': '#777052',
  '4D': '#b48a4a',
  '5A': '#8c1f1a',
}

function getRegionCode(row: number, column: number, triangle: number) {
  if (row <= 1 && column >= 1 && column <= 3) return '1A'
  if (column === 2 && row >= 2) return '2B'
  if (row >= 2 && row <= 4 && (column === 1 || column === 3)) return '3C'
  if ((row === 0 || row === 4) && (column === 0 || column === 4)) return '4D'
  if (row === 5 && column >= 1 && column <= 3) return '5A'

  const question = ((row * 5 + column + triangle) % 5) + 1
  const letter = answerLetters[(row + column + triangle + 1) % answerLetters.length]
  return `${question}${letter}`
}

export const puzzleRegions: PuzzleRegion[] = Array.from({ length: 6 }).flatMap((_, row) =>
  Array.from({ length: 5 }).flatMap((__, column) => {
    const x = column * 100
    const y = row * 100
    return [0, 1].map((triangle) => {
      const code = getRegionCode(row, column, triangle)
      return {
        regionId: `region-${row}-${column}-${triangle}`,
        code,
        points:
          triangle === 0
            ? `${x},${y} ${x + 100},${y} ${x},${y + 100}`
            : `${x + 100},${y} ${x + 100},${y + 100} ${x},${y + 100}`,
        fillColor: revealColors[code] ?? '#d8bd73',
      }
    })
  }),
)

