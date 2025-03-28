import { Link } from "react-router-dom";
import "./AnalyticsPage.scss";
import Bar from "../../assets/images/bar.png";
import Cross from "../../assets/images/cross.png";
import Graph from "../../assets/images/graph.png";
import GraphInsight from "../../assets/images/graph-insights.png";
import SpendingInsight from "../../assets/images/spending-insights.png";
import TopCategories from "../../assets/images/top-categories.png";
import TopCategoriesAmount from "../../assets/images/top-categories-amount.png";
import Tracker from "../../assets/images/tracker.png";
import Category from "../../assets/images/category-breakdown.png";
import IphoneBar from "../../assets/images/iphone-bar.png";
import Header from "../../assets/images/analytics-header.png";
import Title from "../../assets/images/monthly-spending-title.png";
import SpendingInsightOpen from "../../assets/images/spending-insights-open.png";
import TopCategoriesOpen from "../../assets/images/top-categories-open.png";
import { useState } from "react";

export default function AnalyticsPage() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="container">
      <img src={Bar} alt="Status Bar" className="container__status-image" />
      <div className="container__title">
        <Link to="/">
          <img src={Cross} alt="Cross" className="container__title-image" />
        </Link>

        <img src={Header} alt="Header" className="container__title-header" />
      </div>
      <div className="container__graph">
        <img src={Title} alt="" className="container__graph-title" />
        <img src={Graph} alt="Graph" className="container__graph-graph" />
        <img
          src={GraphInsight}
          alt="Insights"
          className="container__graph-insights"
        />
      </div>
      <div className="container__spending-insights" onClick={handleClick}>
        {isClicked ? (
          <img src={SpendingInsightOpen} alt="Open Card" />
        ) : (
          <img src={SpendingInsight} alt="Spending Overview" />
        )}
      </div>
      <div className="container__top-categories">
        <img
          src={isClicked ? TopCategoriesOpen : TopCategories}
          alt="Top Spending Categories"
        />

        {!isClicked && (
          <>
            <div className="container__top-categories-amount-container">
              <img
                src={TopCategoriesAmount}
                alt="Top Spending Categories"
                className="container__top-categories-amount-container-amount"
              />
              <img
                src={Tracker}
                alt="Spending Amount Tracker"
                className="container__top-categories-amount-container-tracker"
              />
            </div>

            <div className="container__top-categories-breakdown">
              <img src={Category} alt="Category Breakdown" />
            </div>
          </>
        )}
      </div>
      <div className="container__top-categories-nav">
        <img src={IphoneBar} alt="Iphone Navigation Bar" />
      </div>
    </div>
  );
}
