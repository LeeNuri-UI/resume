import { useEffect, useRef } from 'react'
import './style/CoverPage.css'
import './style/ResumePage.css'
import resumeImg from "./image/resumeImg.jpg";

function CoverPage() {
  return (
    <section className="page cover-page" aria-label="Portfolio cover">
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
          <p className="subtitle">
            항상 더 나은 방향을 고민하며 성장하는 자바 개발자 이누리입니다.
          </p>
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
            <p>Lee nu ri (1991)</p>
          </div>
        </section>

        <span className="page-num">01</span>
      </main>
    </section>
  )
}

function ResumePage() {
  return (
    <section className="page cover-page" aria-label="Portfolio cover">
      <aside className="v-bar" aria-label="Portfolio metadata">
        <span className="year">2026</span>
        <span className="label">Portfolio</span>
      </aside>

      <main className="content">
        <div className="brand">Lee nu ri Portfolio</div>

        <div className="resume-inner">
          <header className="section-header">
            <h1>이력 사항</h1>
          </header>

          <div className="two-col">
            <div>
              <p className="desc">
                사용자의 관점에서 문제를 바라보고, 작은 개선을 꾸준히 쌓아가는
                개발자입니다.
                <br />
                화면의 흐름과 데이터의 구조를 함께 고민하며{' '}
                <strong>명확하고 사용하기 쉬운 서비스를 만드는 것</strong>을
                목표로 합니다.
              </p>
              <div className="profile-card">
                <img
                  className="avatar"
                  src={resumeImg}
                  alt="이누리 프로필"
                />
                <div className="profile-info">
                  <span className="name">이누리</span>
                  <span className="role">웹개발자</span>
                  <span className="meta">
                    1991
                    <br />
                    apfhd4125@naver.com
                  </span>
                </div>
              </div>

              <div className="timeline" aria-label="Education timeline">
                <div className="tl-item">
                  <div className="tl-dot" aria-hidden="true" />
                  <div className="tl-date">2010.03-2015.02</div>
                  <div className="tl-text">대학교 졸업</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" aria-hidden="true" />
                  <div className="tl-date">2020.07-2020.11</div>
                  <div className="tl-text">응용 sw 엔지니어링 수료</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" aria-hidden="true" />
                  <div className="tl-date">2025.01-현재</div>
                  <div className="tl-text muted">
                    React 기반 포트폴리오와 웹 프로젝트를 제작하고 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="right-panel">
              <div className="info-box">
                <div className="info-box-header">
                  <span className="badge">경력 사항</span>
                  <div className="divider-h" aria-hidden="true" />
                </div>
                <div className="entry-row">
                  <div className="entry-date-col">2024.07-2025.12</div>
                  <div className="entry-desc">
                    공공 웹 시스템 구축 및 사내 솔루션 및 회의록 시스템 유지보수
                  </div>
                </div>
                <div className="entry-row">
                  <div className="entry-date-col">2022.08-2023.12</div>
                  <div className="entry-desc">
                    민간 웹서비스 시스템 구축 및 유지보수
                  </div>
                </div>
                <div className="entry-row">
                  <div className="entry-date-col">2021.07-2022.07</div>
                  <div className="entry-desc">
                    공공 웹 시스템 구축 및 유지보수
                  </div>
                </div>
              </div>



              <section className="skill-section" aria-labelledby="skill-title">
                <h3 id="skill-title">Skill</h3>
                <div className="skill-chips">
                  <div className="chip">
                    <span className="chip-name">HTML</span>
                    <span className="chip-level">상급</span>
                  </div>
                  <div className="chip">
                    <span className="chip-name">CSS</span>
                    <span className="chip-level">상급</span>
                  </div>
                  <div className="chip">
                    <span className="chip-name">React</span>
                    <span className="chip-level">중급</span>
                  </div>
                  <div className="chip">
                    <span className="chip-name">JavaScript</span>
                    <span className="chip-level">중급</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/*<span className="page-num">02</span>*/}
      </main>
    </section>
  )
}

function App() {
  const deckRef = useRef(null)

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return undefined

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return

      event.preventDefault()

      deck.scrollBy({
        left: event.deltaY > 0
            ? window.innerWidth / 2
            : -window.innerWidth / 2,
        behavior: 'smooth',
      })
    }

    deck.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      deck.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="page-deck" ref={deckRef}>
      <CoverPage />
      <ResumePage />
    </div>
  )
}

export default App
