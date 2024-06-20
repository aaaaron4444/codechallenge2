import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo/logo.png" alt="Company Logo" width={100} height={40} />
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/team">Team</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
