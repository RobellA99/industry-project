import MonthlySpend from "../../components/MonthlySpend/MonthlySpend";
import MonthlySave from "../../components/MonthlySave/MonthlySave";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Link to="/analytics">
        <MonthlySpend />
      </Link>
      <Link to="/analytics">
        <MonthlySave />
      </Link>
    </div>
  );
}
