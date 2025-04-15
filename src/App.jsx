import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import About from "./components/About";
import Gallary from "./components/Gallary";
import Home from "./components/Home";
import { Ripple } from "./components/magicui/ripple";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Separator from "./components/ui/Separator";

function App() {
  return (
    <>
      <SplashCursor />
      <main className="min-h-screen">
        {/* Your content components */}
        <Home />
        <Ripple />

        <About />
        {/* <Separator /> */}
        <Skills />
        {/* <Gallary /> */}
        <Project />
      </main>
    </>
  );
}

export default App;