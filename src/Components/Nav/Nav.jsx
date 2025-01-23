import React from 'react';
import { Link } from 'react-router-dom';
import { FaConciergeBell, FaProjectDiagram, FaPhotoVideo, FaQuestionCircle, FaFutbol, FaNewspaper, FaComments, FaHandshake, FaCalendarAlt, FaAddressBook, FaHistory, FaVideo, FaUsers, FaBlog, FaBriefcase, FaImages, FaFacebook } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="App-nav">
            <Link to="/services" className="nav-link"><FaConciergeBell /> Услуги</Link>
            <Link to="/projects" className="nav-link"><FaProjectDiagram /> Проекты</Link>
            <Link to="/gallery" className="nav-link"><FaPhotoVideo /> Галерея</Link>
            <Link to="/faq" className="nav-link"><FaQuestionCircle /> FAQ</Link>
            <Link to="/sports" className="nav-link"><FaFutbol /> Спорт</Link>
            <Link to="/news" className="nav-link"><FaNewspaper /> Новости</Link>
            <Link to="/testimonials" className="nav-link"><FaComments /> Отзывы</Link>
            <Link to="/partners" className="nav-link"><FaHandshake /> Партнеры</Link>
            <Link to="/events" className="nav-link"><FaCalendarAlt /> События</Link>
            <Link to="/history" className="nav-link"><FaHistory /> История</Link>
            <Link to="/video" className="nav-link"><FaVideo /> Видео</Link>
            <Link to="/jobs" className="nav-link"><FaBriefcase /> Вакансии</Link>
            <Link to="/social-feed" className="nav-link"><FaFacebook /> Социальные сети</Link>
        </nav>
    );
}

export default Nav;