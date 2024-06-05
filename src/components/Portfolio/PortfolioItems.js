import React from "react";

const PortfolioItems = ({items, handlePortfolioClick}) => {
  return (
    <div className="portfolio-row">
      {items &&
        items.map((portfolio, i) => (
          <div
            onClick={() => handlePortfolioClick(portfolio)}
            key={portfolio.id}
            className="portfolio-item col-3"
          >
            <img src={portfolio?.featuredImage} alt={portfolio?.title} />
            <h2>{portfolio?.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default PortfolioItems;
