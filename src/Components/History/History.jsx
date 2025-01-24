import React, { useState } from 'react';
import './History.css';

const History = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="history" className="App-section">
      <h2 className="history-title">История Ассоциации</h2>
      
      <div className="history-item">
        <h3 className="history-year">2010</h3>
        <p>Ассоциация Дордой была основана с целью поддерживать предпринимателей, способствовать развитию торговли и предоставлять пространство для обмена опытом.</p>
    
      </div>

      <div className="history-item">
        <h3 className="history-year">2012</h3>
        <p>В 2012 году Ассоциация начала активно сотрудничать с местными и международными организациями для расширения бизнеса и создания новых рабочих мест.</p>
    
      </div>

      <div className="history-item">
        <h3 className="history-year">2015</h3>
        <p>Сформирована первая программа поддержки молодых предпринимателей и запуск первых курсов по развитию бизнес-стратегий. Это позволило улучшить старт бизнеса для молодых людей.</p>
       
      </div>

      <div className="history-item">
        <h3 className="history-year">2020</h3>
        <p>Ассоциация расширяет свои масштабы и начинает сотрудничество с международными партнерами для улучшения экспортных возможностей, а также вводит новые онлайн-программы для предпринимателей.</p>
      </div>

      <div className="history-item">
        <h3 className="history-year">2023</h3>
        <p>В 2023 году Ассоциация открывает новые направления в IT-образовании и стартапах, проводя международные бизнес-выставки и привлекая инвесторов для поддержки инновационных проектов.</p>
      </div>

      {/* New Section for Future Vision */}
      <div className="history-item">
        <h3 className="history-year">Будущее</h3>
        <p>В будущем Ассоциация планирует продолжить поддержку предпринимателей и расширение на международные рынки. Становление экологически устойчивых и социальных бизнес-инициатив является приоритетом.</p>
      
      </div>

      {/* Interactive Section for More Details */}
      <div className="interactive-section">
        <button className="more-button" onClick={toggleMore}>
          {showMore ? 'Скрыть подробности' : 'Показать подробности'}
        </button>
        {showMore && (
          <div className="more-details">
            <p>Ассоциация продолжает активно развивать новые направления в области технологий и образования. В 2025 году планируется запуск новых обучающих программ по искусственному интеллекту и устойчивому бизнесу.</p>
            <p>Особое внимание будет уделено стартапам, которые используют зеленые технологии для производства.</p>
          </div>
        )}
      </div>

      {/* Video Section */}
      <div className="history-video">
        <h3>Видеопрезентация</h3>
        <iframe className="history-video-frame" width="560" height="315" src="https://www.youtube.com/embed/830D1ZJ0NKs?si=_MzzGGYhd_ybjLgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    
    </section>
  );
};

export default History;

