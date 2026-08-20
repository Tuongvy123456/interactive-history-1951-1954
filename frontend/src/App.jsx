const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api'

function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card" aria-labelledby="welcome-title">
        <span className="eyebrow">VNR workspace</span>
        <h1 id="welcome-title">Frontend đã sẵn sàng</h1>
        <p>
          React và Vite đã được cấu hình độc lập với backend. Bạn có thể bắt đầu
          xây dựng giao diện trong thư mục <code>frontend/src</code>.
        </p>

        <dl className="project-info">
          <div>
            <dt>Frontend</dt>
            <dd>React + Vite</dd>
          </div>
          <div>
            <dt>API endpoint</dt>
            <dd>
              <code>{apiBaseUrl}</code>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default App

