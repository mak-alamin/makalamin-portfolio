const Header = ({ setSwapStatus, swapStatus }) => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setSwapStatus(!swapStatus);
  };

  return (
    <header className="w-3/4">
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
            <label htmlFor="my-drawer" onClick={() => scrollToSection("home")}>
              home
            </label>
          </li>
          <li>
            <label htmlFor="my-drawer" onClick={() => scrollToSection("about")}>
              About Me
            </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              onClick={() => scrollToSection("skills")}
            >My Skills</label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              onClick={() => scrollToSection("portfolio")}
            > My Works </label>
          </li>
          <li>
            <label
              htmlFor="my-drawer"
              onClick={() => scrollToSection("contact")}
            > Contact Me </label>
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
