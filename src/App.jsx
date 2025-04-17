import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import About from "./components/About";
import Gallary from "./components/Gallary";
import Home from "./components/Home";
import { Ripple } from "./components/magicui/ripple";
import Project from "./components/Projects";
import Skills from "./components/Features";
import Separator from "./components/ui/Separator";
import SpaceAnimation from "./components/SpaceAnimation";
import { TechStack } from "./components/TeckStack";

function App() {
  return (
    <>
      <SplashCursor />
      <main className="min-h-screen">
        {/* Your content components */}
        <SpaceAnimation />
        <Home />
        {/* <Ripple /> */}

        <About />
        {/* <Separator /> */}
        <Skills />
        {/* <Gallary /> */}
        <Project />

        <TechStack />
      </main>
    </>
  );
}

export default App;