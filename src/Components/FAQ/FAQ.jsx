import React from 'react';
import './FAQ.css'; // Подключаем стили
import { FaUserPlus, FaToolbox, FaDollarSign, FaChalkboardTeacher, FaCalendarCheck, FaTrophy, FaHandshake } from 'react-icons/fa';

const FAQ = () => {
  return (
    <section id="faq" className="App-section">
      <h2 className="faq-title">Наши часто задаваемые вопросы </h2>
      <div className="faq-container">
        <div className="faq-item" data-aos="fade-up">
          <FaUserPlus className="faq-icon" />
          <h3>Как я могу присоединиться к Ассоциации?</h3>
          <p>Вы можете подать заявку через наш сайт, заполнив форму, или связаться с нами по указанным контактам.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
          <FaToolbox className="faq-icon" />
          <h3>Какие услуги доступны участникам?</h3>
          <p>Участники получают доступ к образовательным программам, бизнес-консультациям, аналитике, мероприятиям и партнерской сети.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
          <FaDollarSign className="faq-icon" />
          <h3>Есть ли членский взнос?</h3>
          <p>Да, участники оплачивают ежегодный членский взнос. Размер взноса зависит от статуса участника и выбранного пакета услуг.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
          <FaChalkboardTeacher className="faq-icon" />
          <h3>Можно ли получить персональную консультацию?</h3>
          <p>Да, вы можете записаться на персональную консультацию с нашими экспертами, выбрав подходящее направление на сайте.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
          <FaCalendarCheck className="faq-icon" />
          <h3>Какие мероприятия вы организуете?</h3>
          <p>Мы проводим конференции, вебинары, тренинги, выставки и круглые столы для обмена опытом и расширения партнерских связей.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="500">
          <FaTrophy className="faq-icon" />
          <h3>Какие преимущества у членов Ассоциации?</h3>
          <p>Члены получают доступ к уникальным возможностям: обучение, международное сотрудничество, льготные условия на партнерские услуги и участие в проектах.</p>
        </div>

        <div className="faq-item" data-aos="fade-up" data-aos-delay="600">
          <FaHandshake className="faq-icon" />
          <h3>Могу ли я участвовать в ваших проектах как партнер?</h3>
          <p>Да, мы приветствуем сотрудничество с новыми партнерами. Для этого свяжитесь с нашим отделом партнерских программ.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

