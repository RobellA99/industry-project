import ArrowSvg from "../ArrowSvg/ArrowSvg";
import "./SpendingInsights.scss";
import VectorSvg from "../VectorSvg/VectorSvg";

export default function SpendingInsights() {
  return (
    <section className="card">
      <div className="card__wrapper">
        <h3 className="card__header">Spending Insights</h3>
        <VectorSvg />
      </div>
      <article className="card__article">
        <h2 className="card__title">
          You could save <span className="card__title-price">£135</span> per
          month
        </h2>
        <ArrowSvg className="card__image" />
      </article>
    </section>
  );
}
