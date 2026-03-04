import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDark from '../header/HeaderDark.jsx';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Login | Landmine Soft';

    document.body.classList.add('login-body');

    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <HeaderDark variant="light" />
      <main id="login-page" className="login-page">
        <section className="login-shell">
          <aside className="login-side">
            <p className="login-side-kicker">Secure Access</p>
            <h2>Access your candidate dashboard.</h2>
            <p>
              Log in to continue your job applications, update your profile, and track hiring progress.
            </p>
            <ul className="login-points" aria-label="Platform highlights">
              <li>View current application status anytime</li>
              <li>Edit education and professional details</li>
              <li>Receive updates from the hiring team</li>
            </ul>
          </aside>

          <article className="login-card" aria-label="Login form">
            <p className="login-kicker">Landmine Soft Workspace</p>
            <h1>Log in to Landmine Soft</h1>
            <p className="login-note">Access your applications, profile, and project updates.</p>

            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <label htmlFor="login-email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="login-password">
                Password <span aria-hidden="true">*</span>
              </label>
              <div className="password-wrap">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    if (error && event.target.value.length >= 8) {
                      setError('');
                    }
                  }}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="login-actions">
                <label className="remember-row">
                  <input type="checkbox" name="rememberMe" />
                  <span>Remember me</span>
                </label>
                <a href="#" onClick={(event) => event.preventDefault()}>
                  Forgot password?
                </a>
              </div>

              <button type="submit">Log In</button>
            </form>

            {error && <p className="login-error">{error}</p>}
            {submitted && (
              <p className="login-success" role="status" aria-live="polite">
                Login form submitted. Connect this page to your auth API to complete sign-in.
              </p>
            )}

            <p className="login-footer">
              New to Landmine Soft? <Link to="/register">Create an account</Link>
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Login;
