import { lazy, Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AskAssistantWidget from "./components/askAsisstant";

const Achievements = lazy(() => import("./components/Achievements"));

const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <AskAssistantWidget />

      <Suspense
        fallback={
          <div className="text-center text-lg text-gray-400 py-10">
            Loading projects...
          </div>
        }
      >
        <Achievements />
      </Suspense>

      <About />

      <Suspense
        fallback={
          <div className="text-center text-lg text-gray-400 py-10">
            Loading projects...
          </div>
        }
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center text-lg text-gray-400 py-10">
            Loading contact...
          </div>
        }
      >
        <Contact />
      </Suspense>
    </div>
  );
}
export default App;
