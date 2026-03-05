import React, { useEffect } from 'react';
import './Services.css';
import HeaderDark from '../header/HeaderDark.jsx';
import ServicesOfferGrid from '../../src/components/ServicesOfferGrid.jsx';

function Services() {
  useEffect(() => {
    document.title = 'Services | Landmine Soft';
    document.body.classList.add('services-body');

    return () => {
      document.body.classList.remove('services-body');
    };
  }, []);

  return (
    <>
      <HeaderDark />

      <section className="services-hero">
        <h1>
          OUR <span>SERVICES</span>
        </h1>
        <p>
          We help companies move from ideas to production-ready platforms with strong engineering foundations and
          business-focused execution.
        </p>
      </section>

      <section>
        <div className="services-head">
          <div className="label">What we offer</div>
          <h2>
            Engineering Services That <span>Scale</span>
          </h2>
        </div>
        <ServicesOfferGrid />
      </section>
    </>
  );
}

export default Services;
