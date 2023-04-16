import LandingPage from "./LandingPage";
import CalculatorPage from "./CalculatorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const numLights = Math.floor(Math.random() * 6) + 25;
  const lights = [];

  for (let i = 0; i < numLights; i++) {
    const size = Math.floor(Math.random() * 10) + 5;
    const duration = Math.floor(Math.random() * 10) + 5;
    const left = Math.floor(Math.random() * 100) + 1;
    const top = Math.floor(Math.random() * 100) + 1;
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      left: `${left}%`,
      top: `${top}%`,
    };
    lights.push(<div className="light" style={style} key={i} />);
  }
  

  return (
    <div className="bg-astronaut-gradient">
      {lights}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;
