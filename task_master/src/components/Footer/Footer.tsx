import "./Footer.css";

import Instagram from "../../assets/instagram.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="contact-title">Contatos</h2>
      <div className="contact-card">
        <a
          href="https://www.instagram.com/eros_netto"
          target="_blank"
          className="socialContainer containerOne"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/ErosNetto"
          target="_blank"
          className="socialContainer containerTwo"
        >
          <img src={Github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/eros-netto/"
          target="_blank"
          className="socialContainer containerThree"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://wa.me/5541984942439"
          target="_blank"
          className="socialContainer containerFour"
        >
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <p className="copyright">Feito por Eros &copy;2024</p>
    </footer>
  );
};

export default Footer;
