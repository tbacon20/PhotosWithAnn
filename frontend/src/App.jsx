import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/PortfolioPage";
import Session from "../components/Portfolio/Session";
import Booking from "../components/Booking/BookingPage";
import Faq from "../components/FAQ/FAQ";
import Nav from "../components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Session />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
