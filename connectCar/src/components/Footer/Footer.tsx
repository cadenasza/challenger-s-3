import { Footer } from "../../style/styled";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <Footer>
      <div className="social-media">
        <div className="social-media-content">
          <FaInstagram />
          <p>Instagram</p>
        </div>
        <div className="social-media-content">
          <FaWhatsapp />
          <p>Whatsapp</p>
        </div>
        <div className="social-media-content">
          <FaYoutube />
          <p>Youtube</p>
        </div>
      </div>
      <div className="footer-content-container">
        <div className="footer-header">
          <Link to="/">Home</Link>
          <Link to="/members">Integrantes</Link>
          <Link to="/login">
            <IoPerson />
          </Link>
        </div>
        <div className="copyright">
          <div className="logo-team">
            <p className="porto-text" id="porto-porto">
              Porto
            </p>
            <p className="porto-text" id="porto-seguro-text">
              Seguro
            </p>
          </div>
          <p>© Copyright 2023 - Porto Seguro</p>
        </div>
      </div>
      <div className="endereco">
        <p>
          Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP
          06.020-902
        </p>
      </div>
    </Footer>
  );
}
