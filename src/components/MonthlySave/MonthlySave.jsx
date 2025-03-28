import SaveSvg from "../SaveSvg/SaveSvg";

export default function MonthlySave() {
  return (
    <article className="card">
      <h2 className="card__title">Monthly Savings</h2>
      <div className="card__container">
        <h3 className="card__conatiner-title">£670.00</h3>
        <p className="card__container-info">£30.00</p>
      </div>
      <img src={SaveSvg} alt="Monthly Spend Card" className="card__image" />
    </article>
  );
}
