import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDark from '../header/HeaderDark.jsx';
import './GetDemo.css';

const demoTracks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18" />
        <path d="M6 7V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V7" />
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9.5 12h5" />
      </svg>
    ),
    tag: 'E-Commerce',
    requestLabel: 'E-Commerce',
    title: 'Scale your online store',
    heading: 'E-Commerce Solutions',
    description:
      'Custom storefronts, order management, payments and analytics for high-growth online brands.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M8 20h8" />
        <path d="M12 18v2" />
      </svg>
    ),
    tag: 'Apps',
    requestLabel: 'Web & Mobile App',
    title: 'Build modern apps',
    heading: 'Web & Mobile Apps',
    description:
      'Full-stack product development for SaaS, internal tools and customer-facing applications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18a4 4 0 1 1 .8-7.92A5.2 5.2 0 0 1 18 11a3.5 3.5 0 0 1 0 7H7Z" />
        <path d="M10 14h4" />
      </svg>
    ),
    tag: 'Cloud',
    requestLabel: 'Cloud',
    title: 'Cloud-native platforms',
    heading: 'Cloud & DevOps',
    description:
      'Design, deploy and manage scalable cloud infrastructure on AWS, Azure and GCP.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
    ),
    tag: 'AI',
    requestLabel: 'AI',
    title: 'AI-powered products',
    heading: 'AI & Automation',
    description:
      'Integrate AI assistants, recommendation engines and workflow automation into your products.',
  },
];

function GetDemo() {
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    document.title = 'Product Demo Center | Landmine Soft';

    document.body.classList.add('get-demo-body');

    return () => {
      document.body.classList.remove('get-demo-body');
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveTrack(null);
      }
    };

    document.addEventListener('keydown', handleEscape);

    if (activeTrack) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [activeTrack]);

  return (
    <>
      <HeaderDark variant="light" />
      <main id="get-demo-page" className="get-demo-page">
        <section className="get-demo-shell">
          <header className="get-demo-hero">
            <div className="hero-copy">
              <span className="get-demo-kicker">Interactive Walkthrough</span>
              <h1>Product Demo Center</h1>
              <p>
                Explore our E-Commerce, Apps, Cloud and AI solutions with a personalized demo
                from our product experts.
              </p>
              <div className="hero-actions">
                <a href="#demo-tracks" className="hero-primary">Book a Live Demo</a>
                <Link to="/consultation" className="hero-secondary">Talk to an Expert</Link>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Demo highlights">
              <h2>What You Will See</h2>
              <ul>
                <li>Real use-case walkthroughs mapped to your industry</li>
                <li>Architecture and delivery approach in practical terms</li>
                <li>Clear next steps with timeline and implementation options</li>
              </ul>
            </aside>
          </header>

          <section id="demo-tracks" className="demo-grid" aria-label="Demo tracks">
            {demoTracks.map((item, index) => (
              <article key={item.tag} className={`demo-card demo-card-${index + 1}`}>
                <div className="demo-top">
                  <div className="demo-icon" aria-hidden="true">{item.icon}</div>
                  <p className="demo-tag">{item.tag}</p>
                </div>

                <h2>{item.title}</h2>
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                <button
                  type="button"
                  className="demo-cta"
                  onClick={() => setActiveTrack(item)}
                >
                  REQUEST A DEMO
                </button>
              </article>
            ))}
          </section>

          <section className="demo-footnote">
            <p>
              Need a tailored walkthrough? Share your use case and we will curate the demo
              around your business goals, tech stack, and rollout timelines.
            </p>
          </section>
        </section>

        {activeTrack && (
          <div
            className="demo-modal-backdrop"
            role="presentation"
            onClick={() => setActiveTrack(null)}
          >
            <div
              className="demo-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-request-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="demo-modal-close"
                aria-label="Close demo request form"
                onClick={() => setActiveTrack(null)}
              >
                x
              </button>

              <h2 id="demo-request-title">Request a {activeTrack.requestLabel} demo</h2>
              <p>
                Share your details and our team will schedule a {activeTrack.requestLabel} product walkthrough.
              </p>

              <form className="demo-request-form" onSubmit={(event) => event.preventDefault()}>
                <div className="field">
                  <label htmlFor="demoFullName">Full name *</label>
                  <input id="demoFullName" name="demoFullName" type="text" placeholder="Your name" required />
                </div>

                <div className="field">
                  <label htmlFor="demoEmail">Email *</label>
                  <input id="demoEmail" name="demoEmail" type="email" placeholder="you@example.com" required />
                </div>

                <div className="field">
                  <label htmlFor="demoPhone">Phone number *</label>
                  <input id="demoPhone" name="demoPhone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                </div>

                <button type="submit">Submit request</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default GetDemo;
