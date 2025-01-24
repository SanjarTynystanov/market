import React from 'react';
import { FaRegHandshake, FaUserTie, FaChartLine, FaBullhorn } from 'react-icons/fa'; // Иконки
import "./Jobs.css"

const Jobs = () => {
  return (
    <section id="jobs" className="jobs-section">
      <h2>Наши Вакансии</h2>
      <div className="jobs-card-container">
        {/* Вакансия 1 */}
        <div className="job-card">
          <div className="job-icon">
            <FaRegHandshake size={50} />
          </div>
          <div className="job-details">
            <h3>Менеджер проектов</h3>
            <p>Мы ищем опытного менеджера проектов для организации мероприятий, координации команд и контроля бюджета. Требования: лидерские качества, опыт работы в проектном управлении.</p>
            <button className="cta-button">Подать заявку</button>
          </div>
        </div>

        {/* Вакансия 2 */}
        <div className="job-card">
          <div className="job-icon">
            <FaUserTie size={50} />
          </div>
          <div className="job-details">
            <h3>HR-менеджер</h3>
            <p>Мы ищем HR-менеджера для управления процессами найма, развития и удержания персонала в компании. Требования: опыт работы в подборе, коммуникативные навыки.</p>
            <button className="cta-button">Подать заявку</button>
          </div>
        </div>

        {/* Вакансия 3 */}
        <div className="job-card">
          <div className="job-icon">
            <FaChartLine size={50} />
          </div>
          <div className="job-details">
            <h3>Аналитик данных</h3>
            <p>Мы ищем аналитика данных для обработки больших объемов информации и разработки стратегий роста. Требования: опыт работы с SQL и анализом данных.</p>
            <button className="cta-button">Подать заявку</button>
          </div>
        </div>

        {/* Вакансия 4 */}
        <div className="job-card">
          <div className="job-icon">
            <FaBullhorn size={50} />
          </div>
          <div className="job-details">
            <h3>Менеджер по продажам</h3>
            <p>Ищем талантливого менеджера по продажам для работы с клиентами и продвижения наших услуг. Требования: опыт продаж, ориентация на результат.</p>
            <button className="cta-button">Подать заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
