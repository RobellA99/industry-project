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
import Header from "../../assets/images/analytics-header.png";
import Title from "../../assets/images/monthly-spending-title.png";
import TopCategoriesOpen from "../../assets/images/top-categories-open.png";
import { useState } from "react";
import SpendingInsights from "../../components/SpendingInsights/SpendingInsights";

import SpendingInsightsOpen from "../../assets/images/spending-insights-open.png";
import { motion, AnimatePresence } from "framer-motion";

export default function AnalyticsPage() {
  const [isClicked, setIsClicked] = useState(false);

  const [expanded, setExpanded] = useState(false);

  // const Accordion = ({ i, expanded, setExpanded }) => {
  //   const isOpen = i === expanded;

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
        <SpendingInsights />
        <AnimatePresence initial={false}>
          {isClicked && (
            <motion.section
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isClicked ? "auto" : 0,
                opacity: isClicked ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3 },
              }}
            >
              <img
                src={TopCategoriesOpen}
                alt="Top Spending Categories"
                className="container__spending-insights-image"
              />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
      {isClicked ? (
        <img src={SpendingInsightsOpen} alt="Open Card" />
      ) : (
        <img src={SpendingInsight} alt="Spending Overview" />
      )}

      <div className="container__top-categories">
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
    </div>
  );
}
