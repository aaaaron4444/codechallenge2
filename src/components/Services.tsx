import React from 'react';
import styles from './Services.module.css';
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    name: 'Financial Planning and Analysis',
    description: 'FinanceGo offers comprehensive financial planning and analysis services to help businesses make informed decisions. Our experts work closely with clients to develop robust financial plans, forecast future financial performance, and analyze financial data to provide actionable insights.',
    keyOfferings: [
      'Budgeting and forecasting',
      'Financial performance analysis',
      'Cash flow management',
      'Scenario planning and stress testing'
    ]
  },
  {
    name: 'Investment Advisory Services',
    description: 'Our investment advisory services are designed to help clients optimize their investment portfolios for maximum returns while minimizing risks. FinanceGo&apos;s advisors provide personalized investment strategies tailored to each client&apos;s financial goals and risk tolerance.',
    keyOfferings: [
      'Portfolio management',
      'Risk assessment and mitigation',
      'Retirement planning',
      'Wealth management and growth strategies'
    ]
  },
  {
    name: 'Corporate Finance Consulting',
    description: 'FinanceGo provides expert corporate finance consulting services to assist businesses in navigating complex financial challenges. Our consultants offer strategic advice on mergers and acquisitions, capital raising, and corporate restructuring to enhance business value and operational efficiency.',
    keyOfferings: [
      'Mergers and acquisitions advisory',
      'Capital raising and financing solutions',
      'Business valuation and due diligence',
      'Corporate restructuring and turnaround strategies'
    ]
  }
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.serviceList}>
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              name={service.name}
              description={service.description}
              keyOfferings={service.keyOfferings}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
