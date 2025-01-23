// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Подключаем стили
import { FaRocket, FaShoppingCart, FaLeaf, FaUniversity, FaIndustry, FaCloud, FaTools, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="App-section">
      <h2 className="projects-title">Наши проекты</h2>
      <p className="projects-description">Мы гордимся нашими проектами, которые помогают развивать бизнес, технологии и общество:</p>
      <div className="projects-container">
        <div className="project-item" data-aos="fade-up">
          <FaRocket className="project-icon" />
          <h3>«Старт бизнеса»</h3>
          <p>
            Программа, разработанная для поддержки начинающих предпринимателей, включающая
            обучение, консультации и доступ к ресурсам для старта.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="100">
          <FaShoppingCart className="project-icon" />
          <h3>«Цифровой рынок»</h3>
          <p>
            Инициатива по развитию электронной коммерции, направленная на создание
            онлайн-платформ и поддержку малого бизнеса в интернете.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="200">
          <FaLeaf className="project-icon" />
          <h3>«Зеленая экономика»</h3>
          <p>
            Проекты, ориентированные на устойчивое развитие и экологическую
            ответственность в бизнесе и обществе.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="300">
          <FaUniversity className="project-icon" />
          <h3>«Образование будущего»</h3>
          <p>
            Разработка образовательных технологий и программ для школ, вузов и
            корпоративного обучения.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="400">
          <FaIndustry className="project-icon" />
          <h3>«Индустрия 4.0»</h3>
          <p>
            Программы внедрения цифровых технологий и автоматизации в производственные
            процессы для повышения их эффективности.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="500">
          <FaCloud className="project-icon" />
          <h3>«Цифровая трансформация»</h3>
          <p>
            Инициативы, направленные на цифровизацию компаний и переход к новым
            технологиям в управлении и производстве.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="600">
          <FaTools className="project-icon" />
          <h3>«Инновационные решения»</h3>
          <p>
            Разработка технологических продуктов и услуг, которые меняют индустрии и
            открывают новые возможности.
          </p>
        </div>

        <div className="project-item" data-aos="fade-up" data-aos-delay="700">
          <FaGlobe className="project-icon" />
          <h3>«Глобальное партнерство»</h3>
          <p>
            Проекты международного сотрудничества, направленные на обмен опытом и
            создание глобальных сетей.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
