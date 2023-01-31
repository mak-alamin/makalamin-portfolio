const Header = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return (
    <header>
      <i className="fa fa-times"></i>
      <div className="mak-alamin">
        <img
          src="images/mak-alamin-web-developer.png"
          alt="mak-alamin-web-developer"
        />
        <h1>Mak Alamin</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#portfolio">My Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>

      <div className="nav-footer">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/makalamin.me"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/mak_alamin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mak-alamin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <p className="copyright">&copy; Copyright {currentYear} Mak Alamin</p>
      </div>
    </header>
  );
};

export default Header;
