import React from 'react';
import { FaBuilding, FaHandshake, FaChartLine, FaGlobe, FaUniversity, FaRocket } from 'react-icons/fa'; // Дополнительные иконки
import './Partners.css';

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="partners-header">
        <h2>Наши партнёры</h2>
        <p>
          Мы сотрудничаем с ведущими организациями по всему миру, чтобы достичь высоких результатов и способствовать развитию.
        </p>
      </div>

      <div className="partners-list">
        <div className="partner-card">
          <FaBuilding className="partner-icon" />
          <h3>Банк развития Азии</h3>
          <p>Поддержка крупных инфраструктурных проектов и устойчивое развитие в регионе.</p>
        </div>
        <div className="partner-card">
          <FaHandshake className="partner-icon" />
          <h3>Фонд поддержки малого бизнеса</h3>
          <p>Программа помощи малым предприятиям в получении финансов и консультаций.</p>
        </div>
        <div className="partner-card">
          <FaChartLine className="partner-icon" />
          <h3>Международная торговая палата</h3>
          <p>Глобальная сеть, продвигающая инновации и международное сотрудничество.</p>
        </div>
        <div className="partner-card">
          <FaGlobe className="partner-icon" />
          <h3>Всемирная организация здравоохранения</h3>
          <p>Работа над улучшением здоровья людей во всем мире.</p>
        </div>
        <div className="partner-card">
          <FaUniversity className="partner-icon" />
          <h3>Гарвардский университет</h3>
          <p>Сотрудничество в области образовательных программ и исследований.</p>
        </div>
        <div className="partner-card">
          <FaRocket className="partner-icon" />
          <h3>Космическое агентство</h3>
          <p>Поддержка инноваций в аэрокосмической отрасли.</p>
        </div>
        <div className="partner-card">
          <FaGlobe className="partner-icon" />
          <h3>Программа ООН по окружающей среде</h3>
          <p>Защита природных ресурсов и борьба с изменением климата.</p>
        </div>
        <div className="partner-card">
          <FaUniversity className="partner-icon" />
          <h3>Оксфордский университет</h3>
          <p>Продвижение передовых научных исследований.</p>
        </div>
        <div className="partner-card">
          <FaHandshake className="partner-icon" />
          <h3>Международный союз по защите природы</h3>
          <p>Сохранение биологического разнообразия на планете.</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
