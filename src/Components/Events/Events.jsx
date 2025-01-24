import React from 'react';
import './Events.css';
import { FaCalendarAlt, FaLocationArrow, FaLaptop } from 'react-icons/fa';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-header">
        <h2>Предстоящие события</h2>
        <p>Не упустите возможность присоединиться к нашим важным мероприятиям и встречам!</p>
      </div>
      <div className="events-list">
        <div className="event-card">
          <FaCalendarAlt className="event-icon" />
          <h3>Бизнес-форум 2025</h3>
          <p>15 марта 2025 года, Бишкек</p>
          <p>
            Уникальная возможность для предпринимателей обменяться опытом, найти новых партнёров и обсудить
            бизнес-тренды.
          </p>
        </div>
        <div className="event-card">
          <FaLaptop className="event-icon" />
          <h3>Тренинг: Лидерство</h3>
          <p>20 апреля 2025 года, онлайн</p>
          <p>
            Узнайте, как стать лидером, который вдохновляет и мотивирует, из уст ведущих мировых экспертов.
          </p>
        </div>
        <div className="event-card">
          <FaLocationArrow className="event-icon" />
          <h3>Выставка инноваций</h3>
          <p>5 мая 2025 года, Алматы</p>
          <p>
            Исследуйте самые современные технологии и решения, которые изменят наш мир в ближайшем будущем.
          </p>
        </div>
        <div className="event-card">
          <FaCalendarAlt className="event-icon" />
          <h3>Конференция по экологии</h3>
          <p>10 июня 2025 года, Нур-Султан</p>
          <p>
            Обсуждение актуальных экологических вопросов и инновационных решений для защиты природы.
          </p>
        </div>
        <div className="event-card">
          <FaLaptop className="event-icon" />
          <h3>Вебинар: Цифровизация бизнеса</h3>
          <p>25 июля 2025 года, онлайн</p>
          <p>
            Разберитесь, как цифровые технологии помогают развивать бизнес и ускорять процессы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
