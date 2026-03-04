import React, { useEffect, useState } from 'react';
import HeaderDark from '../header/HeaderDark.jsx';
import './Support.css';

function Support() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Support | Landmine Soft';

    document.body.classList.add('support-body');

    return () => {
      document.body.classList.remove('support-body');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
  };

  return (
    <>
      <HeaderDark variant="light" />
      <main id="support-page" className="support-page">
        <section className="support-shell">
          <header className="support-hero">
            <span className="support-kicker">Support</span>
            <h1>Careers Portal Support</h1>
            <p>
              Facing an issue with careers portal or applications? Raise a support request and the team
              will respond as soon as possible.
            </p>
          </header>

          <section className="support-grid">
            <aside className="support-card support-info">
              <h2>Before You Submit</h2>

              <div className="info-block">
                <h3>Application status</h3>
                <p>
                  You can track your application in the My Applications section of your profile.
                  Status moves from Pending to In Progress to Rejected.
                </p>
              </div>

              <div className="info-block">
                <h3>Login or signup issues</h3>
                <p>
                  Try clearing browser cache and logging in again. If it still fails, raise a support
                  ticket with an error screenshot.
                </p>
              </div>

              <div className="info-block">
                <h3>Technical problems</h3>
                <p>
                  Mention browser, device, and exact steps to reproduce the issue. This helps resolve
                  the problem faster.
                </p>
              </div>
            </aside>

            <article className="support-card">
              <h2>Create support ticket</h2>
              <p className="support-form-note">
                Fill the form below and our support team will get back to you. Required fields are marked with *.
              </p>

              <form className="support-form" noValidate onSubmit={handleSubmit}>
                <div className="field field-full">
                  <label htmlFor="supportEmail">Email address *</label>
                  <input
                    id="supportEmail"
                    name="supportEmail"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="field field-full">
                  <label htmlFor="issueType">Issue type *</label>
                  <select id="issueType" name="issueType" defaultValue="Technical issue">
                    <option>Technical issue</option>
                    <option>Application status</option>
                    <option>Login or signup</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field field-full">
                  <label htmlFor="issueSubject">Subject *</label>
                  <input
                    id="issueSubject"
                    name="issueSubject"
                    type="text"
                    placeholder="Short summary of the issue"
                    required
                  />
                </div>

                <div className="field field-full">
                  <label htmlFor="issueDescription">Describe your issue *</label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    rows="6"
                    placeholder="Explain what went wrong and steps to reproduce..."
                    required
                  />
                </div>

                <button type="submit" className="field-full">Submit support request</button>
              </form>
              {submitted && (
                <p className="support-success" role="status" aria-live="polite">
                  Support request submitted. We will reply within one business day.
                </p>
              )}

              <p className="support-footer-note">
                For urgent issues, email{' '}
                <a href="mailto:support@landminesoft.com">support@landminesoft.com</a>.
              </p>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Support;
