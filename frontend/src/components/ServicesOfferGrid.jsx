import React from 'react';
import './ServicesOfferGrid.css';

export const servicesOfferItems = [
  {
    title: 'Agentic AI, RAG & LLM Solutions',
    description:
      'We build intelligent autonomous agents, retrieval-augmented generation systems, and custom language models that automate workflows and decision-making.',
  },
  {
    title: 'Web & Software Product Development',
    description:
      'We design and ship full-stack web products and platforms with clean architecture, scalable APIs, and modern frontends tailored to your business.',
  },
  {
    title: 'Cloud Platforms & DevOps',
    description:
      'We architect, migrate, and optimize secure cloud platforms with CI/CD pipelines, observability, and best-practice security baked in.',
  },
  {
    title: 'AI-Powered Analytics & Automation',
    description:
      'We turn raw data into usable insights with ML pipelines, dashboards, and workflow automation that unlock faster, smarter decisions.',
  },
  {
    title: 'Mobile & Web App Experiences',
    description:
      'We craft high-performance web and mobile interfaces that feel fast, intuitive, and consistent across devices and browsers.',
  },
  {
    title: 'Architecture Consulting & Tech Strategy',
    description:
      'We help you choose the right stack, design future-proof architectures, and plan delivery roadmaps for your AI and software initiatives.',
  },
];

function ServiceIcon({ index }) {
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3h8l5 5v8l-5 5H8l-5-5V8l5-5Z" />
      <path d="M9.5 9.5h5v5h-5z" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
      <path d="M10 5.8h4" />
      <circle cx="12" cy="18.2" r="0.8" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7.5a3.5 3.5 0 0 1 3.5-3.5H16.5A3.5 3.5 0 0 1 20 7.5V16.5A3.5 3.5 0 0 1 16.5 20H7.5A3.5 3.5 0 0 1 4 16.5z" />
      <path d="M8 9.5h8M8 14.5h5" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="M8 10h8M8 14h5" />
      <path d="M2.8 8.5V15.5M21.2 8.5V15.5" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.8 4.8 6.8v10.4L12 21.2l7.2-4V6.8z" />
      <path d="M8.2 9.5h7.6M8.2 13h7.6" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </svg>,
  ];

  return icons[index % icons.length];
}

function ServicesOfferGrid() {
  return (
    <div className="services-offer-grid">
      {servicesOfferItems.map((service, index) => (
        <article key={service.title} className="services-offer-card">
          <span className="services-offer-icon">
            <ServiceIcon index={index} />
          </span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ServicesOfferGrid;
