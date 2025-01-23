import React from 'react';
import { FaBuilding, FaUsers, FaUniversity, FaChild, FaIndustry, FaMedal, FaHome, FaTrophy, FaAward } from 'react-icons/fa';
import './News.css'; // Подключение стилей

const News = () => {
    return (
        <section id="news" className="App-section">
            <h2>Последние новости</h2>
            <article className="news-item">
                <FaBuilding className="news-icon" />
                <div className="news-text">
                    <h3>Открытие нового образовательного центра</h3>
                    <p className="news-description">В декабре 2025 года мы открыли новый образовательный центр для обучения предпринимателей в Бишкеке.</p>
                </div>
            </article>
            <article className="news-item">
                <FaUsers className="news-icon" />
                <div className="news-text">
                    <h3>Международная конференция 2025</h3>
                    <p className="news-description">В июне 2025 года Ассоциация Дордой провела конференцию, посвященную развитию бизнеса и предпринимательства в Центральной Азии.</p>
                </div>
            </article>
            <article className="news-item">
                <FaUniversity className="news-icon" />
                <div className="news-text">
                    <h3>Открытие Международного колледжа IT и бизнеса</h3>
                    <p className="news-description">1 сентября 2022 года состоялось открытие нового учебного заведения, построенного специально для этого проекта.</p>
                </div>
            </article>
            <article className="news-item">
                <FaChild className="news-icon" />
                <div className="news-text">
                    <h3>Открытие нового детского сада в селе Максат</h3>
                    <p className="news-description">28 августа 2022 года Ассоциация «Дордой» ввела в эксплуатацию новый детский сад, стоимостью 31 миллион сомов.</p>
                </div>
            </article>
            <article className="news-item">
                <FaIndustry className="news-icon" />
                <div className="news-text">
                    <h3>Запуск новых производственных линий в Ат-Башы</h3>
                    <p className="news-description">21 июля 2022 года компания «Дордой Дары» начала работу новых производственных линий, обеспечив 1000 рабочих мест.</p>
                </div>
            </article>
            <article className="news-item">
                <FaMedal className="news-icon" />
                <div className="news-text">
                    <h3>Вручение медали Чынгыза Айтматова</h3>
                    <p className="news-description">10 июня 2022 года Почетному Президенту Ассоциации «Дордой» Аскару Салымбекову была вручена медаль Чынгыза Айтматова.</p>
                </div>
            </article>
            <article className="news-item">
                <FaHome className="news-icon" />
                <div className="news-text">
                    <h3>Передача мобильных домов в Баткенскую область</h3>
                    <p className="news-description">13 октября 2022 года Ассоциация «Дордой» передала жителям Баткенской области 10 мобильных домов общей площадью 30 квадратных метров каждый.</p>
                </div>
            </article>
            <article className="news-item">
                <FaTrophy className="news-icon" />
                <div className="news-text">
                    <h3>Победа на чемпионате мира</h3>
                    <p className="news-description">12 сентября 2022 года член спортивного клуба Ассоциации «Дордой» досрочно победил Золтана Леваи из Венгрии со счетом 8:0.</p>
                </div>
            </article>
            <article className="news-item">
                <FaAward className="news-icon" />
                <div className="news-text">
                    <h3>Подписание контракта с ОАЭ</h3>
                    <p className="news-description">14 декабря 2021 года «Дордой Балыкчы» подписал контракт на поставку мяса с крупными компаниями ОАЭ.</p>
                </div>
            </article>
        </section>
    );
};

export default News;


