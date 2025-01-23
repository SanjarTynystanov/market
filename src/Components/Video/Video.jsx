import React from 'react'

const Video = () => {
  return (
    <section id="video" className="App-section">
    <h2>Видео о Дордой</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="Видео о Дордой"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </section>
  )
}

export default Video