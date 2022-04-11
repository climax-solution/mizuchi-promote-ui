import Brand from './components/brand';
import SliderParallax from './components/parallax';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import About from './components/about';

function App() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="App">
      <SliderParallax/>
      <Brand/>
      <About/>
    </div>
  );
}

export default App;
