import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceName}>Financial Planning and Analysis</h3>
            <p className={styles.serviceDescription}>
              FinanceGo offers comprehensive financial planning and analysis services to help businesses make informed decisions. Our experts work closely with clients to develop robust financial plans, forecast future financial performance, and analyze financial data to provide actionable insights.
            </p>
            <p className={styles.serviceDescription}>Key Offerings:</p>
            <ul>
              <li>Budgeting and forecasting</li>
              <li>Financial performance analysis</li>
              <li>Cash flow management</li>
              <li>Scenario planning and stress testing</li>
            </ul>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceName}>Investment Advisory Services</h3>
            <p className={styles.serviceDescription}>
              Our investment advisory services are designed to help clients optimize their investment portfolios for maximum returns while minimizing risks. FinanceGo's advisors provide personalized investment strategies tailored to each client's financial goals and risk tolerance.
            </p>
            <p className={styles.serviceDescription}>Key Offerings:</p>
            <ul>
              <li>Portfolio management</li>
              <li>Risk assessment and mitigation</li>
              <li>Retirement planning</li>
              <li>Wealth management and growth strategies</li>
            </ul>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceName}>Corporate Finance Consulting</h3>
            <p className={styles.serviceDescription}>
              FinanceGo provides expert corporate finance consulting services to assist businesses in navigating complex financial challenges. Our consultants offer strategic advice on mergers and acquisitions, capital raising, and corporate restructuring to enhance business value and operational efficiency.
            </p>
            <p className={styles.serviceDescription}>Key Offerings:</p>
            <ul>
              <li>Mergers and acquisitions advisory</li>
              <li>Capital raising and financing solutions</li>
              <li>Business valuation and due diligence</li>
              <li>Corporate restructuring and turnaround strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
