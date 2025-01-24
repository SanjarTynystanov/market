import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBullseye,
  faHandshake,
  faChartLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img
          className="home-img"
          src="https://yt3.googleusercontent.com/n0HkpqLYmnT6QpYhqOv9ZtpArFPMJ_XgI5jOqCYIi6LWBBAtPzPRblj1u5-oslnK6yJRQk289w4=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          alt="Логотип Ассоциации Дордой"
        />
        <h1 className="home-title">Ассоциация Дордой</h1>
        <p className="home-subtitle">
          Сообщество предпринимателей Центральной Азии, объединяющее знания,
          ресурсы и опыт для вашего успеха.
        </p>
      </header>

      {/* About Section */}
      <section className="home-section">
        <h2>
          <FontAwesomeIcon icon={faUsers} /> О нас
        </h2>
        <p>
          Ассоциация Дордой объединяет более 5,000 участников, создавая мощную
          платформу для сотрудничества и развития бизнеса. Мы предлагаем
          ресурсы для роста, обучения и доступа к международным возможностям.
        </p>
      </section>

      {/* Goals Section */}
      <section className="home-goals">
        <h2>
          <FontAwesomeIcon icon={faBullseye} /> Наши цели
        </h2>
        <ul>
          <li>Создание новых возможностей для малого и среднего бизнеса.</li>
          <li>Поддержка экспорта товаров на международные рынки.</li>
          <li>Развитие образовательных программ для предпринимателей.</li>
          <li>Формирование сильного делового сообщества.</li>
        </ul>
      </section>

      {/* Membership Benefits Section */}
      <section className="home-benefits">
        <h2>
          <FontAwesomeIcon icon={faHandshake} /> Преимущества членства
        </h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img
              src="https://th.bing.com/th/id/OIP.48t2y-wSRVDvRR9yYHBkiAHaE7?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Поддержка"
              className="benefit-icon"
            />
            <h3>Поддержка бизнеса</h3>
            <p>
              Помощь в решении юридических, логистических и организационных
              вопросов.
            </p>
          </div>
          <div className="benefit-item">
            <img
              src="https://ksu.edu.kz/images/page/ksu/op-kru.jpg"
              alt="Обучение"
              className="benefit-icon"
            />
            <h3>Образовательные программы</h3>
            <p>Доступ к тренингам, семинарам и конференциям.</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://th.bing.com/th/id/OIP.JizEs2igy8BhRh4d0XFFZgHaD5?rs=1&pid=ImgDetMain"
              alt="Нетворкинг"
              className="benefit-icon"
            />
            <h3>Нетворкинг</h3>
            <p>
              Установление деловых связей с лидерами рынка и партнерами по всему
              миру.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="home-activities">
        <h2>
          <FontAwesomeIcon icon={faChartLine} /> Наша деятельность
        </h2>
        <ul>
          <li>
            Организация ежегодных выставок, таких как "Торговля и Инновации",
            для демонстрации новейших технологий.
          </li>
          <li>
            Проведение бизнес-форумов и круглых столов с международными
            партнерами.
          </li>
          <li>
            Сотрудничество с правительством для улучшения условий ведения
            бизнеса.
          </li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <h2>
          <FontAwesomeIcon icon={faTrophy} /> Наши достижения
        </h2>
        <div className="stats-grid">
          <div className="stats-item">
            <h3>5,000+</h3>
            <p>Активных участников</p>
          </div>
          <div className="stats-item">
            <h3>30+</h3>
            <p>Международных партнеров</p>
          </div>
          <div className="stats-item">
            <h3>100+</h3>
            <p>Организованных мероприятий</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="home-join">
        <h2>Присоединяйтесь к нам</h2>
        <p>
          Станьте частью Ассоциации Дордой и откройте новые горизонты для
          развития вашего бизнеса. Членство дает вам доступ к уникальным
          возможностям, таким как международные связи, обучение и поддержка.
        </p>
        <Link to="/register" className="cta-button">
          Зарегистрироваться
        </Link>
      </section>
    </div>
  );
};

export default Home;


