import { Link } from "react-router-dom";
import "./LandingPage.scss";
import Header from "../../assets/images/header.png";
import Amount from "../../assets/images/amount.png";
import Scroll from "../../assets/images/scroll.png";
import Nav from "../../assets/images/navigation.png";
import Transactions from "../../assets/images/transactions.png";
import NavButtons from "../../assets/images/nav-buttons.png";
import Bar from "../../assets/images/bar.png";
import Dashboard from "../../assets/images/dashboard.png";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="container__nav">
        <img
          src={Bar}
          alt="Status Bar"
          className="container__status-home-image"
        />
        <img src={Header} alt="Nav Bar" className="container__nav-image" />
      </div>
      <div className="container__amount">
        <img
          src={Amount}
          alt="Account Details"
          className="container__amount-image"
        />
        <img
          src={Scroll}
          alt="Scroll bar"
          className="container__scroll-image"
        />
      </div>
      <img
        src={NavButtons}
        alt="Navigation Buttons"
        className="container__navbuttons-image"
      />
      <div className="container__dashboard">
        <Link to="/analytics" className="container__dashboard-image">
          <img src={Dashboard} alt="Dashboard Cards" />
        </Link>
      </div>
      <img
        src={Transactions}
        alt="Transaction List"
        className="container__transactions-image"
      />
      <img src={Nav} alt="Navigation" className="container__navigation-image" />
    </div>
  );
}
