import React, { useEffect } from 'react';
import HeaderDark from '../header/HeaderDark.jsx';
import './Consultation.css';

function Consultation() {
  useEffect(() => {
    document.title = 'Consultation | Landmine Soft';
  }, []);

  return (
    <>
      <HeaderDark variant="light" />
      <main id="consultation-page" className="consultation-page">
        <section className="consultation-shell">
          <div className="consultation-intro">
            <span className="consultation-kicker">Strategy Session</span>
            <h1>Schedule a Free Consultation</h1>
            <p>
              Share a few details about your software or product idea and pick a suitable time.
              Our team will get back to you to confirm the meeting.
            </p>
            <ul className="consultation-points">
              <li>30-minute discovery call with product and engineering inputs</li>
              <li>Clarity on scope, architecture direction, and rollout plan</li>
              <li>No obligation, practical recommendations only</li>
            </ul>
          </div>

          <div className="consultation-card">
            <div className="consultation-head">
              <h2>Project Details</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form className="consultation-form">
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" type="text" placeholder="John Doe" required />
              </div>

              <div className="field">
                <label htmlFor="email">Work Email *</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>

              <div className="field">
                <label htmlFor="company">Company / Organization</label>
                <input id="company" name="company" type="text" placeholder="Company name (optional)" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="field">
                <label htmlFor="buildType">What do you want to build?</label>
                <select id="buildType" name="buildType" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>AI / ML Solution</option>
                  <option>Cloud Platform</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="budget">Estimated budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>Below $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="preferredDate">Preferred date *</label>
                <input id="preferredDate" name="preferredDate" type="text" placeholder="dd-mm-yyyy" required />
              </div>

              <div className="field">
                <label htmlFor="preferredTime">Preferred time (IST) *</label>
                <input id="preferredTime" name="preferredTime" type="time" required />
              </div>

              <div className="field field-full">
                <label htmlFor="meetingType">Meeting type</label>
                <select id="meetingType" name="meetingType" defaultValue="Video call">
                  <option>Video call</option>
                  <option>Phone call</option>
                </select>
              </div>

              <div className="field field-full">
                <label htmlFor="projectBrief">Tell us about your project *</label>
                <textarea
                  id="projectBrief"
                  name="projectBrief"
                  rows="5"
                  placeholder="Share what you want to build, who it is for, and any timelines or key requirements."
                  required
                />
              </div>

              <button type="submit" className="field-full">Request Consultation</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Consultation;
