import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'natnael.dev',
    href: 'https://natnael.dev',
  },
  {
    social: 'email',
    link: 'natnael92460@gmail.com',
    href: 'mailto:natnael92460@gmail.com',
  },
  {
    social: 'github',
    link: 'NatnaelGebremichael',
    href: 'https://github.com/natnaelgebremichael',
  },
  {
    social: 'linkedin',
    link: 'natnael-Gebremichael',
    href: 'https://www.linkedin.com/in/natnael-gebremichael/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
