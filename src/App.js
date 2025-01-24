
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Gallery from './Components/Gallery/Gallery';
import FAQ from './Components/FAQ/FAQ';
import Sports from './Components/Sports/Sports';
import News from './Components/News/News';
import Testimonials from './Components/Testimonials/Testimonials';
import Partners from './Components/Partners/Partners';
import Events from './Components/Events/Events';
import Contacts from './Components/Contacts/Contacts';
import History from './Components/History/History';
import Video from './Components/Video/Video';
import Members from './Components/Members/Members';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import SocialFeed from './Components/SocialFeed/SocialFeed';
import Register from './Components/Register/Register';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/history" element={<History />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/video" element={<Video />} />
            <Route path="/members" element={<Members />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/social-feed" element={<SocialFeed />} />
            <Route path="/" element={<Home />} /> 
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


