import React from "react";
import { Link } from "react-router-dom"; // Подключаем Link для навигации
import "./Home.css"; // Подключаем стили

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Рынок Дордой</h1>
        <p className="home-subtitle">
          Один из крупнейших рынков Центральной Азии, играющий важную роль в
          экономике региона.
        </p>
      </header>

      <section className="home-section">
        <h2>О рынке</h2>
        <p>
          Рынок Дордой расположен в Бишкеке, Кыргызстан. Это ключевой центр
          торговли, известный своими масштабами и ассортиментом. Рынок
          предоставляет рабочие места для тысяч людей и является важным звеном
          в торговой инфраструктуре региона. Здесь торгуются товары от одежды и электроники до продуктов питания и строительных материалов.
        </p>
      </section>

      <section className="home-history">
        <h2>История рынка Дордой</h2>
        <p>
          Рынок был основан в начале 90-х годов и стал символом предпринимательства в Центральной Азии. С тех пор он продолжает расти, привлекая международные инвестиции и поставщиков товаров из разных уголков мира.
        </p>
      </section>

      <section className="home-news">
        <h2>Новости</h2>
        <ul>
          <li>
            <strong>Обновления инфраструктуры:</strong> На рынке построены новые торговые павильоны с современным оборудованием.
          </li>
          <li>
            <strong>Международная торговля:</strong> Увеличение экспорта товаров в соседние страны, такие как Казахстан и Узбекистан.
          </li>
          <li>
            <strong>События:</strong> Ежегодная выставка "Торговля и Инновации" пройдет в мае 2025 года, где будут представлены новейшие достижения в области торговли.
          </li>
        </ul>
      </section>

      <section className="home-stats">
        <h2>Ключевые факты</h2>
        <div className="stats-grid">
          <div className="stats-item">
            <h3>1,000+</h3>
            <p>Торговых точек</p>
          </div>
          <div className="stats-item">
            <h3>50,000+</h3>
            <p>Посетителей ежедневно</p>
          </div>
          <div className="stats-item">
            <h3>20+</h3>
            <p>Стран-партнеров</p>
          </div>
        </div>
      </section>

      {/* Новая секция для регистрации и участия в Ассоциации */}
      <section className="home-association">
        <h2>Станьте частью Ассоциации Дордой</h2>
        <p>
          Присоединяйтесь к Ассоциации и получите доступ ко всем преимуществам для вашего бизнеса. Станьте частью
          мощной сети предпринимателей, которые поддерживают друг друга, развивают новые возможности и помогают
          продвигаться на международных рынках.
        </p>
        <p>
          Участвуйте в совместных проектах, получайте доступ к специальным предложениям, и расширяйте свои бизнес
          горизонты, сотрудничая с ведущими торговыми игроками Центральной Азии и за ее пределами.
        </p>
        <Link to="/register" className="cta-button">Зарегистрироваться</Link>
      </section>
    </div>
  );
};

export default Home;


