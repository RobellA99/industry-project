import SaveSvg from "../SaveSvg/SaveSvg";

export default function MonthlySpend() {
  return (
    <article>
      <h2>Monthly Savings</h2>
      <div>
        <h3>£670.00</h3>
        <p>£30.00</p>
      </div>
      <img src={SaveSvg} alt="Monthly Spend Card" />
    </article>
  );
}
