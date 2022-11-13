import './App.css';
import './style.css'
// import NavBar from './components/NavBar';
// import Header from './components/Header';
import Footer from './components/Footer';
import Header from './pages/Header';
import Main from './pages/Main';

function App() {
  return (
    <>
    <div id="theSun">
        <a href="#intro">
          <img
            id="homeLink"
            src="https://live.staticflickr.com/65535/52482586311_3bb422275a_o.png"
            alt="realistic-sunburst"
          />
        </a>
      </div>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
