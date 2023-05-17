import { QueryClient, QueryClientProvider } from "react-query";
import Portfolio from "./Portfolio";

import Typewriter from "typewriter-effect";

const Main = () => {
  const queryClient = new QueryClient();

  const typingTexts = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "WordPress Expert",
    "UI/UX Designer",
  ];

  return (
    <main>
      <section
        className="home"
        id="home"
        style={{
          background: `url("./images/coffee-relax.jpg") no-repeat center center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="overlay p-5">
          <h3>Hi, I'm</h3>
          <h1>
            Mak <span>Alamin</span>
          </h1>

          <h2>
            I am a{" "}
            <Typewriter
              options={{
                strings: typingTexts,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </section>

      <section className="about" id="about">
        <h1>About Me</h1>
        <div className="row">
          <div className="col-12">
            <p>
              I am a Full Stack Web Developer with a passion for creating
              innovative and dynamic websites and web applications. I have a
              solid foundation in Javascript, React, PHP, Laravel, WordPress and
              more.
            </p>
            <br />
            <p>
              I am constantly exploring new technologies and trends in the field
              to stay up-to-date with the latest developments. I am a natural
              problem solver and have a strong attention to detail, which allows
              me to create seamless user experiences.
            </p>
            <br />
            <p>
              As a Full Stack Web Developer, I am committed to delivering
              high-quality work and exceeding client expectations. I take pride
              in my ability to work collaboratively with teams and clients to
              create solutions that meet their unique needs.
            </p>
            <br />
            <p>
              I'm looking forward to work on your project. Let's make it a great
              success together.
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

      <QueryClientProvider client={queryClient}>
        <Portfolio></Portfolio>
      </QueryClientProvider>

      <section className="contact" id="contact">
        <div className="columns-1 md:columns-2">
          <div>
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
            <h2>Phone / WhatsApp</h2>
            <p>
              <a href="tel:+8801739530410"> +880 17 39 53 04 10 </a>
            </p>
            <br />

            <p>Or, </p>

            <br />

            <p>
              <a href="skype:live:makalamin012?chat"> Get me on Skype</a>
            </p>
          </div>

          <form action="#" method="post">
            <h3 className="mb-3 mt-5 text-2xl font-bold">Send a message</h3>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" />

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
      </section>
    </main>
  );
};

export default Main;
