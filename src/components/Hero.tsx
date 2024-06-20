import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero}>
        <img src="/banner/banner1.jpg" alt="Hero Banner" className={styles.heroImage} />
        <div className={styles.textOverlay}>
        <h1 className={styles.heroTitle}>Welcome to FinanceGo</h1>
        <p className={styles.heroSubtitle}>Empowering Your Financial Future</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
