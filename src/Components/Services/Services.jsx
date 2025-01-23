// src/components/Services.js
import React from 'react';
import './Services.css'; // Добавляем стили
import { FaChalkboardTeacher, FaBusinessTime, FaCalendarAlt, FaHandsHelping, FaChartBar, FaLaptopCode, FaGlobe, FaUsers, FaProjectDiagram, FaLightbulb, FaHandshake, FaMobileAlt, FaShoppingCart, FaWallet, FaRegBuilding, FaHeart, FaCodeBranch, FaRegLightbulb, FaRecycle, FaDraftingCompass, FaShippingFast, FaTools, FaMedkit, FaPhoneAlt, FaUmbrella } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="App-section">
      <h2 className="services-title">Наши услуги</h2>
      <div className="services-container">
        <div className="service-item" data-aos="fade-up">
          <FaChalkboardTeacher className="service-icon" />
          <h3>Образовательные программы и тренинги</h3>
          <p>
            Мы предлагаем широкий спектр образовательных программ и тренингов для
            профессионального и личного роста. Наши эксперты помогут вам
            приобрести новые знания и навыки.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="100">
          <FaBusinessTime className="service-icon" />
          <h3>Консультации для предпринимателей</h3>
          <p>
            Получите профессиональные консультации по развитию вашего бизнеса.
            Мы предлагаем индивидуальные стратегии и рекомендации.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="200">
          <FaCalendarAlt className="service-icon" />
          <h3>Организация мероприятий и выставок</h3>
          <p>
            Мы специализируемся на организации мероприятий любого уровня: от
            небольших встреч до крупных выставок и конференций.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="300">
          <FaHandsHelping className="service-icon" />
          <h3>Поддержка в развитии бизнеса</h3>
          <p>
            Наши специалисты готовы поддержать вас на всех этапах развития
            бизнеса, начиная с идеи и заканчивая расширением рынка.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="400">
          <FaChartBar className="service-icon" />
          <h3>Информационная поддержка и аналитика</h3>
          <p>
            Мы предоставляем качественную аналитику и информационную поддержку,
            чтобы вы могли принимать обоснованные решения.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="500">
          <FaLaptopCode className="service-icon" />
          <h3>Разработка цифровых решений</h3>
          <p>
            Мы создаем веб-приложения, мобильные приложения и программное обеспечение,
            которое помогает автоматизировать процессы и повышать эффективность.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="600">
          <FaGlobe className="service-icon" />
          <h3>Международное сотрудничество</h3>
          <p>
            Мы помогаем установить международные связи, найти партнеров за границей
            и выйти на новые рынки.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="700">
          <FaUsers className="service-icon" />
          <h3>Корпоративное обучение</h3>
          <p>
            Предлагаем персонализированные программы корпоративного обучения для
            повышения квалификации ваших сотрудников.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="800">
          <FaProjectDiagram className="service-icon" />
          <h3>Управление проектами</h3>
          <p>
            Предоставляем услуги по управлению проектами, включая планирование, реализацию
            и мониторинг, чтобы гарантировать успешное выполнение ваших задач.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="900">
          <FaLightbulb className="service-icon" />
          <h3>Инновационные решения</h3>
          <p>
            Мы разрабатываем инновационные стратегии и технологические решения для
            достижения ваших бизнес-целей и повышения конкурентоспособности.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1000">
          <FaHandshake className="service-icon" />
          <h3>Партнерские программы</h3>
          <p>
            Мы предоставляем уникальные возможности для совместного роста и успеха через
            партнерские программы и взаимовыгодное сотрудничество.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1100">
          <FaMobileAlt className="service-icon" />
          <h3>Мобильные решения</h3>
          <p>
            Мы создаем мобильные приложения, которые помогают улучшить пользовательский
            опыт и увеличить вовлеченность вашей аудитории.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1200">
          <FaShoppingCart className="service-icon" />
          <h3>Электронная коммерция</h3>
          <p>
            Наша команда помогает создавать эффективные онлайн-магазины и платформы для
            электронной коммерции, чтобы увеличить ваши продажи.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1300">
          <FaWallet className="service-icon" />
          <h3>Финансовое планирование</h3>
          <p>
            Мы предлагаем услуги по финансовому планированию и управлению бюджетом для
            достижения ваших финансовых целей.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1400">
          <FaRegBuilding className="service-icon" />
          <h3>Инвестиции в недвижимость</h3>
          <p>
            Консультации и помощь в инвестициях в недвижимость для долгосрочной выгоды и
            стабильного дохода.
          </p>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="1500">
          <FaHeart className="service-icon" />
          <h3>Социальные инициативы</h3>
          <p>
            Мы поддерживаем проекты, направленные на социальное развитие и улучшение
            качества жизни в обществе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;