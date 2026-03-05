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

function ServicesOfferGrid() {
  return (
    <div className="services-offer-grid">
      {servicesOfferItems.map((service) => (
        <article key={service.title} className="services-offer-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ServicesOfferGrid;
