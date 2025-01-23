import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
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
        // Registration logic
        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        console.log('Регистрация успешна', formData);
    };

    return (
        <section id="contacts" className="App-section">
            <h2>Контакты</h2>
            <div className="contacts-info">
                <p><strong>Адрес:</strong> ул. Дордойская, 123, Бишкек, Кыргызстан</p>
                <p><strong>Телефон:</strong> +996 555 123 456</p>
                <p><strong>Email:</strong> info@dordoi.kg</p>
                <p><strong>Часы работы:</strong> Пн-Пт с 9:00 до 18:00</p>
            </div>
            <div className="map-container">
                <h3>Найдите нас на карте:</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.935474490238!2d74.59191381535646!3d42.87495700957142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82d6e9f5c1b%3A0x7e64d94753bb6aef!2sDordoi%20Association!5e0!3m2!1sen!2skg!4v1618234567890!5m2!1sen!2skg"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Dordoi Association Location"
                ></iframe>
            </div>

            <div className="social-links">
                <h3>Мы в социальных сетях:</h3>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </section>
    );
};

export default Contacts;


