import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUsers, FaBlog, FaEnvelope, FaUser, FaBars, FaConciergeBell, FaProjectDiagram, FaPhotoVideo, FaQuestionCircle, FaFutbol, FaNewspaper, FaComments, FaHandshake, FaCalendarAlt, FaHistory, FaVideo , FaBriefcase, FaFacebook } from "react-icons/fa";
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
      <Link to="/services" className="nav-link"><FaConciergeBell /> Услуги</Link>
                    <Link to="/projects" className="nav-link"><FaProjectDiagram /> Проекты</Link>
                    <Link to="/faq" className="nav-link"><FaQuestionCircle /> FAQ</Link>
                    <Link to="/sports" className="nav-link"><FaFutbol /> Спорт</Link>
                    <Link to="/news" className="nav-link"><FaNewspaper /> Новости</Link>
                    <Link to="/testimonials" className="nav-link"><FaComments /> Отзывы</Link>
                    <Link to="/partners" className="nav-link"><FaHandshake /> Партнеры</Link>
                    <Link to="/events" className="nav-link"><FaCalendarAlt /> События</Link>
                    <Link to="/history" className="nav-link"><FaHistory /> История</Link>
                    <Link to="/video" className="nav-link"><FaVideo /> Видео</Link>
                    <Link to="/jobs" className="nav-link"><FaBriefcase /> Вакансии</Link>              
      </nav>
    </header>
  );
};

export default Header;
