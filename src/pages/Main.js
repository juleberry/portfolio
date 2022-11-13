import Contact from "./Contact";
import "./css/Main.css";
import About from "./About";
import Projects from "./Projects";
import WorkHistory from "./WorkHistory";

export default function Main(props) {
  return (
    <>
    <About />
    <Projects />
    <WorkHistory />
    <Contact />
    </>
  );
}
