import React from 'react';
import { FaFutbol, FaBasketballBall, FaMedal, FaTrophy, FaRunning, FaHeartbeat, FaFlagCheckered, FaUserAlt, FaChalkboardTeacher, FaHome } from 'react-icons/fa';
import './Sports.css'; // Подключение стилей

const Sports = () => {
    return (
        <section id="sports" className="App-section">
          <h2 className="sports-title">Спортивные достижения и инициативы</h2>
          <p className="sports-description">Ассоциация "Дордой" активно поддерживает развитие спорта в регионе, реализуя разнообразные инициативы и достигая значительных результатов на спортивной арене.</p>
          
          <h3 className="sports-heading">Ключевые направления</h3>
          <ul className="sports-list">
            <li className="sports-item"><FaFutbol className="sports-icon" /> <strong>Футбольные программы:</strong> Ассоциация "Дордой" известна своим вкладом в развитие футбола. Включает спонсорство футбольного клуба "Дордой", который является одним из самых успешных в стране.</li>
            <li className="sports-item"><FaMedal className="sports-icon" /> <strong>Развитие детского спорта:</strong> Поддержка детско-юношеских спортивных школ и программ, направленных на воспитание нового поколения спортсменов.</li>
            <li className="sports-item"><FaTrophy className="sports-icon" /> <strong>Проведение турниров:</strong> Организация региональных и международных спортивных мероприятий, включая футбольные чемпионаты, баскетбольные турниры и другие соревнования.</li>
            <li className="sports-item"><FaBasketballBall className="sports-icon" /> <strong>Поддержка женского спорта:</strong> Ассоциация активно участвует в продвижении женских спортивных инициатив, создавая равные возможности для девушек в спорте.</li>
            <li className="sports-item"><FaRunning className="sports-icon" /> <strong>Инфраструктура:</strong> Финансирование и развитие современных спортивных объектов, таких как стадионы, тренировочные базы и спортивные залы.</li>
          </ul>

          <h3 className="sports-heading">Информация о клубе</h3>
          <div className="club-info">
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/%D0%A4%D0%9A_%D0%94%D0%BE%D1%80%D0%B4%D0%BE%D0%B9.png/300px-%D0%A4%D0%9A_%D0%94%D0%BE%D1%80%D0%B4%D0%BE%D0%B9.png" alt="Логотип клуба Дордой" className="club-logo" />
            </div>
            <div className="club-details">
              <p><FaHome className="club-icon" /> <strong>Основан:</strong> 1996 год, Бишкек, Кыргызстан</p>
              <p><FaUserAlt className="club-icon" /> <strong>Основатель:</strong> Ассоциация "Дордой"</p>
              <p><FaChalkboardTeacher className="club-icon" /> <strong>Главный тренер:</strong> Иван Иванов</p>
              <p><FaFlagCheckered className="club-icon" /> <strong>Местоположение:</strong> Стадион "Дордой", Бишкек</p>
            </div>
          </div>

          <h3 className="sports-heading">Достижения клуба</h3>
          <div className="achievements-list">
            <div className="achievement-item">
              <FaTrophy className="achievement-icon" />
              <div className="achievement-text">
                <strong>Чемпионат Кыргызстана</strong>
                <ul>
                  <li>Чемпион (13, рекорд): 2004, 2005, 2006, 2007, 2008, 2009, 2011, 2012, 2014, 2018, 2019, 2020, 2021</li>
                  <li>Вице-чемпион (4): 2010, 2013, 2015, 2016</li>
                  <li>Третье место (5): 2001, 2002, 2003, 2017, 2023</li>
                </ul>
              </div>
            </div>

            <div className="achievement-item">
              <FaMedal className="achievement-icon" />
              <div className="achievement-text">
                <strong>Кубок Кыргызстана</strong>
                <ul>
                  <li>Победитель (10, рекорд): 2004, 2005, 2006, 2008, 2010, 2012, 2014, 2016, 2017, 2018</li>
                </ul>
              </div>
            </div>

            <div className="achievement-item">
              <FaFlagCheckered className="achievement-icon" />
              <div className="achievement-text">
                <strong>Суперкубок Кыргызстана</strong>
                <ul>
                  <li>Победитель (6, рекорд): 2012, 2013, 2014, 2019, 2021, 2022</li>
                  <li>Финалист (3): 2011, 2017, 2018</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="sports-heading">Социальные инициативы в спорте</h3>
          <p>Ассоциация активно участвует в социальных спортивных проектах:</p>
          <ul className="sports-list">
            <li><FaRunning className="sports-icon" /> <strong>Массовые спортивные мероприятия:</strong> Проведение марафонов, велогонок и других мероприятий для привлечения населения к спорту.</li>
            <li><FaHeartbeat className="sports-icon" /> <strong>Программы инклюзии:</strong> Поддержка спорта для людей с ограниченными возможностями, создание специальных условий и проведение адаптивных соревнований.</li>
            <li><FaFutbol className="sports-icon" /> <strong>Популяризация спорта:</strong> Проведение образовательных кампаний о пользе активного образа жизни и организации спортивных мероприятий в школах.</li>
          </ul>

          <h3 className="sports-heading">Радостные моменты и команда</h3>
          <p>Мы гордимся нашими спортсменами, которые вдохновляют окружающих своей игрой и достижениями. Тренеры, игроки и болельщики являются неотъемлемой частью нашей истории успеха.</p>

          <h3 className="sports-heading">Галерея успехов</h3>
          <p>На протяжении многих лет Ассоциация "Дордой" добилась множества спортивных успехов. Взгляните на некоторые из ярких моментов:</p>
          <div className="sports-gallery">
            <img src="https://www.bing.com/th?id=OIP.7HQ5wdFjjuiOphgW_ShD1QHaDz&w=314&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Футбольная команда Дордой" className="sports-image" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bekzhan_Sagynbaev_scored_to_FC_%22Khujand%22_-_AFC_Cup_2019.jpg/330px-Bekzhan_Sagynbaev_scored_to_FC_%22Khujand%22_-_AFC_Cup_2019.jpg" alt="Спортивное мероприятие" className="sports-image" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%22Dordoi%22_B_team_-_June_5%2C_2019.jpg/330px-%22Dordoi%22_B_team_-_June_5%2C_2019.jpg" alt="Тренировка молодёжи" className="sports-image" />
            <img src="https://www.fc-dordoi.kg/images/stories/3862_vposlednem_1.jpg" alt="Радость игроков" className="sports-image" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Farhat_Musabekov_vs_Istiklol.jpg/330px-Farhat_Musabekov_vs_Istiklol.jpg" alt="Поддержка болельщиков" className="sports-image" />
          </div>
          
          <p>Ассоциация "Дордой" стремится сделать спорт доступным для всех, вдохновляя людей на достижение новых высот, создавая яркие моменты радости и укрепляя спортивные традиции региона.</p>
        </section>
    );
}

export default Sports;
