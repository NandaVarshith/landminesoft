import React, { useEffect, useRef } from 'react';
import './Careers.css';
import HeaderDark from '../header/HeaderDark.jsx';

function Career() {
  const trackRef = useRef(null);
  const scrollAmount = 320;

  useEffect(() => {
    document.title = 'Careers | Landmine Soft';

    const ensureLink = (id, rel, href, crossOrigin) => {
      if (document.getElementById(id)) return;
      const link = document.createElement('link');
      link.id = id;
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    };

    ensureLink('landminesoft-careers-preconnect-fonts', 'preconnect', 'https://fonts.googleapis.com');
    ensureLink('landminesoft-careers-preconnect-gstatic', 'preconnect', 'https://fonts.gstatic.com', 'anonymous');
    ensureLink(
      'landminesoft-careers-google-fonts',
      'stylesheet',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    );
  }, []);

  const handleScrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeaderDark variant="light" />
      <main className="container">
        <section className="hero">
          <h1>Build the Future With Us</h1>
          <p>
            Join a focused team of builders, designers, and engineers creating useful digital products with modern
            technology and strong execution standards.
          </p>
        </section>

        <section className="section" id="why-us">
          <h2>Why work with us?</h2>
          <div className="values-grid">
            <article className="value-card">
              <span className="value-id">VALUE 01</span>
              <p>Real project ownership from day one, with direct impact on production features and client outcomes.</p>
            </article>
            <article className="value-card">
              <span className="value-id">VALUE 02</span>
              <p>Modern stack across React, Java/Spring, Python, cloud platforms, and practical AI tooling.</p>
            </article>
            <article className="value-card">
              <span className="value-id">VALUE 03</span>
              <p>Mentorship from experienced engineers who review thoughtfully and help you grow with intent.</p>
            </article>
            <article className="value-card">
              <span className="value-id">VALUE 04</span>
              <p>Clear growth paths, measurable goals, and regular feedback that supports fast, sustainable progress.</p>
            </article>
          </div>
        </section>

        <section className="section" id="open-roles">
          <div className="roles-header">
            <h2>Open Roles</h2>
            <div className="controls">
              <button type="button" className="icon-btn" aria-label="Scroll left" onClick={handleScrollLeft}>
                {'<'}
              </button>
              <button type="button" className="icon-btn" aria-label="Scroll right" onClick={handleScrollRight}>
                {'>'}
              </button>
            </div>
          </div>

          <div className="roles-track" id="rolesTrack" ref={trackRef}>
            <article className="role-card">
              <h3>Frontend Engineer</h3>
              <p>Build scalable, high-performance web applications with robust UI architecture and clean implementation.</p>
              <div className="meta">Remote | Full Time</div>
              <button type="button" className="apply-btn">Apply Now</button>
            </article>

            <article className="role-card">
              <h3>UI/UX Designer</h3>
              <p>Design intuitive and elegant user journeys aligned with product strategy and measurable user outcomes.</p>
              <div className="meta">Hybrid | Full Time</div>
              <button type="button" className="apply-btn">Apply Now</button>
            </article>

            <article className="role-card">
              <h3>Backend Engineer</h3>
              <p>Develop secure APIs and resilient distributed systems that power our core product and integrations.</p>
              <div className="meta">Remote | Full Time</div>
              <button type="button" className="apply-btn">Apply Now</button>
            </article>

            <article className="role-card">
              <h3>Product Manager</h3>
              <p>Own roadmap priorities, coordinate cross-functional teams, and turn ideas into impactful releases.</p>
              <div className="meta">Onsite | Full Time</div>
              <button type="button" className="apply-btn">Apply Now</button>
            </article>
          </div>
        </section>

        <section className="footer-cta">
          Do not see your role yet? Send your resume to{' '}
          <a href="mailto:careers@landminesoft.com">careers@landminesoft.com</a>.
        </section>
      </main>
    </>
  );
}

export default Career;
