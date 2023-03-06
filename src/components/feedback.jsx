import React from 'react';
import style from './Style.module.css';

export class Feedback extends React.Component {
  increment() {
    console.log('click coun increment');
  }

  countTotalFeedback() {
    console.log('click coun total');
  }
  countPositiveFeedbackPercentage() {
    console.log('click Positive Feedback Percentage');
  }
  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Please leave feedback</h1>
        <div className={style.buttonlist}>
          <button
            className={style.button}
            type="button"
            onClick={this.increment}
          >
            Good
          </button>
          <button
            className={style.button}
            type="button"
            onClick={this.increment}
          >
            Neutral
          </button>
          <button
            className={style.button}
            type="button"
            onClick={this.increment}
          >
            Bad
          </button>
        </div>
        <h2 className={style.statistics}>Statistics</h2>
        <ul className={style.statlist}>
          <li className={style.statitem}>Good: </li>
          <li className={style.statitem}>Neutral: </li>
          <li className={style.statitem}>Bad: </li>
        </ul>
      </div>
    );
  }
}

// countTotalFeedback()
// countPositiveFeedbackPercentage()

// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
