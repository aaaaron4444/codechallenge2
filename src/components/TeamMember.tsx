import { useEffect, useState } from 'react';
import { fetchTeamMembers } from '../lib/api';
import styles from './Team.module.css';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const getTeamMembers = async () => {
      const members = await fetchTeamMembers();
      setTeamMembers(members);
    };

    getTeamMembers();
  }, []);

  return (
    <section className={styles.teamSection}>
      <h2>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} />
            <h3>{`${member.name.first} ${member.name.last}`}</h3>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
