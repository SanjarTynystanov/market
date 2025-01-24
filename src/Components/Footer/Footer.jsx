import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>О Ассоциации Дордой</h3>
          <p>
            Ассоциация Дордой — это организация, поддерживающая предпринимателей и развивающая экономику региона. Мы предоставляем платформу для роста бизнеса, сотрудничества и инноваций.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Контакты</h3>
          <ul>
            <li><FaMapMarkerAlt /> ул. Токтогула, 123, Бишкек, Кыргызстан</li>
            <li><FaPhone /> +996 (312) 123-456</li>
            <li><FaEnvelope /> info@dordoi.kg</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Мы в соцсетях</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com/dordoi" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://instagram.com/dordoi" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://twitter.com/dordoi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ассоциация Дордой. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
