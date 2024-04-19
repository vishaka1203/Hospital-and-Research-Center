import './App.css';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Introduction/Intro';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Slider/Carousel';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Carousel />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
