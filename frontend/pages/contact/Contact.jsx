import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDark from '../header/HeaderDark.jsx';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [brief, setBrief] = useState('');
  const [briefError, setBriefError] = useState('');

  useEffect(() => {
    document.title = 'Contact Us | Landmine Soft';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (brief.trim().length < 30) {
      setBriefError('Please add at least 30 characters so we can understand your request.');
      return;
    }

    setBriefError('');
    setSubmitted(true);
    form.reset();
    setBrief('');
  };

  return (
    <>
      <HeaderDark variant="light" />
      <main id="contact-page" className="contact-page">
        <section className="contact-shell">
          <section className="contact-grid">
            <aside className="contact-panel">
              <span className="contact-kicker">Contact</span>
              <h1>Tell us what you need.</h1>
              <p>
                Share your project goals and constraints. We will reply with a practical next step within one business day.
              </p>

              <div className="contact-meta">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@landminesoft.com">hello@landminesoft.com</a>
                </p>
                <p>
                  <strong>For jobs:</strong>{' '}
                  <a href="mailto:careers@landminesoft.com">careers@landminesoft.com</a>
                </p>
              </div>

              <ul className="contact-steps" aria-label="What happens after submitting">
                <li>1. We review your request.</li>
                <li>2. We send a response with next steps.</li>
                <li>3. We schedule a discovery call if needed.</li>
              </ul>

              <Link to="/consultation" className="contact-alt-cta">
                Prefer a call? Book consultation
              </Link>
            </aside>

            <article className="contact-card" aria-label="Contact form">
              <h2>Send Message</h2>
              <p className="contact-form-note">Required fields are marked with *.</p>
              <form className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" required />
                </div>

                <div className="field field-full">
                  <label htmlFor="email">Work Email *</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="field">
                  <label htmlFor="projectType">Project Type *</label>
                  <select id="projectType" name="projectType" defaultValue="" required>
                    <option value="" disabled>Select one</option>
                    <option>Web Application</option>
                    <option>Mobile Application</option>
                    <option>AI / Automation</option>
                    <option>Cloud / DevOps</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="company">Company (Optional)</label>
                  <input id="company" name="company" type="text" placeholder="Company name" />
                </div>

                <div className="field field-full">
                  <label htmlFor="message">Project Brief *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="What do you want to build, for whom, and by when?"
                    maxLength="600"
                    value={brief}
                    onChange={(event) => {
                      setBrief(event.target.value);
                      if (briefError && event.target.value.trim().length >= 30) {
                        setBriefError('');
                      }
                    }}
                    required
                  />
                  <p className="field-help">
                    Include goal, users, and timeline. ({brief.length}/600)
                  </p>
                  {briefError && <p className="field-error">{briefError}</p>}
                </div>

                <button type="submit" className="field-full">Send Request</button>
              </form>
              {submitted && (
                <p className="contact-success" role="status" aria-live="polite">
                  Request submitted. Our team will contact you within one business day.
                </p>
              )}
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Contact;
