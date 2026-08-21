export type TheoryChapter = {
  slug: string
  number: string
  period: string
  title: string
  summary: string
  image: string
  imageAlt: string
  facts: Array<{ label: string; value: string }>
  paragraphs: string[]
  keyPoints: Array<{ title: string; body: string }>
}

export const theoryChapters: TheoryChapter[] = [
  {
    slug: 'dai-hoi-ii',
    number: '01',
    period: '1951',
    title: 'Đại hội II và đường lối',
    summary: 'Đại hội II, Chính cương năm 1951 và bước phát triển mới của đường lối kháng chiến.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD1sgrnvLBAFbpn2My3dRLVnB2wQOKsapWeH4neEVLWec3Xq5lP8vLEBwXXXJeBtCz9mtKvLWG-Dd35_SUFd5bCRFTCcTEXbI6Cs2KEU2uUOvMMhq4EKFO-5TYYlfG36bYACiCxMwx2FRlqGF0slC2IVasRVpVMVE3BFJb2HKNafETDi1sosXNNRQwWxj_n485teQXTMNuuIdVSRg4ueUHZKqNJ6S0HjsfJwzgdN6HxNQhMMgFePc3',
    imageAlt: 'Tư liệu về Đại hội đại biểu toàn quốc lần thứ II',
    facts: [
      { label: 'Thời gian', value: 'Tháng 2 năm 1951' },
      { label: 'Địa điểm', value: 'Chiêm Hóa, Tuyên Quang' },
      { label: 'Dấu mốc', value: 'Đảng ra hoạt động công khai' },
    ],
    paragraphs: [
      'Tháng 2 năm 1951, Đại hội đại biểu toàn quốc lần thứ II được tổ chức tại Chiêm Hóa, Tuyên Quang. Đây là dấu mốc quan trọng trong quá trình hoàn thiện đường lối kháng chiến.',
      'Đại hội quyết định đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam, củng cố khối đoàn kết toàn dân và tăng cường vai trò lãnh đạo đối với cuộc kháng chiến.',
    ],
    keyPoints: [
      { title: 'Tính chất xã hội', body: 'Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến.' },
      { title: 'Nhiệm vụ cơ bản', body: 'Giành độc lập, xóa bỏ tàn tích phong kiến và phát triển chế độ dân chủ nhân dân.' },
    ],
  },
  {
    slug: 'xay-dung-the-luc',
    number: '02',
    period: '1951–1953',
    title: 'Xây dựng thế và lực',
    summary: 'Hòa Bình, Tây Bắc, Thượng Lào và quá trình mở rộng thế chủ động chiến lược.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByFEaYdvRd7WMqdqTS8RjQUUsEZ0vTgeqfz4jGzFibwBM_SdXF5EeQIurDHj67I0NbclTVVn7Odf_U2SDxC_P538wKgyvCaN3Gd63UagJEfvyDe_gr7AoMsjcCrY6yYp6iSy1PUc4ercL5knp-RCTSK91W_ygFULQYDimV59zL6wVbmh7nZmWQc2xfZMK4EskZGAGs0IRaX0ROKqN5eD52GRm-5FpMcvKOQILDzViDABG3bmy6oMrP',
    imageAlt: 'Bản đồ chiến dịch Hòa Bình và Tây Bắc',
    facts: [
      { label: 'Không gian', value: 'Hòa Bình – Tây Bắc – Thượng Lào' },
      { label: 'Trọng tâm', value: 'Mở rộng vùng giải phóng' },
      { label: 'Kết quả', value: 'Củng cố thế chủ động' },
    ],
    paragraphs: [
      'Các chiến dịch Hòa Bình, Tây Bắc và Thượng Lào tạo nên một chuỗi hoạt động liên tục, vừa tiêu hao lực lượng đối phương vừa mở rộng căn cứ và hành lang chiến lược.',
      'Cùng với đấu tranh quân sự, hậu phương được củng cố để bảo đảm nhân lực, vật lực và khả năng phối hợp trên nhiều hướng.',
    ],
    keyPoints: [
      { title: 'Thế trận', body: 'Mở rộng địa bàn và buộc đối phương phải phân tán lực lượng.' },
      { title: 'Hậu phương', body: 'Tăng cường khả năng huy động, vận chuyển và chi viện cho tiền tuyến.' },
    ],
  },
  {
    slug: 'dien-bien-phu',
    number: '03',
    period: '1953–1954',
    title: 'Nava và Điện Biên Phủ',
    summary: 'Kế hoạch Nava, Đông–Xuân 1953–1954, hậu cần và quyết định tại Điện Biên Phủ.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvlY3Z_yslJdCArgDVG8D17BPl7D2DCSFTUSIM5UUIJ-uTe8ZqMzjVXwmkzP1ghvPBBMoWnvZ3jm6q6jWrQL9fhBgWIul54Zu-s5YtKtjhD144BO2KkJvR6fG8M-DccnQsSL9cBwnQm7fjpzxt9VyvOBLgxt_hhX0707cuEXK6BUWaQtl5CnW05WLH9ludXtOEYot2agoJlXkC6EAU0fWzHVv5wGphHx0dyeizwhVw7NQxzEmr3epY',
    imageAlt: 'Bản đồ lòng chảo Điện Biên Phủ với các dấu chiến thuật',
    facts: [
      { label: 'Giai đoạn', value: 'Đông–Xuân 1953–1954' },
      { label: 'Phương châm', value: 'Đánh chắc, tiến chắc' },
      { label: 'Kết thúc', value: '17 giờ 30, ngày 07/05/1954' },
    ],
    paragraphs: [
      'Trước Kế hoạch Nava, các hoạt động chiến lược trong Đông–Xuân 1953–1954 được triển khai trên nhiều hướng, buộc đối phương phân tán khối cơ động.',
      'Tại Điện Biên Phủ, quyết định chuyển phương châm sang “đánh chắc, tiến chắc” gắn với sự chuẩn bị hậu cần quy mô lớn đã tạo nền tảng cho thắng lợi cuối cùng.',
    ],
    keyPoints: [
      { title: 'Quyết định', body: 'Chọn Điện Biên Phủ làm điểm quyết chiến chiến lược.' },
      { title: 'Bảo đảm', body: 'Tổ chức hậu cần và vận chuyển trên một không gian rộng lớn.' },
    ],
  },
]

