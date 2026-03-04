import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDark from '../header/HeaderDark.jsx';
import './Register.css';

function Register() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Create Account | Landmine Soft';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <HeaderDark variant="light" />
      <main id="register-page" className="register-page">
        <section className="register-shell">
          <article className="register-card" aria-label="Create account form">
            <h1>Create your account</h1>
            <p className="register-note">Join thousands of developers applying for top roles.</p>

            <form className="register-form" noValidate onSubmit={handleSubmit}>
              <fieldset className="register-group">
                <legend>Personal Details</legend>
                <div className="register-grid">
                  <div className="field">
                    <label htmlFor="fullName">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input id="fullName" name="fullName" type="text" required />
                  </div>

                  <div className="field">
                    <label htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input id="email" name="email" type="email" required />
                  </div>

                  <div className="field">
                    <label htmlFor="password">
                      Password <span aria-hidden="true">*</span>
                    </label>
                    <input id="password" name="password" type="password" required />
                  </div>

                  <div className="field">
                    <label htmlFor="phone">
                      Phone <span aria-hidden="true">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required />
                  </div>

                  <div className="field">
                    <label htmlFor="location">
                      Location <span aria-hidden="true">*</span>
                    </label>
                    <input id="location" name="location" type="text" placeholder="e.g. Telangana" required />
                  </div>

                  <div className="field">
                    <label htmlFor="city">
                      City <span aria-hidden="true">*</span>
                    </label>
                    <input id="city" name="city" type="text" placeholder="e.g. Hyderabad" required />
                  </div>

                  <div className="field">
                    <label htmlFor="pincode">
                      Pincode <span aria-hidden="true">*</span>
                    </label>
                    <input id="pincode" name="pincode" type="text" inputMode="numeric" placeholder="e.g. 500001" required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="register-group">
                <legend>Education</legend>
                <div className="register-grid">
                  <div className="field">
                    <label htmlFor="college">
                      College <span aria-hidden="true">*</span>
                    </label>
                    <input id="college" name="college" type="text" required />
                  </div>

                  <div className="field">
                    <label htmlFor="degree">
                      Degree <span aria-hidden="true">*</span>
                    </label>
                    <input id="degree" name="degree" type="text" placeholder="e.g. B.Tech" required />
                  </div>

                  <div className="field">
                    <label htmlFor="yearOfPassing">
                      Year of Passing <span aria-hidden="true">*</span>
                    </label>
                    <input id="yearOfPassing" name="yearOfPassing" type="text" inputMode="numeric" placeholder="e.g. 2023" required />
                  </div>

                  <div className="field">
                    <label htmlFor="cgpa">
                      CGPA <span aria-hidden="true">*</span>
                    </label>
                    <input id="cgpa" name="cgpa" type="text" placeholder="e.g. 8.5" required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="register-group">
                <legend>Professional (Optional)</legend>
                <div className="register-grid">
                  <div className="field">
                    <label htmlFor="currentCompany">Current Company (Optional)</label>
                    <input id="currentCompany" name="currentCompany" type="text" placeholder="e.g. Landmine Soft" />
                  </div>

                  <div className="field">
                    <label htmlFor="currentPosition">Current Position (Optional)</label>
                    <input id="currentPosition" name="currentPosition" type="text" placeholder="e.g. Developer" />
                  </div>

                  <div className="field">
                    <label htmlFor="currentSalary">Current Salary (Optional)</label>
                    <input id="currentSalary" name="currentSalary" type="text" placeholder="e.g. 5 LPA" />
                  </div>
                </div>
              </fieldset>

              <button type="submit">Create Account</button>
            </form>

            {submitted && (
              <p className="register-success" role="status" aria-live="polite">
                Account form submitted successfully.
              </p>
            )}

            <p className="register-footer">
              Already have account? <Link to="/login">Log in</Link>
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Register;
