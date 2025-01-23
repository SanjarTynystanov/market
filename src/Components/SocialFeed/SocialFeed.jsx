import React from 'react'

const SocialFeed = () => {
  return (
    <section id="social-feed" className="App-section">
      <h2>Лента социальных сетей</h2>
      <div className="social-widget">
        <iframe src="https://www.instagram.com/p/POST_ID/embed" width="400" height="480" allow="encrypted-media"></iframe>
      </div>
    </section>
  )
}

export default SocialFeed