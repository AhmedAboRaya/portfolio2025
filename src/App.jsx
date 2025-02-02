import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import Home from "./components/Home";

function App() {
  return (
    <SplashCursor>
      <div className="relative w-full min-h-screen">
        <Home />
      </div>

      <div className="h-screen text-white">ds</div>
    </SplashCursor>
  );
}

export default App;
