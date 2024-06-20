import React from 'react';
import styles from './Services.module.css';

interface ServiceItemProps {
  name: string;
  description: string;
  keyOfferings: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ name, description, keyOfferings }) => {
  return (
    <div className={styles.serviceItem}>
      <h3 className={styles.serviceName}>{name}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <p className={styles.serviceDescription}>Key Offerings:</p>
      <ul>
        {keyOfferings.map((offering, idx) => (
          <li key={idx}>{offering}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;
