import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Иконка для удаления
import './Testimonials.css';

const Testimonials = () => {
  const [username, setUsername] = useState('');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);

  // Загрузка отзывов из localStorage при монтировании компонента
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [
      { username: 'Анна', text: 'Очень хорошая компания! Рекомендую всем.' },
      { username: 'Максим', text: 'Отличные сервисы, все понравилось!' },
      { username: 'Ирина', text: 'Очень полезный и удобный продукт. Спасибо!' },
      { username: 'Петр', text: 'Рекомендую, все отлично!' },
      { username: 'Елена', text: 'Превосходный опыт! Буду использовать снова.' },
      { username: 'Дмитрий', text: 'Обслуживание на высшем уровне, всем доволен.' }
    ];
    
    if (savedUsername) {
      setUsername(savedUsername);
    }
    setReviews(savedReviews);
  }, []);

  // Сохранение имени пользователя
  const handleLogin = () => {
    if (username) {
      localStorage.setItem('username', username);
      alert(`Добро пожаловать, ${username}!`);
    }
  };

  // Добавление нового отзыва
  const handleAddReview = () => {
    if (newReview.trim()) {
      const newReviewObj = { username, text: newReview.trim() };
      const updatedReviews = [...reviews, newReviewObj];
      setReviews(updatedReviews);
      setNewReview('');
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } else {
      alert('Пожалуйста, напишите отзыв!');
    }
  };

  // Удаление отзыва
  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  if (!username) {
    return (
      <div className="reviews-container">
        <h2>Доступ запрещен</h2>
        <p>Пожалуйста, введите ваше имя для регистрации:</p>
        <input
          type="text"
          placeholder="Введите ваше имя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Зарегистрироваться</button>
      </div>
    );
  }

  return (
    <div className="reviews-container">
      <h2>Отзывы пользователя: {username}</h2>

      {/* Раздел для добавления нового отзыва */}
      <div className="review-section">
        <h3>Оставьте свой отзыв:</h3>
        <textarea
          placeholder="Напишите ваш отзыв..."
          rows="4"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button onClick={handleAddReview}>Отправить</button>
      </div>

      {/* Раздел с отзывами пользователей */}
      <div className="reviews-list">
        <h3>Отзывы:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <strong>{review.username}:</strong> {review.text}
              {/* Кнопка для удаления отзыва */}
              <button
                className="delete-review-btn"
                onClick={() => handleDeleteReview(index)}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
