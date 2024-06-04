import React from 'react';
import Typewriter from "typewriter-effect";

const Banner = () => {
    const typingTexts = [
        "Full Stack Web Developer",
        "PHP & WordPress Expert",
        "Frontend Web Developer",
        "MERN Stack Developer",
      ];

    return (
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

          <div className='cta-buttons mt-10'>
          <a href="#portfolio" className="cta-button button-dark-blue mt-3 mr-5">
            See My Works
          </a>
          <a href="#contact" className="cta-button button-primary mt-3">
            Contact Me
          </a>
          </div>

        </div>
      </section>
    );
};

export default Banner;