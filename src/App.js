import './App.css';

import Tempapp from './components/Tempapp';
// import Particles from "react-tsparticles";
import Particles from './components/Particle';
import { loadFull } from "tsparticles";
function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <>
    <div>
      {/* <h1>hello</h1> */}
      <Particles/>
      <Tempapp/>
      <h1>gr better than gb </h1>
      
    </div>
    </>
  );
}

export default App;
