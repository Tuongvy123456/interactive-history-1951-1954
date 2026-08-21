export type TimelineEvent = {
  id: string
  label: string
  title: string
  description: string
  order: number
}

export const timelineSlots = ['1951', 'Cuối 1951', '1952', 'Đầu 1953', 'Giữa 1953', '1954']

export const timelineEvents: TimelineEvent[] = [
  { id: 'event-1', label: '#HS-01', title: 'Đại hội II', description: 'Hoàn thiện đường lối kháng chiến.', order: 1 },
  { id: 'event-2', label: '#HS-02', title: 'Chiến dịch Hòa Bình', description: 'Mở rộng thế chủ động trên chiến trường.', order: 2 },
  { id: 'event-3', label: '#HS-03', title: 'Chiến dịch Tây Bắc', description: 'Mở rộng vùng giải phóng ở Tây Bắc.', order: 3 },
  { id: 'event-4', label: '#HS-04', title: 'Chiến dịch Thượng Lào', description: 'Phối hợp chiến đấu trên chiến trường Lào.', order: 4 },
  { id: 'event-5', label: '#HS-05', title: 'Kế hoạch Nava', description: 'Đối phương tìm cách giành lại thế chủ động.', order: 5 },
  { id: 'event-6', label: '#HS-06', title: 'Điện Biên Phủ', description: 'Chiến dịch kết thúc ngày 07/05/1954.', order: 6 },
]

export const initialTimelineOrder = ['event-4', 'event-1', 'event-6', 'event-3', 'event-5', 'event-2']

