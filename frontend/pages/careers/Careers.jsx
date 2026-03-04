import React, { useEffect, useRef, useState } from 'react';
import './Careers.css';
import HeaderDark from '../header/HeaderDark.jsx';

const roles = [
  {
    id: 5,
    title: 'Frontend Engineer',
    description: 'Build scalable, high-performance web applications with robust UI architecture and clean implementation.',
    meta: 'Remote | Full Time',
    internshipNote: null,
  },
  {
    id: 7,
    title: 'UI/UX Intern',
    description: 'Design intuitive and elegant user journeys aligned with product strategy and measurable user outcomes.',
    meta: 'Hybrid | Internship',
    internshipNote: 'Internship Opportunity: No salary. Focus on gaining real project experience!',
  },
  {
    id: 9,
    title: 'Backend Engineer',
    description: 'Develop secure APIs and resilient distributed systems that power our core product and integrations.',
    meta: 'Remote | Full Time',
    internshipNote: null,
  },
  {
    id: 11,
    title: 'Product Manager',
    description: 'Own roadmap priorities, coordinate cross-functional teams, and turn ideas into impactful releases.',
    meta: 'Onsite | Full Time',
    internshipNote: null,
  },
];

function Career() {
  const trackRef = useRef(null);
  const scrollAmount = 320;
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    document.title = 'Careers | Landmine Soft';

    document.body.classList.add('careers-body');

    return () => {
      document.body.classList.remove('careers-body');
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedRole(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    if (selectedRole) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedRole]);

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
            {roles.map((role) => (
              <article key={role.id} className="role-card">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <div className="meta">{role.meta}</div>
                <button type="button" className="apply-btn" onClick={() => setSelectedRole(role)}>
                  Apply Now
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="footer-cta">
          Do not see your role yet? Send your resume to{' '}
          <a href="mailto:careers@landminesoft.com">careers@landminesoft.com</a>.
        </section>
      </main>

      {selectedRole && (
        <div className="apply-modal-backdrop" role="presentation" onClick={() => setSelectedRole(null)}>
          <div
            className="apply-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="apply-modal-head">
              <h2 id="apply-modal-title">Apply for {selectedRole.title}</h2>
              <button type="button" className="apply-modal-close" aria-label="Close apply modal" onClick={() => setSelectedRole(null)}>
                x
              </button>
            </div>

            <p className="job-id">Job ID: #{selectedRole.id}</p>

            <form className="apply-form" onSubmit={(event) => event.preventDefault()}>
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" type="text" placeholder="Your full name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
              </div>

              <div className="field">
                <label htmlFor="location">Location *</label>
                <input id="location" name="location" type="text" placeholder="State / Region" required />
              </div>

              <div className="field">
                <label htmlFor="collegeName">College Name *</label>
                <input id="collegeName" name="collegeName" type="text" placeholder="Your college name" required />
              </div>

              <div className="field">
                <label htmlFor="city">City *</label>
                <input id="city" name="city" type="text" placeholder="Your city" required />
              </div>

              <div className="field">
                <label htmlFor="cgpa">CGPA *</label>
                <input id="cgpa" name="cgpa" type="text" placeholder="e.g. 8.5" required />
              </div>

              <div className="field">
                <label htmlFor="currentCompany">Current Company</label>
                <input id="currentCompany" name="currentCompany" type="text" />
              </div>

              {selectedRole.internshipNote && (
                <p className="internship-note">Note: {selectedRole.internshipNote}</p>
              )}

              <div className="field field-full">
                <label htmlFor="resume">Upload Resume * (PDF/DOC)</label>
                <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required />
              </div>

              <button type="submit" className="field-full">Apply for {selectedRole.title}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Career;
