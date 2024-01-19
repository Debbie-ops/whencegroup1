import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Imagescroll from './Components/Imagescroll';
import Carousel from './Components/HeaderCarousel';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import About from './Components/About';
import Faq from './Components/Faq';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Moreservices from './Components/Moreservices';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20">
        <Imagescroll />
      </div>
  <Carousel/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage/:id" element={<Homepage />} />
  </Routes>
      <Services />
      <About />
      <Faq />
      <Testimonials />
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
