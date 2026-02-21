import React, { useEffect, useRef } from 'react';
import './About.css';
import HeaderDark from '../header/HeaderDark.jsx';

function About() {
  const scrollerRef = useRef(null);
  const scrollAmount = 270;

  useEffect(() => {
    const linkId = 'landminesoft-about-google-fonts';
    if (document.getElementById(linkId)) return;

    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Inter:wght@400;500&display=swap';
    document.head.appendChild(link);
  }, []);

  const scrollLeft = () => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft += scrollAmount;
  };

  return (
    <>
      <HeaderDark />
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="resources/about_page.mp4" type="video/mp4" />
        </video>
        <h1>
          ABOUT <span>LANDMINE SOFT</span>
        </h1>
        <p>
          We build AI-driven products and reliable software platforms. A focused
          engineering team helping startups and enterprises ship modern AI, web,
          and cloud-native systems.
        </p>
      </section>

      <section>
        <div className="split">
          <div className="content">
            <div className="label">Who we are</div>
            <h2>
              Engineers who think in <span>outcomes</span>
            </h2>
            <p>
              From prototypes to production systems, we work closely with your
              team-owning architecture, development, testing, and deployment.
              We care about what ships and what it delivers to the business.
            </p>
          </div>
          <div>
            <div className="stat">
              <strong>10+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="stat">
              <strong>3+</strong>
              <span>Core engineers</span>
            </div>
            <div className="stat">
              <strong>AI � Web � Cloud</strong>
              <span>Primary tech focus</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="label">The people behind the product</div>
          <h2>
            Meet the <span>Team</span>
          </h2>
        </div>

        <div className="team-scroller-wrapper">
          <button
            type="button"
            className="scroll-btn"
            style={{ left: '-22px' }}
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            id="team-scroller"
            ref={scrollerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '50px',
              padding: '10px 5px 40px 5px',
            }}
          >
            <div className="team-card" style={{ textAlign: 'center', flexShrink: 0, width: '220px' }}>
              <img
                src="https://i.pravatar.cc/200?img=12"
                alt="Daniel Carter"
                style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '18px' }}
              />
              <h3>Daniel Carter</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>CEO & Co-Founder</p>
            </div>
            <div className="team-card" style={{ textAlign: 'center', flexShrink: 0, width: '220px' }}>
              <img
                src="https://i.pravatar.cc/200?img=32"
                alt="Sofia Reyes"
                style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '18px' }}
              />
              <h3>Sofia Reyes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>VP of Engineering</p>
            </div>
            <div className="team-card" style={{ textAlign: 'center', flexShrink: 0, width: '220px' }}>
              <img
                src="https://i.pravatar.cc/200?img=47"
                alt="Marcus Lindgren"
                style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '18px' }}
              />
              <h3>Marcus Lindgren</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Head of Product</p>
            </div>
            <div className="team-card" style={{ textAlign: 'center', flexShrink: 0, width: '220px' }}>
              <img
                src="https://i.pravatar.cc/200?img=68"
                alt="James Park"
                style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '18px' }}
              />
              <h3>James Park</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Lead Architect</p>
            </div>
            <div className="team-card" style={{ textAlign: 'center', flexShrink: 0, width: '220px' }}>
              <img
                src="https://i.pravatar.cc/200?img=50"
                alt="Chloe Kim"
                style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '18px' }}
              />
              <h3>Chloe Kim</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Senior Developer</p>
            </div>
          </div>

          <button
            type="button"
            className="scroll-btn"
            style={{ right: '-22px' }}
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>

      <footer>
        <span>Landmine Soft</span> � Hyderabad, India � � 2026
      </footer>
    </>
  );
}

export default About;
