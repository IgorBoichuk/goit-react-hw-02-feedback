import style from './Style.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Markup = ({
  onIncrement,
  good,
  neutral,
  bad,
  total,
  percentage,
}) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Please leave feedback</h1>
      <div className={style.buttonlist}>
        <button
          className={style.button}
          type="button"
          name="Good"
          onClick={onIncrement}
        >
          Good
        </button>
        <button
          className={style.button}
          type="button"
          name="Neutral"
          onClick={onIncrement}
        >
          Neutral
        </button>
        <button
          className={style.button}
          type="button"
          name="Bad"
          onClick={onIncrement}
        >
          Bad
        </button>
      </div>
      <h2 className={style.statistics}>Statistics</h2>
      <ul className={style.statlist}>
        <li className={style.statitem}>Good: {good}</li>
        <li className={style.statitem}>Neutral: {neutral}</li>
        <li className={style.statitem}>Bad: {bad}</li>
        <li className={style.statitem}>Total: {total}</li>
        <li className={style.statitem}>Positive feedback: {percentage}%</li>
      </ul>
    </div>
  );
};

Markup.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
