import React from 'react';
import Services from '../components/Services';
import styles from './servicesPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <img src="/banner/heroservice1.jpg" alt="Services Hero" className={styles.heroImage} />
      <Services />
    </div>
  );
};

export default ServicesPage;