import './App.css';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Introduction/Intro';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Slider/Carousel';
import Testimonial from './Components/Testimonial/Testimonial';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Specialities from './Pages/Specialities/Specialities';
import { Fragment } from 'react';
import OPDschedule from './Pages/OPDSchedule/OPDschedule';
import WellWomenClinic from './Pages/Services/WellWomenClinic/WellWomenClinic';
import PathoLab from './Pages/Services/PathoLab/PathoLab';
import HealthChecks from './Pages/Services/HealthChecks/HealthChecks';
import Diagnostics from './Pages/Services/Diagnostics/Diagnostics';
import Pharmacy from './Pages/Services/Pharmacy/Pharmacy';
import IntPatients from './Pages/IntPatients/IntPatients';
import AcademicsResearch from './Pages/AcademicsResearch/AcademicsResearch';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Intro />
                <Carousel />
                <Testimonial />
              </>
            }
          />
          <Route exact path="/Specialities" element={<Specialities />} />
          <Route exact path="/OPDSchedule" element={<OPDschedule />} />
          <Route
            exact
            path="/Services/WellWomenClinic"
            element={<WellWomenClinic />}
          />
          <Route
            exact
            path="/Services/WellWomenClinic/PathoLab"
            element={<PathoLab />}
          />
          <Route
            exact
            path="/Services/WellWomenClinic/PathoLab/HealthChecks"
            element={<HealthChecks />}
          />
          <Route
            exact
            path="/Services/WellWomenClinic/PathoLab/HealthChecks/Diagnostics"
            element={<Diagnostics />}
          />
          <Route
            exact
            path="/Services/WellWomenClinic/PathoLab/HealthChecks/Diagnostics/Pharmacy"
            element={<Pharmacy />}
          />
          <Route exact path="/IntPatients" element={<IntPatients />} />
          <Route
            exact
            path="/AcademicsResearch"
            element={<AcademicsResearch />}
          />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
