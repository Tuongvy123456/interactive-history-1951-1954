export type HistoricalAnswer = {
  id: string
  label: string
}

export type HistoricalStep = {
  id: number
  title: string
  question: string
  answers: HistoricalAnswer[]
  correctAnswer: string
  hint: string
  animationType: string
  caption: string
}

export const historicalSequence: HistoricalStep[] = [
  {
    id: 1,
    title: 'Đại hội II',
    question: 'Quyết định tổ chức nào đánh dấu bước phát triển mới của Đảng năm 1951?',
    answers: [
      { id: 'A', label: 'Đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam' },
      { id: 'B', label: 'Giải thể toàn bộ tổ chức ở Đông Dương' },
      { id: 'C', label: 'Chuyển trọng tâm sang đấu tranh nghị trường' },
      { id: 'D', label: 'Tạm dừng hoạt động quân sự' },
    ],
    correctAnswer: 'A',
    hint: 'Hãy nhớ dấu mốc tổ chức quan trọng của Đại hội tháng 2 năm 1951.',
    animationType: 'map-split',
    caption: 'Một trung tâm lãnh đạo rõ ràng được xác lập cho cuộc kháng chiến.',
  },
  {
    id: 2,
    title: 'Chính cương 1951',
    question: 'Nhiệm vụ cơ bản nào được nhấn mạnh trong Chính cương năm 1951?',
    answers: [
      { id: 'A', label: 'Chỉ tập trung phát triển thương mại' },
      { id: 'B', label: 'Giành độc lập và xóa bỏ tàn tích phong kiến' },
      { id: 'C', label: 'Từ bỏ mục tiêu độc lập dân tộc' },
      { id: 'D', label: 'Thu hẹp khối đoàn kết toàn dân' },
    ],
    correctAnswer: 'B',
    hint: 'Mục tiêu kết hợp giải phóng dân tộc với thay đổi xã hội.',
    animationType: 'network-connect',
    caption: 'Đường lối chính trị kết nối lực lượng kháng chiến trên toàn quốc.',
  },
  {
    id: 3,
    title: 'Hòa Bình – Tây Bắc – Thượng Lào',
    question: 'Chuỗi chiến dịch 1951–1953 tạo ra tác động chiến lược chủ yếu nào?',
    answers: [
      { id: 'A', label: 'Thu hẹp vùng hoạt động của ta' },
      { id: 'B', label: 'Chấm dứt mọi hoạt động phối hợp' },
      { id: 'C', label: 'Mở rộng thế chủ động và vùng giải phóng' },
      { id: 'D', label: 'Tập trung toàn bộ lực lượng ở đồng bằng' },
    ],
    correctAnswer: 'C',
    hint: 'Quan sát hướng mở rộng từ Hòa Bình lên Tây Bắc và sang Thượng Lào.',
    animationType: 'timeline-advance',
    caption: 'Các hướng tiến công nối tiếp làm thay đổi tương quan trên chiến trường.',
  },
  {
    id: 4,
    title: 'Kế hoạch Nava',
    question: 'Điểm cốt lõi trong cách tổ chức lực lượng của Kế hoạch Nava là gì?',
    answers: [
      { id: 'A', label: 'Phân tán hoàn toàn lực lượng cơ động' },
      { id: 'B', label: 'Rút khỏi toàn bộ Đông Dương ngay lập tức' },
      { id: 'C', label: 'Ngừng xây dựng các tập đoàn cứ điểm' },
      { id: 'D', label: 'Tập trung binh lực để giành lại thế chủ động' },
    ],
    correctAnswer: 'D',
    hint: 'Đối phương muốn tạo một khối cơ động đủ mạnh cho trận quyết định.',
    animationType: 'marker-concentrate',
    caption: 'Các ký hiệu đối phương dồn lại thành những cụm quân lớn.',
  },
  {
    id: 5,
    title: 'Đông–Xuân 1953–1954',
    question: 'Các đòn tiến công trên nhiều hướng buộc đối phương phải làm gì?',
    answers: [
      { id: 'A', label: 'Phân tán lực lượng cơ động ra nhiều địa bàn' },
      { id: 'B', label: 'Tập trung toàn bộ ở Hà Nội' },
      { id: 'C', label: 'Rút khỏi Điện Biên Phủ trước giao chiến' },
      { id: 'D', label: 'Chuyển toàn bộ lực lượng ra biển' },
    ],
    correctAnswer: 'A',
    hint: 'Mỗi hướng tiến công tạo thêm một nơi đối phương buộc phải tăng viện.',
    animationType: 'marker-disperse',
    caption: 'Khối cơ động bị kéo ra nhiều hướng, phá vỡ ý đồ tập trung ban đầu.',
  },
  {
    id: 6,
    title: 'Điện Biên Phủ',
    question: 'Địa bàn nào trở thành điểm quyết chiến chiến lược đầu năm 1954?',
    answers: [
      { id: 'A', label: 'Hòa Bình' },
      { id: 'B', label: 'Điện Biên Phủ' },
      { id: 'C', label: 'Hải Phòng' },
      { id: 'D', label: 'Thượng Lào' },
    ],
    correctAnswer: 'B',
    hint: 'Đó là lòng chảo ở Tây Bắc được xây dựng thành tập đoàn cứ điểm.',
    animationType: 'focus-dien-bien-phu',
    caption: 'Vòng tròn đỏ khóa vào lòng chảo Điện Biên Phủ.',
  },
  {
    id: 7,
    title: 'Hậu cần',
    question: 'Yếu tố nào bảo đảm sức mạnh bền bỉ cho chiến dịch?',
    answers: [
      { id: 'A', label: 'Chỉ dựa vào nguồn tiếp tế tại chỗ' },
      { id: 'B', label: 'Giảm tối đa lực lượng vận chuyển' },
      { id: 'C', label: 'Huy động sức người, sức của và mạng lưới vận chuyển rộng lớn' },
      { id: 'D', label: 'Phụ thuộc hoàn toàn vào đường không' },
    ],
    correctAnswer: 'C',
    hint: 'Hãy nghĩ đến những tuyến người và hàng hóa cùng hội tụ về mặt trận.',
    animationType: 'logistics-converge',
    caption: 'Những tuyến hậu cần từ nhiều hướng cùng hội tụ về chiến trường.',
  },
  {
    id: 8,
    title: 'Phương châm tác chiến',
    question: 'Phương châm cuối cùng được lựa chọn tại Điện Biên Phủ là gì?',
    answers: [
      { id: 'A', label: 'Đánh nhanh, thắng nhanh' },
      { id: 'B', label: 'Đánh chắc, tiến chắc' },
      { id: 'C', label: 'Phòng ngự lâu dài' },
      { id: 'D', label: 'Rút khỏi chiến trường' },
    ],
    correctAnswer: 'B',
    hint: 'Quyết định đặt sự chắc thắng lên trên yêu cầu tốc độ.',
    animationType: 'encircle',
    caption: 'Vòng vây khép lại theo phương châm đánh chắc, tiến chắc.',
  },
]

