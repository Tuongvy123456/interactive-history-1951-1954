type HistoricalVisualizationProps = {
  unlockedSteps: number
}

const routeLayers = [
  { path: 'M80 120 C170 70 220 120 285 90', marker: [285, 90], label: 'Đại hội II' },
  { path: 'M285 90 C350 110 390 155 430 185', marker: [430, 185], label: 'Chính cương' },
  { path: 'M430 185 C340 205 250 220 155 250', marker: [155, 250], label: 'Tây Bắc' },
  { path: 'M155 250 C220 285 300 278 355 315', marker: [355, 315], label: 'Nava' },
  { path: 'M355 315 C270 350 190 365 115 405', marker: [115, 405], label: 'Đông–Xuân' },
  { path: 'M115 405 C205 420 290 410 365 385', marker: [365, 385], label: 'Điện Biên Phủ' },
  { path: 'M70 500 C175 455 265 450 365 385 M470 500 C435 445 405 410 365 385', marker: [265, 455], label: 'Hậu cần' },
  { path: 'M365 385 m-65 0 a65 65 0 1 0 130 0 a65 65 0 1 0 -130 0', marker: [365, 385], label: 'Quyết chiến' },
]

export function HistoricalVisualization({ unlockedSteps }: HistoricalVisualizationProps) {
  return (
    <div className="historical-visual" aria-label={`Bản đồ đã mở ${unlockedSteps} trên 8 lớp diễn biến`}>
      <div className="historical-visual__meta"><span>Tọa độ: 21°23′B 103°00′Đ</span><span>Tỉ lệ 1:50.000</span></div>
      <svg role="img" viewBox="0 0 540 560">
        <title>Bản đồ diễn biến lịch sử với các lớp đã mở khóa</title>
        <defs>
          <pattern height="28" id="grid" patternUnits="userSpaceOnUse" width="28">
            <path d="M28 0H0V28" fill="none" stroke="#8f7754" strokeOpacity=".16" />
          </pattern>
        </defs>
        <rect fill="#f3d98a" height="560" width="540" />
        <rect fill="url(#grid)" height="560" width="540" />
        <g className="map-contours" fill="none" stroke="#8f7754" strokeOpacity=".34">
          <path d="M20 90Q120 35 230 85T520 75" />
          <path d="M0 180Q135 130 250 170T540 160" />
          <path d="M15 280Q120 225 255 275T525 255" />
          <path d="M0 470Q140 390 270 450T540 420" />
        </g>
        {routeLayers.map((layer, index) => (
          <g
            className={`history-layer history-layer--${historicalSequence[index].animationType} ${index < unlockedSteps ? 'is-visible' : ''}`}
            data-animation={historicalSequence[index].animationType}
            key={layer.label}
          >
            <path d={layer.path} />
            <circle cx={layer.marker[0]} cy={layer.marker[1]} r={index === 5 || index === 7 ? 10 : 7} />
            <text x={layer.marker[0] + 12} y={layer.marker[1] - 12}>{layer.label}</text>
          </g>
        ))}
      </svg>
      <div className="historical-visual__legend">
        <span><i className="legend-route" /> Tuyến diễn biến</span>
        <span><i className="legend-point" /> Điểm chiến lược</span>
      </div>
    </div>
  )
}
import { historicalSequence } from '../../data/historicalSequence'

