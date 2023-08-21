import React from "react";
import "./Portfolio.css";
import vector from "../../images/vector.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li
          className="portfolio__link"
          href=" https://github.com/YliuKo/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__caption">Статичный сайт</h4>
          <img className="portfolio__img" src={vector} alt="Вектор" />
        </li>
        <li
          className="portfolio__link"
          href="https://github.com/YliuKo/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__caption">Адаптивный сайт</h4>
          <img className="portfolio__img" src={vector} alt="Вектор" />
        </li>
        <li
          className="portfolio__link"
          href="https://github.com/YliuKo/react-mesto-api-full-gha"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__caption">Одностраничное приложение</h4>
          <img className="portfolio__img" src={vector} alt="Вектор" />
        </li>
      </ul>
    </section>
  );
}
