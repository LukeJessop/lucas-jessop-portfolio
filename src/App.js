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
      {/* <div className="iframe-container">
        <div>Close</div>
        <iframe className="website-demo-iframe" src="http://www.pokemonfighters.com" title="siteDemo" width={'100%'} height={'100%'}/>
      </div> */}
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
