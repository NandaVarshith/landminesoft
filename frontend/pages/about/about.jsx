import React, { useEffect, useRef } from 'react';
import './about.css';
import HeaderDark from '../header/HeaderDark.jsx';
import heroVideo from '../../assets/about_page.mp4';

function About() {
  const scrollerRef = useRef(null);
  const scrollAmount = 270;

  const scrollLeft = () => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft += scrollAmount;
  };

  useEffect(() => {
    document.title = 'About | Landmine Soft';
    document.body.classList.add('about-body');

    return () => {
      document.body.classList.remove('about-body');
    };
  }, []);

  return (
    <>
      <HeaderDark />
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
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
              <strong>AI - Web - Cloud</strong>
              <span>Primary tech focus</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-head">
          <div className="label">Direction</div>
          <h2>
            Vision & <span>Mission</span>
          </h2>
          <p className="section-subline">
            We align product strategy and engineering execution to create long-term business value. Our focus is on
            building technology that is practical, scalable, and aligned with real-world outcomes.
          </p>
        </div>

        <div className="vm-grid">
          <article className="info-card info-card--vision">
            <div className="card-kicker">North Star</div>
            <h3>Vision</h3>
            <p>
              To become a trusted engineering partner for organizations building modern digital products powered by
              intelligent software.
            </p>
          </article>
          <article className="info-card info-card--mission">
            <div className="card-kicker">Execution Model</div>
            <h3>Mission</h3>
            <p>
              To help startups and enterprises deliver reliable AI, web, and cloud solutions faster through strong
              architecture, transparent collaboration, and measurable impact.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="section-head">
          <div className="label">What we solve</div>
          <h2>
            Problems We <span>Solve</span>
          </h2>
          <p className="section-subline">
            We focus on recurring bottlenecks that slow growth, product quality, and decision speed.
          </p>
        </div>

        <div className="problem-grid">
          <article className="info-card problem-card">
            <div className="problem-index">01</div>
            <h3>Slow Product Delivery</h3>
            <p>
              We streamline engineering workflows and architecture decisions so teams can move from idea to production
              without costly delays.
            </p>
          </article>
          <article className="info-card problem-card">
            <div className="problem-index">02</div>
            <h3>Unscalable Systems</h3>
            <p>
              We redesign brittle systems into scalable, maintainable platforms ready for growth in users, data, and
              business complexity.
            </p>
          </article>
          <article className="info-card problem-card">
            <div className="problem-index">03</div>
            <h3>Disconnected Data & AI</h3>
            <p>
              We integrate modern AI and analytics into existing workflows so teams can turn raw data into clear,
              action-ready decisions.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="section-head">
          <div className="label">Our principles</div>
          <h2>
            Core <span>Values</span>
          </h2>
          <p className="section-subline">
            The standards we hold internally are the same standards we deliver to clients.
          </p>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <h3>Ownership & Accountability</h3>
            <p>We take responsibility from planning to production outcomes.</p>
          </article>
          <article className="value-card">
            <h3>Clarity in Communication</h3>
            <p>We prioritize transparent updates and direct technical decisions.</p>
          </article>
          <article className="value-card">
            <h3>Engineering Excellence</h3>
            <p>We deliver clean, scalable systems with maintainable architecture.</p>
          </article>
          <article className="value-card">
            <h3>Security by Design</h3>
            <p>We build privacy and security controls from the first iteration.</p>
          </article>
          <article className="value-card">
            <h3>Customer-First Thinking</h3>
            <p>We map every feature to measurable business and user impact.</p>
          </article>
          <article className="value-card">
            <h3>Continuous Improvement</h3>
            <p>We iterate quickly using feedback, metrics, and retrospectives.</p>
          </article>
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
    </>
  );
}

export default About;

