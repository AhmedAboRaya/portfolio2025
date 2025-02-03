import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import TextPressure from "./blocks/TextAnimations/TextPressure/TextPressure";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <SplashCursor>
      <div className="relative w-full min-h-screen">
        <Home />
      </div>
      <About />
      <div className="h-screen text-white">w</div>
    </SplashCursor>
  );
}

export default App;
