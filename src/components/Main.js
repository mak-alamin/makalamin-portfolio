import Portfolio from "./Portfolio";

const Main = () => {
  return (
    <main>
      <section
        className="home"
        id="home"
        style={{
          background: `url("./images/coffee-relax.jpg") no-repeat center center`,
        }}
      >
        <div className="overlay">
          <i className="fa fa-bars"></i>
          <h1>
            MAK <span>ALAMIN</span>
          </h1>
          <h2 className="typewriter">
            I am a <span>Full Stack Web Developer</span>
          </h2>
        </div>
      </section>

      <section className="about" id="about">
        <h1>About Me</h1>
        <div className="row">
          <div className="col-12">
            <p>
              I am a Full Stack Web Developer with a passion for creating
              beautiful functional websites and web applications. I have a
              strong background in web development and have worked with PHP,
              Laravel, Javascript, React, WordPress and more.
            </p>
            <br />
            <p>
              I am currently looking for a position in the web development
              industry.
            </p>
            <a href="#contact" className="button-primary mt-3">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h1>My Skills</h1>
        <div className="skills-container">
          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>HTML 5</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>CSS3</h3>
          </div>

          <div className="skills-box">
            <img
              src="./images/javascript-logo.png"
              alt=""
              className="skills-icons"
            />
            <h3>JAVASCRIPT</h3>
          </div>

          <div className="skills-box">
            <img
              src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png"
              alt=""
              className="skills-icons"
            />
            <h3>NODE.JS</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>REACT</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/mongodb-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>MongoDB</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>PHP</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/mysql-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>MYSQL</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/laravel-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>Laravel</h3>
          </div>

          <div className="skills-box">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/wordpress-logo-png-transparent.png"
              alt=""
              className="skills-icons"
            />
            <h3>WordPress</h3>
          </div>
        </div>
      </section>

      <Portfolio></Portfolio>

      <section className="contact" id="contact">
        <div className="row">
          <div className="col-6">
            <h1>Contact Me</h1>
            <h2>Email</h2>
            <p>
              <a href="mailto:makalamin012@gmail.com">
                {" "}
                makalamin012@gmail.com{" "}
              </a>{" "}
              <br />
            </p>
            <br />
            <h2>Phone</h2>
            <p>
              <a href="tel:+8801739530410"> +8801739530410 </a> <br />
            </p>
          </div>

          <div className="col-6">
            <form action="#" method="post">
              <h3 className="mb-3">Send a message</h3>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="button-primary"
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
