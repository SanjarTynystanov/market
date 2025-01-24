import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Перенаправление через 5 секунд на главную страницу
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // 5 секунд

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, [navigate]);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Страница не найдена</p>
        <p className="notfound-description">
          К сожалению, мы не можем найти страницу, которую вы ищете. Возможно, она была удалена или перемещена.
        </p>
        <p className="notfound-info">Вы будете автоматически перенаправлены на главную через 5 секунд.</p>
        <button className="cta-button" onClick={() => navigate('/')}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;

