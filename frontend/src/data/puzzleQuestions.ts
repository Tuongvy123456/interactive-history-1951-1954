export type PuzzleQuestion = {
  id: number
  question: string
  answers: Array<{ id: string; label: string }>
  correctAnswer: string
}

export const puzzleQuestions: PuzzleQuestion[] = [
  {
    id: 1,
    question: 'Đại hội II của Đảng quyết định đưa Đảng ra hoạt động công khai với tên gọi nào?',
    answers: [
      { id: 'A', label: 'Đảng Lao động Việt Nam' },
      { id: 'B', label: 'Đảng Cộng sản Đông Dương' },
      { id: 'C', label: 'Đảng Cộng sản Việt Nam' },
      { id: 'D', label: 'Đảng Dân chủ Việt Nam' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 2,
    question: 'Kế hoạch Nava được đề ra nhằm mục đích chủ yếu nào?',
    answers: [
      { id: 'A', label: 'Rút quân ngay lập tức' },
      { id: 'B', label: 'Giành lại quyền chủ động chiến lược' },
      { id: 'C', label: 'Ngừng xây dựng cứ điểm' },
      { id: 'D', label: 'Mở rộng chiến tranh ra toàn châu Á' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 3,
    question: 'Phương châm tác chiến ban đầu tại Điện Biên Phủ là gì?',
    answers: [
      { id: 'A', label: 'Đánh chắc, tiến chắc' },
      { id: 'B', label: 'Phòng ngự tích cực' },
      { id: 'C', label: 'Đánh nhanh, thắng nhanh' },
      { id: 'D', label: 'Vây ép tiến công' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 4,
    question: 'Phương châm tác chiến sau khi được cân nhắc lại là gì?',
    answers: [
      { id: 'A', label: 'Đánh lâu dài' },
      { id: 'B', label: 'Tiêu hao sinh lực' },
      { id: 'C', label: 'Tổng tiến công' },
      { id: 'D', label: 'Đánh chắc, tiến chắc' },
    ],
    correctAnswer: 'D',
  },
  {
    id: 5,
    question: 'Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày nào?',
    answers: [
      { id: 'A', label: '07/05/1954' },
      { id: 'B', label: '30/04/1954' },
      { id: 'C', label: '20/07/1954' },
      { id: 'D', label: '02/09/1954' },
    ],
    correctAnswer: 'A',
  },
]

