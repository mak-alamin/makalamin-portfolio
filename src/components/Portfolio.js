import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Portfolio = () => {
  var wpUserName = process.env.REACT_APP_WP_USERNAME;
  var appPassword = process.env.REACT_APP_WP_APP_PASS;

  var auth = {
    Authorization: `Basic ${btoa(wpUserName + ":" + appPassword)}`,
  };

  // Get Portfolios from Shiny Coders
  const { data, error, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_WP_REST_URL}/portfolio?_embed`,
        {
          headers: auth,
        }
      );
      const data = await res.json();

      let pfs = [];

      if (data && data?.length) {
        data.forEach((el, i) => {
          let pf = {
            id: el?.id,
            title: el?.title?.rendered,
            content: el?.content?.rendered,
            featuredImage: el?._embedded["wp:featuredmedia"]["0"]["source_url"],
            // categories: el?._embedded["wp:term"]["0"],
          };

          pfs.push(pf);
        });
      }

      return pfs;
    },
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("data/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);

  if (!portfolios.length) {
    return (
      <section className="portfolio" id="portfolio">
        <h1>My Works</h1>
        <h3>Loading... </h3>
      </section>
    );
  }

  return (
    <section className="portfolio" id="portfolio">
      <h1>My Works</h1>

      <div className="portfolio-row">
        {portfolios.length &&
          portfolios.map((portfolio, i) => (
            <div
              onClick={() => handlePortfolioClick(portfolio)}
              key={portfolio.id}
              className="portfolio-item col-4"
            >
              <img src={portfolio?.featuredImage} alt="portfolio-1" />
              <h2>{portfolio?.title}</h2>
            </div>
          ))}
      </div>

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
