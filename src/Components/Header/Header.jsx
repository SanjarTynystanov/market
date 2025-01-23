import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUsers, FaBlog, FaEnvelope, FaUser, FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="../logotip.jpeg" 
            alt="Логотип Ассоциации Дордой" 
            className="logo"
          />
        </Link>
        <div className="header-info">
          <h1 className="header-title">Ассоциация Дордой</h1>
          <p className="header-subtitle">
            Платформа для предпринимателей и развития бизнеса в Центральной Азии. 
            Мы объединяем участников рынка для взаимовыгодного сотрудничества и инновационного роста.
          </p>
        </div>
        {/* Иконка бургера */}
        <button className="burger-icon" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      {/* Навигация с переключением по мобильному меню */}
      <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link"><FaHome /> Главная</Link>
        <Link to="/about" className="nav-link"><FaInfoCircle /> О нас</Link>
        <Link to="/members" className="nav-link"><FaUsers /> Члены Ассоциации</Link>
        <Link to="/blog" className="nav-link"><FaBlog /> Блог</Link>
        <Link to="/contacts" className="nav-link"><FaEnvelope /> Контакты</Link>
        <Link to="/register" className="nav-link"><FaUser/>Зарегистрироваться</Link>
      </nav>
    </header>
  );
};

export default Header;
