import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Projects";
import Features from "./components/Features";
import SpaceAnimation from "./components/SpaceAnimation";
import { TechStack } from "./components/TeckStack";
import PreLoader from "./components/ui/pre-loader";
import SkillsPage from "./components/Skills";

function App() {
  return (
    <>
      <SplashCursor />
      <SpaceAnimation />
      <Home />
      <PreLoader />
      <About />
      <Features />
      <Project />
      <SkillsPage />

      {/* <TechStack /> */}
    </>
  );
}

export default App;
