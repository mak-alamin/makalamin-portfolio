import { useEffect, useState } from "react";

const Portfolio = () => {
  const [portfolioCats, setPortfolioCats] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_WP_REST_URL}/elemenfoliocategory?post_type=elemenfolio`
    )
      .then((response) => response.json())
      .then((categories) => {
        // Output the category names
        categories.forEach((category) => {
          // console.log(category.name);
        });

        setPortfolioCats(categories);
      })
      .catch((error) => console.error(error));

    fetch(`${process.env.REACT_APP_WP_REST_URL}/elemenfolio?_embed`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let pfs = [];

        if (data.length) {
          data.forEach((el, i) => {
            let pf = {
              id: el?.id,
              title: el?.title?.rendered,
              content: el?.content?.rendered,
              featuredImage: el?._embedded["wp:featuredmedia"]["0"].source_url,
              categories: el?._embedded["wp:term"]["0"],
            };

            pfs.push(pf);
          });

          setPortfolios(pfs);
        }
      });
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  console.log(portfolioCats);

  console.log(portfolios);

  return (
    <section className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>

      <div className="portfolio-tabs">
        <div className="tab-buttons pb-5">
          {portfolioCats.length &&
            portfolioCats.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => handleTabClick(index)}
                className={activeTab === index ? "active" : ""}
              >
                {cat?.name}
              </button>
            ))}
        </div>

        {portfolioCats.length &&
          portfolioCats.map((cat, index) => (
            <div
              className={
                activeTab === index ? "active tab-content" : "tab-content"
              }
              key={cat?.id}
            >
              {portfolios.length &&
                portfolios.map((portfolio, i) => (
                  <div
                    onClick={() => handlePortfolioClick(portfolio)}
                    key={portfolio.id}
                    className="portfolio-item col-3"
                  >
                    <img src={portfolio?.featuredImage} alt="portfolio-1" />
                    <h2>{portfolio?.title}</h2>
                  </div>
                ))}
            </div>
          ))}

        <span class="item break"></span>
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
                <path d="M6 6L18 18" stroke="#fff" stroke-linecap="round" />
                <path
                  d="M18 6L6.00001 18"
                  stroke="#fff"
                  stroke-linecap="round"
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
