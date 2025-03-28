import SpendSvg from "../SpendSvg/SpendSvg";

export default function MonthlySpend() {
  return (
    <article className="card">
      <h2 className="card__title">Monthly Spend</h2>
      <div className="card__container">
        <h3 className="card__conatiner-title">£350.00</h3>
        <p className="card__container-info">£50.00</p>
      </div>
      <img src={SpendSvg} alt="Monthly Spend Card" className="card__image" />
    </article>
  );
}
