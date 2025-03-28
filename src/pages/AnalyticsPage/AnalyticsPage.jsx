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

export default function AnalyticsPage() {
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
      <div className="container__spending-insights">
        <img src={SpendingInsight} alt="Spending Overview" />
      </div>
      <div className="container__top-categories">
        <img src={TopCategories} alt="Top Spending Categories" />
        <div className="container__top-categories-amount-container">
          <img src={TopCategoriesAmount} alt="Top Spending Categories" />
          <img
            src={Tracker}
            alt="Spening Amount Tracker"
            className="container__top-categories-amount-container-tracker"
          />
        </div>

        <div className="container__top-categories-breakdown">
          <img src={Category} alt="Category Breakdown" />
        </div>
      </div>
      <div className="container__top-categories-nav">
        <img src={IphoneBar} alt="Iphone Navigation Bar" />
      </div>
    </div>
  );
}
