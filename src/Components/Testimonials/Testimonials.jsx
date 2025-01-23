import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [username, setUsername] = useState('');
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    if (savedUsername) {
      setUsername(savedUsername);
    }
    setReviews(savedReviews);
  }, []);

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('username', username);
      alert(`Добро пожаловать, ${username}!`);
    }
  };

  const handleAddReview = () => {
    if (newReview.trim()) {
      const updatedReviews = [...reviews, { username, text: newReview.trim() }];
      setReviews(updatedReviews);
      setNewReview('');
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } else {
      alert('Пожалуйста, напишите отзыв!');
    }
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
      <div className="reviews-list">
        <h3>Отзывы:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.username}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
