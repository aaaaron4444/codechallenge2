import React from 'react';
import styles from './CompanyOverview.module.css';

const CompanyOverview = () => {
  return (
    <section className={styles.companyOverview}>
      <div className={styles.container}>
        <div className={styles.backgroundBorder}>
          <h2 className={styles.title}>About Our Company</h2>
          <p className={styles.description}>
            Founded in 2023, our company has grown to become a leader in the Finance Consulting Industry.
          </p>
          <p className={styles.description}>
            Our team is dedicated to providing the best services to our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
