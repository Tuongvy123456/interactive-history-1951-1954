import { Link } from 'react-router-dom'
import { Icon } from '../components/common/Icon'
import './pages.css'

const heroMap =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVOYchAD7TtaFkUs1RD9eLxpHU9M1Raok-ZQiJKsod823GO_liXPEMJYXvbMuvKkXpesXNLlcy--y9hmZA0YFofm-PIoLl2Ni6MM2a8nTZJsCUSMW9_plx1eyXIOivFDXcS7BlNM9i4hN6fu0ZVnmQH0g_4Vg98FpjQpof96-NcrecTgRvz_KwKXbrIW2Lg1bBWEREzTQvny4WtFs6NR4OWM9pQ96qDILzCxEspN7LPMUWjaGd5Ohv'

const archivePhoto =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAfPrm6KKB-Vs9yBcdv4-RSqABH_WfpExtX5GrkRDRWzQWgtkY7gFTGnXAGNQVTqARQenGpXVnarVgLCTR2kAYfb0GJdqTcNaDP-XVk8lKTee2LVUyxRPbAgZ4lBp36zx6ix3fMFfU-Zri9ZtkZSKQCIui_AZyDTKiKJPMPcSbAcAeK6Dtb5U4ldIb50EjV27m6bjZlqo-JFJvgNhSLkIVIEh67cUs5gxMuYjm8j0FONckpb7OoVroq'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <div className="page-kicker"><Icon name="folder_special" /> Hồ sơ lưu trữ / Tuyệt mật</div>
          <h1>1951–1954:<br /><span>Những quyết định lịch sử</span></h1>
          <p>
            Khám phá những sự kiện, đường lối và quyết định dẫn tới Chiến thắng Điện Biên Phủ
            qua tài liệu chiến lược, bản đồ và ba thử thách tương tác.
          </p>
          <div className="home-hero__actions">
            <Link className="button" to="/theory"><Icon name="menu_book" /> Khám phá lý thuyết</Link>
            <Link className="button button--secondary" to="/game"><Icon name="sports_esports" /> Bắt đầu trò chơi</Link>
          </div>
        </div>
        <div className="home-hero__visual" aria-label="Bản đồ chiến lược Điện Biên Phủ">
          <div className="home-map-frame">
            <div className="home-map" style={{ backgroundImage: `url(${heroMap})` }}>
              <span className="home-map__marker"><i /> Điểm cao 1</span>
              <span className="home-map__scale">Tỉ lệ 1:50.000<br />Phát hành: 1953</span>
            </div>
          </div>
          <figure className="home-polaroid">
            <img alt="Tư liệu chiến sĩ nghiên cứu bản đồ" src={archivePhoto} />
            <figcaption>Tư liệu 4B</figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}

