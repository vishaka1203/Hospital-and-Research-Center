import './App.css';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Introduction/Intro';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Slider/Carousel';
import Testimonial from './Components/Testimonial/Testimonial';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Specialities from './Pages/Specialities/Specialities';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/specialities" component={Specialities} />
        </Routes>
        <Intro />
        <Carousel />
        <Testimonial />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
