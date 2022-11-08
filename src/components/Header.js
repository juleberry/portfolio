import "./css/Header.css";

export default function Header(props) {
  return (
    <>
      <div className="linkContainers" id="actionNav">
        <a href="#Projects">
          <img
            id="projectLink"
            src="https://live.staticflickr.com/65535/52483152765_3f7477e47e_o.png"
            alt="north-star-clipart"
          />
        </a>
      </div>

      <div className="linkContainers">
        <a href="#Home">
          <img
            id="homeLink"
            src="https://live.staticflickr.com/65535/52482586311_3bb422275a_o.png"
            alt="realistic-sunburst"
          />
        </a>
      </div>

      <div className="linkContainers">
        <a href="#About">
          <img
            id="aboutLink"
            src="https://live.staticflickr.com/65535/52483130730_d4a0cc2283_o.png"
            alt="constellation-clipart-capricornus-for-capricorn-zodiac"
          />
        </a>
      </div>

      <div className="linkContainers">
        <a href="#WorkHistory">
          <img
            id="workHisLink"
            src="https://live.staticflickr.com/65535/52487383698_18ac0e6605_o.png"
            alt="planet-earth-clipart"
          />
        </a>
      </div>

      <div className="linkContainers">
        <a href="#Contact">
          <img
            id="contactLink"
            src="https://live.staticflickr.com/65535/52483179535_8a8e4e2e0c_o.png"
            alt="clipart-spaceship"
          />
        </a>
      </div>
    </>
  );
}
