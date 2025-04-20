import { useState, useEffect } from "react";
import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Projects";
import Features from "./components/Features";
import PreLoader from "./components/ui/pre-loader";
import SkillsPage from "./components/Skills";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsLoading(false), 1000); // Matches curtain animation duration
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PreLoader isExiting={isExiting} />}
      
      <SplashCursor />
      
      
      {!isLoading && (
        <>
        <Particles  />
          <Home />
          <About />
          <Features />
          <Project />
          <SkillsPage />
          <Contact />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default App;