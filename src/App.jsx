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
import Particles from "./blocks/Backgrounds/Particles/Particles";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <SplashCursor />
      {/* <SpaceAnimation /> */}
      <Particles />
      <Home />
      <PreLoader />
      <About />
      <Features />
      <Project />
      <SkillsPage />
      <Contact />
      {/* <TechStack /> */}
    </>
  );
}

export default App;
