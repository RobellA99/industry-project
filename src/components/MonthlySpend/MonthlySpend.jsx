import SpendSvg from "../SpendSvg/SpendSvg";

export default function MonthlySpend() {
  return (
    <article>
      <h2>Monthly Spend</h2>
      <div>
        <h3>£350.00</h3>
        <p>£50.00</p>
      </div>
      <img src={SpendSvg} alt="Monthly Spend Card" />
    </article>
  );
}
