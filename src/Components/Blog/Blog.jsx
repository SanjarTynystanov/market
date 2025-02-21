import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [expandedArticleIndex, setExpandedArticleIndex] = useState(null);

  const articles = [
    {
      title: 'Как начать бизнес в Центральной Азии',
      excerpt: 'Ключевые шаги для старта бизнеса, важных законах и возможностях для предпринимателей.',
      content: 'Центральная Азия предоставляет множество возможностей для старта бизнеса, включая стратегическое положение, разнообразие ресурсов и поддержку для новых предпринимателей. Важно изучить законы, понять рынок и наладить связи...',
      date: '23 января 2025',
    },
    {
      title: 'Почему Кыргызстан привлекателен для стартапов?',
      excerpt: 'Узнайте, почему молодые предприниматели все чаще выбирают Кыргызстан.',
      content: 'Кыргызстан обладает благоприятным инвестиционным климатом, низким уровнем налогообложения и государственной поддержкой для стартапов. В последние годы количество молодых предпринимателей в стране стремительно растет...',
      date: '10 января 2025',
    },
    {
      title: 'Как привлечь инвесторов?',
      excerpt: 'Ключевые советы о том, как подготовить свою идею для инвесторов.',
      content: 'Подготовка презентации (Pitch Deck), проработка бизнес-плана, изучение рынка и наличие сильной команды — это основные шаги для привлечения инвесторов. Важно понять, что инвесторы ищут, и быть готовым к жестким вопросам...',
      date: '5 января 2025',
    },
    {
      title: 'Лучшие ниши для бизнеса в Кыргызстане',
      excerpt: 'Анализ самых перспективных направлений для бизнеса в стране.',
      content: 'В 2025 году наибольший интерес вызывают сферы IT, туризма и сельского хозяйства. Кыргызстан представляет собой прекрасную площадку для стартапов в этих областях благодаря своей природной красоте, государственным субсидиям...',
      date: '15 декабря 2024',
    },
    {
      title: 'Секреты успешного маркетинга',
      excerpt: '5 главных стратегий, которые помогут привлечь клиентов.',
      content: 'Чтобы ваш бизнес стал популярным, сосредоточьтесь на социальных сетях, SEO-оптимизации, создании уникального контента, персонализированных предложениях и маркетинговых партнерствах...',
      date: '1 декабря 2024',
    },
    {
      title: 'Финансовая грамотность для предпринимателей',
      excerpt: 'Как правильно управлять финансами на старте бизнеса.',
      content: 'Знать основы финансового учета крайне важно для успешного ведения бизнеса. Умение составлять баланс, контролировать расходы и грамотно управлять денежными потоками — залог успеха...',
      date: '20 ноября 2024',
    },
    {
      title: 'Значение малого бизнеса для экономики Кыргызстана',
      excerpt: 'Почему малый бизнес играет ключевую роль в развитии страны.',
      content: 'В Кыргызстане малый бизнес обеспечивает рабочие места, способствует увеличению налоговых поступлений и стимулирует экономику. В условиях кризиса малые предприятия часто становятся основой для восстановления...',
      date: '5 ноября 2024',
    },
    {
      title: 'Туристический бизнес в Центральной Азии',
      excerpt: 'Потенциал туризма как одной из самых перспективных сфер.',
      content: 'В Центральной Азии туризм активно развивается благодаря уникальному культурному наследию, природным ресурсам и усиливающимся инвестициям в инфраструктуру...',
      date: '25 октября 2024',
    },
    {
      title: 'Топ ошибок начинающих предпринимателей',
      excerpt: 'Чего следует избегать, начиная свое дело.',
      content: 'Многие стартапы терпят неудачи из-за неправильного подхода к выбору ниши, недостаточной подготовки или неверных расчетов. Важно избегать распространенных ошибок на старте бизнеса...',
      date: '10 октября 2024',
    },
    {
      title: 'Как создать команду мечты?',
      excerpt: 'Найм и удержание лучших сотрудников для вашего бизнеса.',
      content: 'Правильный подход к найму персонала включает привлечение квалифицированных специалистов, создание комфортной рабочей атмосферы и систему мотивации, которая будет удерживать их...',
      date: '1 октября 2024',
    },
    {
      title: 'Эффективный тайм-менеджмент для предпринимателей',
      excerpt: 'Как управлять своим временем, чтобы достичь успеха.',
      content: 'Время — самый ценный ресурс предпринимателя. Умение эффективно планировать задачи, расставлять приоритеты и работать с дедлайнами помогает достичь результатов быстрее...',
      date: '15 сентября 2024',
    },
    {
      title: 'Роль IT в развитии малого бизнеса',
      excerpt: 'Почему современные технологии являются ключом к успеху.',
      content: 'Автоматизация процессов, использование CRM-систем и других технологий помогает предпринимателям оптимизировать бизнес-процессы, сокращать затраты и увеличивать прибыль...',
      date: '1 сентября 2024',
    },
    // Дополнительные статьи
    {
      title: 'Глобальные тренды в бизнесе 2025',
      excerpt: 'Какие тренды будут определять бизнес в следующем году.',
      content: 'Глобальные тренды включают автоматизацию, искусственный интеллект, удаленную работу и устойчивость к экологическим проблемам. Все эти факторы будут влиять на стратегии развития...',
      date: '15 января 2025',
    },
    {
      title: 'Как выбрать нишу для стартапа?',
      excerpt: 'Основные критерии выбора подходящей ниши.',
      content: 'При выборе ниши важно учитывать спрос, конкуренцию, стоимость входа и возможные риски. Нужно понять, как ваш продукт решает проблему потребителей...',
      date: '20 января 2025',
    },
  ];

  const toggleArticle = (index) => {
    if (expandedArticleIndex === index) {
      setExpandedArticleIndex(null);  // Скрыть статью, если она уже развернута
    } else {
      setExpandedArticleIndex(index); // Развернуть статью
    }
  };

  return (
    <section id="blog" className="blog-section">
      <h2>Блог</h2>
      <div className="blog-container">
        {articles.map((article, index) => (
          <article key={index} className="blog-article">
            <h3>{article.title}</h3>
            <p className="blog-date">{article.date}</p>
            <p>{article.excerpt}</p>
            {expandedArticleIndex === index && <p>{article.content}</p>}
            <div className="button-container">
              <button
                className="read-more"
                onClick={() => toggleArticle(index)}
              >
                {expandedArticleIndex === index ? 'Скрыть' : 'Читать далее'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
