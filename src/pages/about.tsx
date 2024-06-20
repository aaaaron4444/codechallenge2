import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './about.module.css';
import { User, RandomUserResponse } from '../types/type';

const About = () => {
  const [teamMembers, setTeamMembers] = useState<{ ceo: User | null; cto: User | null }>({
    ceo: null,
    cto: null,
  });

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const ceoResponse = await axios.get<RandomUserResponse>('https://randomuser.me/api/');
        const ctoResponse = await axios.get<RandomUserResponse>('https://randomuser.me/api/');
        setTeamMembers({
          ceo: ceoResponse.data.results[0],
          cto: ctoResponse.data.results[0],
        });
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  if (!teamMembers.ceo || !teamMembers.cto) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.backgroundBorder}>
          <h1 className={styles.header}>About Us</h1>
          <p className={styles.content}>
            FinanceGo is a premier finance consulting company dedicated to providing top-notch financial 
            advisory services to businesses and individuals. Our mission is to empower our clients with the financial 
            insight and strategies needed to achieve their goals, ensuring long-term success and stability. With a team of seasoned financial experts, 
            FinanceGo combines deep industry knowledge with innovative solutions to deliver unparalleled financial guidance and support.
          </p>
          <h2 className={styles.subheader}>Our Team</h2>
          <div className={styles.teamSection}>
            <div className={styles.teamMember}>
              <img src={teamMembers.ceo.picture.large} alt="CEO" className={styles.teamMemberPhoto} />
              <h3 className={styles.teamMemberName}>
                {teamMembers.ceo.name.first} {teamMembers.ceo.name.last}
              </h3>
              <p className={styles.teamMemberRole}>CEO</p>
            </div>
            <div className={styles.teamMember}>
              <img src={teamMembers.cto.picture.large} alt="CTO" className={styles.teamMemberPhoto} />
              <h3 className={styles.teamMemberName}>
                {teamMembers.cto.name.first} {teamMembers.cto.name.last}
              </h3>
              <p className={styles.teamMemberRole}>CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
