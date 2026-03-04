import React, { useEffect, useState } from 'react';
import HeaderDark from '../header/HeaderDark.jsx';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Landmine Soft';

    document.body.classList.add('contact-body');

    return () => {
      document.body.classList.remove('contact-body');
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
      <main id="contact-page" className="contact-page">
        <section className="contact-shell">
          <header className="contact-hero">
            <div>
              <span className="contact-kicker">Contact</span>
              <h1>Contact us</h1>
              <p className="contact-note">
                Have any questions or feedback? Drop a message and we will get back to you.
              </p>
            </div>
            <p className="contact-direct">
              Or reach us directly at <a href="mailto:support@landminesoft.com">support@landminesoft.com</a>
            </p>
          </header>

          <article className="contact-card" aria-label="Contact form">
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Enter your full name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="field field-full">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What is this regarding?" required />
              </div>

              <div className="field field-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message..." required />
              </div>

              <button type="submit" className="field-full">Send message</button>
            </form>

            {submitted && (
              <p className="contact-success" role="status" aria-live="polite">
                Message sent successfully. We will get back to you soon.
              </p>
            )}
          </article>
        </section>
      </main>
    </>
  );
}

export default Contact;
