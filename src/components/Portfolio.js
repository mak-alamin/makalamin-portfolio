import { useEffect, useState } from "react";
import Tabs from "./Tabs.js";
import PortfolioItems from "./Portfolio/PortfolioItems.js";

const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // const [data] = usePortfolios();

  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("data/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h1>My Works</h1>

      <Tabs
        tabs={[
          {
            title: "WordPress Websites",
            content: <PortfolioItems items={portfolios} handlePortfolioClick={handlePortfolioClick} />,
          },
          {
            title: "WordPress Plugins",
            content: "WordPress Plugins coming soon",
          },
          { title: "Custom Web Apps", content: "Coming soon" },
        ]}
      ></Tabs>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closePopup} className="btn btn-circle">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6L18 18" stroke="#fff" strokeLinecap="round" />
                <path
                  d="M18 6L6.00001 18"
                  stroke="#fff"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="popup-body">
              <h2>{selectedPortfolio.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedPortfolio.content,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
