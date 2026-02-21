import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderDark from '../header/HeaderDark.jsx';
import './GetDemo.css';

const demoTracks = [
  {
    icon: '🛍️',
    tag: 'E-Commerce',
    title: 'Scale your online store',
    heading: 'E-Commerce Solutions',
    description:
      'Custom storefronts, order management, payments and analytics for high-growth online brands.',
  },
  {
    icon: '📱',
    tag: 'Apps',
    title: 'Build modern apps',
    heading: 'Web & Mobile Apps',
    description:
      'Full-stack product development for SaaS, internal tools and customer-facing applications.',
  },
  {
    icon: '☁️',
    tag: 'Cloud',
    title: 'Cloud-native platforms',
    heading: 'Cloud & DevOps',
    description:
      'Design, deploy and manage scalable cloud infrastructure on AWS, Azure and GCP.',
  },
  {
    icon: '🤖',
    tag: 'AI',
    title: 'AI-powered products',
    heading: 'AI & Automation',
    description:
      'Integrate AI assistants, recommendation engines and workflow automation into your products.',
  },
];

function GetDemo() {
  useEffect(() => {
    document.title = 'Product Demo Center | Landmine Soft';
  }, []);

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
                <Link to="/consultation" className="hero-primary">Book a Live Demo</Link>
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

          <section className="demo-grid" aria-label="Demo tracks">
            {demoTracks.map((item, index) => (
              <article key={item.tag} className={`demo-card demo-card-${index + 1}`}>
                <div className="demo-top">
                  <div className="demo-icon" aria-hidden="true">{item.icon}</div>
                  <p className="demo-tag">{item.tag}</p>
                </div>

                <h2>{item.title}</h2>
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                <Link to="/consultation" className="demo-cta">REQUEST A DEMO</Link>
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
      </main>
    </>
  );
}

export default GetDemo;
