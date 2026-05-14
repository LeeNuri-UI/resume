import './App.css'

function App() {
  return (
    <div className="page">
      <aside className="v-bar" aria-label="Portfolio metadata">
        <span className="year">2026</span>
        <span className="label">Portfolio</span>
      </aside>

      <main className="content">
        <div className="top-band" aria-hidden="true" />
        <div className="bottom-section" aria-hidden="true" />

        <section className="hero" aria-labelledby="portfolio-title">
          <h1 id="portfolio-title">
            Portfolio<span className="dot">.</span>
          </h1>
          <p className="subtitle">항상 더 나은 방향을 고민하며 성장하는 자바 개발자 이누리입니다.</p>
        </section>

        <section className="info-block" aria-label="Profile information">
          <div className="info-col">
            <h2>Contact</h2>
            <div className="divider" aria-hidden="true" />
            <p>
              010.2455.5551
              <br />
              apfhd4125@naver.com
            </p>
          </div>
          <div className="info-col">
            <h2>Developer</h2>
            <div className="divider" aria-hidden="true" />
            <p>
              Lee nu ri (1991.06.25)
            </p>
          </div>
        </section>

        <span className="page-num">01</span>
      </main>
    </div>
  )
}

export default App
