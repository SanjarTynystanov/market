import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Иконка для удаления
import './Testimonials.css';

const Testimonials = () => {
  const [username, setUsername] = useState('');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Флаг авторизации

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true); // Если имя найдено, пользователь авторизован
    }

    setReviews(savedReviews);
  }, []);

  // Сохранение имени пользователя в localStorage
  const handleLogin = () => {
    const savedUsername = 'Пользователь'; // Предположим, что имя пользователя фиксированное
    localStorage.setItem('username', savedUsername); // Сохраняем имя в localStorage
    setUsername(savedUsername);
    setIsAuthenticated(true); // Устанавливаем флаг авторизации
    alert(`Добро пожаловать, ${savedUsername}!`);
  };

  // Добавление нового отзыва
  const handleAddReview = () => {
    if (newReview.trim()) {
      const newReviewObj = { username, text: newReview.trim() };
      const updatedReviews = [...reviews, newReviewObj];
      setReviews(updatedReviews);
      setNewReview('');
      localStorage.setItem('reviews', JSON.stringify(updatedReviews)); // Сохраняем отзывы в localStorage
    } else {
      alert('Пожалуйста, напишите отзыв!');
    }
  };

  // Удаление отзыва
  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews)); // Обновляем отзывы в localStorage
  };

  // Если пользователь не авторизован, показываем форму для входа
  if (!isAuthenticated) {
    return (
      <div className="reviews-container">
        <h2>Доступ запрещен</h2>
        <p>Пожалуйста, авторизуйтесь для оставления отзыва:</p>
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
              {review.username === username && (
                <button
                  className="delete-review-btn"
                  onClick={() => handleDeleteReview(index)}
                >
                  <FaTrashAlt />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;


