import "./css/About.css";

export default function About(props) {
  return (
    <>
      <div className="linkContainers" id="aboutSection">
        <a href="#About">
          <img
            id="aboutLink"
            src="https://live.staticflickr.com/65535/52483130730_d4a0cc2283_o.png"
            alt="constellation-clipart-capricornus-for-capricorn-zodiac"
          />
        </a>
        <h2>About</h2>
        <p>
          Hello, my name is Jule Berry. I am a Frontend Software Engineer
          located in the Washington, DC, area. I have a background in retail and
          customer service. I am currently a licensed nail technician in the
          area but I have always had a passion for client-side design and
          development.
          <br />I am available to help transform your outdated website into a
          more modern, responsive site that will in turn drive more business to
          your website or storefront. I would love to work with small business
          owners and startups. I am also always open to new connections and
          networking opportunities so please feel free to connect via{" "}
          <a href="https://www.linkedin.com/in/juleberry">LinkedIn</a> and my
          other social network accounts.
        </p>
      </div>
    </>
  );
}
