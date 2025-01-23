import React, { useState } from 'react';
import './Register.css';
import { FaUserAlt, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import { FaRegRegistered } from "react-icons/fa6";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    localStorage.setItem('username', formData.username);
    console.log('Регистрация успешна', formData);
    alert('Регистрация успешна!');
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <div><FaRegRegistered /></div>
        <h2>Регистрация</h2>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          <FaUserAlt className="form-icon" />
          Имя пользователя
          <input
            type="text"
            name="username"
            placeholder="Введите имя пользователя"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FaEnvelope className="form-icon" />
          Email
          <input
            type="email"
            name="email"
            placeholder="Введите ваш email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FaLock className="form-icon" />
          Пароль
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FaKey className="form-icon" />
          Подтверждение пароля
          <input
            type="password"
            name="confirmPassword"
            placeholder="Повторите пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="register-button">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
