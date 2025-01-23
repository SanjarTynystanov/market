import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Заменяем useHistory на useNavigate
import { FaTrashAlt } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate(); // Заменяем useHistory на useNavigate

  // Проверка авторизации пользователя
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      alert('Пожалуйста, авторизуйтесь!');
      navigate('/register'); // Используем navigate вместо history.push
    }
  }, [navigate]);

  // Загрузка отзывов из localStorage
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  const handleAddReview = () => {
    const username = localStorage.getItem('username');
    if (!newReview.trim()) {
      alert('Пожалуйста, напишите отзыв!');
      return;
    }

    const newReviewObj = { username, text: newReview.trim() };
    const updatedReviews = [...reviews, newReviewObj];
    setReviews(updatedReviews);
    setNewReview('');
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div className="reviews-container">
      <h2>Отзывы</h2>
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
        <h3>Отзывы других пользователей:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <strong>{review.username}:</strong> {review.text}
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
