import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="App-section">
      <h2>Галерея</h2>
      <p>Посмотрите наши последние фотографии мероприятий и достижений:</p>
      <div className="gallery">
        <img src="image1.jpg" alt="Мероприятие 1" />
        <img src="image2.jpg" alt="Мероприятие 2" />
        <img src="image3.jpg" alt="Мероприятие 3" />
      </div>
    </section>
  );
}

export default Gallery;
