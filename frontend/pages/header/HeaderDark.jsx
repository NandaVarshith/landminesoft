import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderDark.css';

function HeaderDark({ variant = 'dark' }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={`about-header about-header--${variant}`}>
      <div className="about-header-inner">
        <div className="about-header-actions">
          <div className="about-menu-wrap" ref={menuRef}>
            <button
              type="button"
              className="about-icon-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="about-header-menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>

            {open && (
              <nav id="about-header-menu" className="about-menu" aria-label="About actions">
                <a href="/get-demo" onClick={() => setOpen(false)}>Get a Demo</a>
                <a href="/contact.html" onClick={() => setOpen(false)}>Contact Us</a>
                <a href="/support.html" onClick={() => setOpen(false)}>Support</a>
              </nav>
            )}
          </div>

          <Link to="/" className="about-icon-btn" aria-label="Go to home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5.5 9.5V21h13V9.5" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderDark;
