import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Halftone from './assets/halftone.png'

function App() {
  return (
    <div className="app">
      <div className='main-content'>
        <Navbar/>
        <Hero/>
      </div>
      <div className='halftone-wrapper'>
        <div className=' halftone-container'>
          <img alt='halftone' className='first-halftone' src={Halftone}/>
          <img alt='halftone' className='second-halftone' src={Halftone}/>
        </div>
      </div>
    </div>
  );
}

export default App;
