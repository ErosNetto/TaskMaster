import "./Footer.css";

import Whatsapp from "../../assets/whatsapp.svg";
import Github from "../../assets/github.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin-plain.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="contact-title">Contato</h2>
      <div className="contact-card">
        <a href="#" className="socialContainer containerOne">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="#" className="socialContainer containerTwo">
          <img src={Github} alt="GitHub" />
        </a>
        <a href="#" className="socialContainer containerThree">
          <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a href="#" className="socialContainer containerFour">
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <p className="copyright">Feito por Eros &copy;2024</p>
    </footer>
  );
};

export default Footer;
