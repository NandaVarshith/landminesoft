import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import heroVideo from '../../assets/ai-background.mp4';
import brandLogo from '../../assets/landminelogo-CMvDdIuP.png';

function HomePage() {
  const whyLandmineSectionRef = useRef(null);

  useEffect(() => {
    const section = whyLandmineSectionRef.current;
    if (!section) return;

    const bubbles = Array.from(section.querySelectorAll('.bubble'));
    if (!bubbles.length) return;

    const setRandomMotion = (el) => {
      const maxX = 35;
      const maxY = 40;
      const maxR = 6;
      const tx = (Math.random() * 2 - 1) * maxX;
      const ty = (Math.random() * 2 - 1) * maxY;
      const rs = (Math.random() * 2 - 1) * maxR;
      el.style.setProperty('--tx', `${tx.toFixed(1)}px`);
      el.style.setProperty('--ty', `${ty.toFixed(1)}px`);
      el.style.setProperty('--rs', `${rs.toFixed(1)}deg`);
      const duration = 2200 + Math.random() * 2400;
      el.style.transitionDuration = `${duration}ms`;
    };

    const schedule = (el) => {
      setRandomMotion(el);
      const loop = () => {
        setRandomMotion(el);
        const delay = 1800 + Math.random() * 2000;
        el._bubbleTimer = setTimeout(loop, delay);
      };
      el._bubbleTimer = setTimeout(loop, 1800 + Math.random() * 2000);
    };

    bubbles.forEach(schedule);

    return () => {
      bubbles.forEach((el) => {
        if (el._bubbleTimer) {
          clearTimeout(el._bubbleTimer);
        }
      });
    };
  }, []);

  return (
    <>
      <header style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.65) contrast(1.05) saturate(1.05)',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,11,20,0.65), rgba(11,18,32,0.75))', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: 'auto', padding: '0 20px' }}>
          <nav className="main-nav">
            <Link to="/" className="logo">
              <img src={brandLogo} alt="Landmine Soft Logo" />
            </Link>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><a href="#services">Services</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>

          <div className="hero-content-wrapper">
            <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '999px', background: 'rgba(60,207,145,0.12)', border: '1px solid rgba(60,207,145,0.25)', color: 'var(--brand-green)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.4px' }}>
              TRUSTED SOFTWARE PARTNER
            </div>

            <h1 style={{ marginTop: '26px' }}>
              Building <span>Intelligent Products</span><br />for a Digital-First World
            </h1>

            <p>
              We design and build AI-powered software, modern web platforms, and cloud-native solutions tailored to your business.
            </p>

            <div style={{ marginTop: '44px', display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <Link to="/consultation" className="cta">Schedule a Free Consultation</Link>
              <a href="#services" className="cta-secondary">
                View Our Projects
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
              </a>
            </div>

            <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <div><strong style={{ color: 'var(--text-main)' }}>10+</strong><br />Projects Delivered</div>
              <div><strong style={{ color: 'var(--text-main)' }}>3+</strong><br />Core Engineers</div>
              <div><strong style={{ color: 'var(--text-main)' }}>4+</strong><br />Tech Stacks</div>
            </div>
          </div>
        </div>
      </header>

      <section id="services">
        <h2>SERVICES WE <span>OFFER</span></h2>
        <p style={{ textAlign: 'center', maxWidth: '650px', marginInline: 'auto', marginTop: '-25px', marginBottom: '50px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5 }}>
          Crafting digital excellence that drives<br />business transformation forward
        </p>
        <div className="grid">
          <div className="card">
            <h3>Agentic AI, RAG & LLM Solutions</h3>
            <p>
              We build intelligent autonomous agents, retrieval-augmented generation systems, and custom language models that automate workflows and decision-making.
            </p>
          </div>
          <div className="card">
            <h3>Web & Software Product Development</h3>
            <p>
              We design and ship full-stack web products and platforms with clean architecture, scalable APIs, and modern frontends tailored to your business.
            </p>
          </div>
          <div className="card">
            <h3>Cloud Platforms & DevOps</h3>
            <p>
              We architect, migrate, and optimize secure cloud platforms with CI/CD pipelines, observability, and best-practice security baked in.
            </p>
          </div>
          <div className="card">
            <h3>AI-Powered Analytics & Automation</h3>
            <p>
              We turn raw data into usable insights with ML pipelines, dashboards, and workflow automation that unlock faster, smarter decisions.
            </p>
          </div>
          <div className="card">
            <h3>Mobile & Web App Experiences</h3>
            <p>
              We craft high-performance web and mobile interfaces that feel fast, intuitive, and consistent across devices and browsers.
            </p>
          </div>
          <div className="card">
            <h3>Architecture Consulting & Tech Strategy</h3>
            <p>
              We help you choose the right stack, design future-proof architectures, and plan delivery roadmaps for your AI and software initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="why-landmine" ref={whyLandmineSectionRef}>
        <div className="bubble">Experienced, Focused Team</div>
        <div className="bubble">Clear Ownership</div>
        <div className="bubble">Predictable Delivery</div>
        <div className="bubble">Business-First Thinking</div>
      </section>

      <section className="ready-section">
        <div className="content-wrapper ready-section-inner">
          <h2 style={{ marginBottom: '20px' }}>READY TO <span>GET STARTED</span>?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Let's discuss how Landmine Soft can help you build, scale, or optimize your next digital product.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <Link to="/get-demo" className="cta">Get a Demo</Link>
            <Link to="/consultation" className="cta-secondary">Schedule Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
