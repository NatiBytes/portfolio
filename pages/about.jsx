import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>Software Developer & Tech Enthusiast</p>
      </header>
      
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Journey</h2>
          <p>
            With a passion for crafting digital solutions, I've been on an exciting journey in the world of software development. 
            From building responsive web applications to diving into the intricacies of backend systems, 
            I'm constantly pushing the boundaries of what's possible with code.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <ul className={styles.skillsList}>
            <li>JavaScript (React, Node.js)</li>
            <li>Python</li>
            <li>AWS Cloud Services</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Beyond the Code</h2>
          <p>
            When I'm not immersed in lines of code, you'll find me exploring hiking trails, 
            losing myself in the pages of a captivating sci-fi novel, or experimenting with new flavors in the kitchen. 
            I believe in the power of continuous learning and always seek to broaden my horizons, both in technology and life.
          </p>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;