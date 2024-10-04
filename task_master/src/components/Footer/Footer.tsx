import styles from "./Footer.module.css";

import Instagram from "../../assets/instagram.svg";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.contact_title}>Contatos</h2>
      <div className={styles.contact_card}>
        <a
          href="https://www.instagram.com/eros_netto"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social_container} ${styles.container_one}`}
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/ErosNetto"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social_container} ${styles.container_two}`}
        >
          <img src={Github} alt="GitHub" />
        </a>
        <a
          href="mailto:erosnetto1002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social_container} ${styles.container_three}`}
        >
          <img src={Gmail} alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/eros-netto/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social_container} ${styles.container_four}`}
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://wa.me/5541984942439"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social_container} ${styles.container_five}`}
        >
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <p className={styles.copyright}>Feito por Eros N. Antunes &copy;2024</p>
    </footer>
  );
};

export default Footer;
