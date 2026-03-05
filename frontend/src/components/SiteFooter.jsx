import React from 'react';
import { useLocation } from 'react-router-dom';
import './SiteFooter.css';

function SiteFooter() {
  const { pathname } = useLocation();
  const isDarkFooter = pathname === '/' || pathname === '/about' || pathname === '/services';

  return (
    <footer
      className={`site-footer ${isDarkFooter ? 'site-footer--dark' : 'site-footer--light'}`}
      aria-label="Landmine Soft footer"
    >
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <h2>Landmine Soft</h2>
            <p>Engineering software with clarity and speed.</p>
          </div>

          <div className="site-footer-contact">
            <p className="site-footer-item">
              <span className="site-footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s7-5.7 7-12a7 7 0 1 0-14 0c0 6.3 7 12 7 12Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              Hyderabad, Telangana 500081, India
            </p>

            <a className="site-footer-item site-footer-link" href="mailto:contact@landminesoft.com">
              <span className="site-footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              contact@landminesoft.com
            </a>

            <a className="site-footer-item site-footer-link" href="tel:+919059024653">
              <span className="site-footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.8v3a2.2 2.2 0 0 1-2.4 2.2A19.7 19.7 0 0 1 11 18.8 19.4 19.4 0 0 1 5.2 13a19.7 19.7 0 0 1-3.2-8.6A2.2 2.2 0 0 1 4.2 2h3A2.2 2.2 0 0 1 9.4 3.9c.1 1 .4 2 .9 2.8a2.2 2.2 0 0 1-.5 2.8L8.5 10.8a17.6 17.6 0 0 0 4.7 4.7l1.3-1.3a2.2 2.2 0 0 1 2.8-.5c.9.5 1.8.8 2.8.9A2.2 2.2 0 0 1 22 16.8Z" />
                </svg>
              </span>
              +91-90590-24-653
            </a>
          </div>

          <div className="site-footer-connect">
            <p>Connect</p>
            <nav className="site-footer-social" aria-label="Social media">
              <a href="https://www.linkedin.com/company/landminesoft" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 7a1.97 1.97 0 0 0-.05-4Zm6.9 5.5H8.92V20h3.23v-5.96c0-1.57.3-3.1 2.24-3.1 1.9 0 1.93 1.77 1.93 3.2V20h3.24v-6.52c0-3.2-.7-5.66-4.43-5.66-1.8 0-3 .98-3.5 1.9h-.05V8.5Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/landminesoft" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/landminesoft" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1" />
                </svg>
              </a>
              <a href="https://x.com/landminesoft" target="_blank" rel="noreferrer" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.24 3H21l-6.03 6.9L22 21h-5.54l-4.34-5.67L7.2 21H4.4l6.45-7.38L2 3h5.68l3.92 5.18L18.24 3Zm-.97 16.3h1.53L6.84 4.62H5.2L17.27 19.3Z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>

        <div className="site-footer-bottom">
          <small>© 2026 Landmine Soft. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
