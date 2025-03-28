import MonthlySpend from "../../components/MonthlySpend/MonthlySpend";
import MonthlySave from "../../components/MonthlySave/MonthlySave";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import Header from "../../assets/images/header.jpg";
import Amount from "../../assets/images/amount.jpg";
import Scroll from "../../assets/images/scroll.jpg";
import Nav from "../../assets/images/navigation.jpg";
import Transactions from "../../assets/images/transactions.jpg";
import NavButtons from "../../assets/images/nav-buttons.jpg";

export default function LandingPage() {
  return (
    <div className="container">
      <div>
        <img src={Header} alt="Nav Bar" />
      </div>
      <div>
        <img src={Amount} alt="Account Details" className="container__iamge" />
        <img src={Scroll} alt="Scroll bar" />
      </div>
      <img src={Nav} alt="Navigation Buttons" />
      <Link to="/analytics">
        <MonthlySpend />
      </Link>
      <Link to="/analytics">
        <MonthlySave />
      </Link>
      <img src={Transactions} alt="Transaction List" />
      <img src={NavButtons} alt="Navigation Buttons" />
    </div>
  );
}
