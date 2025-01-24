import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section id="video" className="App-section">
      <h2>Видео о Дордой</h2>
      <div className="video-container">
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/2pqnF1WHrnw?si=XFQb80wzETg0-jnq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/9MEWADC49XE?si=gbCoxjB5BLYzZIOp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/6SkF66uH00Q?si=aTv24LFEqygf7pXK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/xZj1rPkw4S4?si=rrqEjYQAeF0hoe-G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
