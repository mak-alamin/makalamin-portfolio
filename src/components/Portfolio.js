const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>

      <div className="row">
        <div className="portfolio-item col-4">
          <a
            href="https://mak-alamin.github.io/Javascript-Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/simple-javascript-calculator.png"
              alt="portfolio-1"
            />
          </a>
          <h2>Simple Javascript Calculator</h2>
          <p>This is simple calculator created with raw javascript coding.</p>
          <br />
          <a
            href="https://github.com/mak-alamin/Javascript-Calculator"
            target="_blank"
            rel="noreferrer"
          >
            Github Code
          </a>{" "}
          <br /> <br />
          <a
            href="https://mak-alamin.github.io/Javascript-Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            Live View
          </a>
        </div>

        <div className="portfolio-item col-4">
          <a
            href="https://mak-alamin.github.io/mission-2022"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/mission-2022.png" alt="portfolio-2" />
          </a>
          <h2>Mission 2022</h2>
          <p>
            This is an assignment project that I created using pure HTML5 and
            CSS3.
          </p>
          <br />
          <a
            href="https://github.com/mak-alamin/mission-2022"
            target="_blank"
            rel="noreferrer"
          >
            Github Code
          </a>{" "}
          <br /> <br />
          <a
            href="https://mak-alamin.github.io/mission-2022"
            target="_blank"
            rel="noreferrer"
          >
            Live View
          </a>
        </div>

        <div className="portfolio-item col-4">
          <a
            href="https://www.thetravelmovement.com.au"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/The-Travel-Movement.png"
              alt="The Travel Movement"
            />
          </a>
          <h2>The Travel Movement</h2>
          <p>
            This is a client website from Australlia. I've created their Landing
            pages using PHP and WordPress.
          </p>
          <br />
          <a
            href="https://www.thetravelmovement.com.au"
            target="_blank"
            rel="noreferrer"
          >
            Live View
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
