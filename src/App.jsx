import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Projects";
import Skills from "./components/Features";
import SpaceAnimation from "./components/SpaceAnimation";
import { TechStack } from "./components/TeckStack";
import PreLoader from "./components/ui/pre-loader";

function App() {
  return (
    <>
      <SplashCursor />
      <SpaceAnimation />
      <Home />
      <PreLoader />
      <About />
      <Skills />
      <Project />

      <TechStack />
    </>
  );
}

export default App;
