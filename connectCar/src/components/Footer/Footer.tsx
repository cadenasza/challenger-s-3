import { Footer } from '../../style/styled';

export default function Rodape() {
  return (
    <Footer>
      <div className="social-media">
        <div className="social-media-content">
          <img
            src="../imgs/instagram.png"
            alt="instagram"
            className="social-media-icon"
          />
          <p>Instagram</p>
        </div>
        <div className="social-media-content">
          <img
            src="../imgs/whatsapp.png"
            alt="whatsapp"
            className="social-media-icon"
          />
          <p>Whatsapp</p>
        </div>
        <div className="social-media-content">
          <img
            src="../imgs/youtube.png"
            alt="youtube"
            className="social-media-icon"
          />
          <p>Youtube</p>
        </div>
      </div>
      <div className="footer-content-container">
        <div className="footer-header">
          <a href="../index.html"><p>Home</p></a>
          <a href="./members.html"><p>Integrantes</p></a>
          <a href="./login.html"
            ><img
              src="../imgs/people-icon.png"
              alt="support"
              className="icon-footer"
          /></a>
        </div>
        <div className="copyright">
          <div className="logo-team">
            <p className="porto-text" id="porto-porto">Porto</p>
            <p className="porto-text" id="porto-seguro-text">Seguro</p>
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
