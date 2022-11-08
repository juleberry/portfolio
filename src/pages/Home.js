import "./css/Home.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home(props) {
  return (
    <>
      <NavBar />
      <div id="intro">
        <h1>Jule Berry</h1>
        <h3>Software Engineer</h3>
        <p>
          <a href="#actionNav">Explore</a>
        </p>
      </div>
      <Header />
    </>
  );
}
