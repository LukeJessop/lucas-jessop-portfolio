import Navbar from "./components/Navbar/Navbar";
import Halftone from "./assets/halftone.png";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Navbar />
        <About />
      </div>
      <Footer />
      <div className="halftone-wrapper">
        <div className=" halftone-container">
          <img alt="halftone" className="first-halftone" src={Halftone} />
          <img alt="halftone" className="second-halftone" src={Halftone} />
        </div>
      </div>
    </div>
  );
}

export default App;
