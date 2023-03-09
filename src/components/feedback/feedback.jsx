import React from 'react';
import { Statistics } from '../statistics/statistics';

import style from './Style.module.css';
// import PropTypes from 'prop-types';

export const Feedback = ({ total, percentage, state }) => {
  // const total = this.countTotalFeedback();
  // const percentage = this.countPositiveFeedbackPercentage();

  return (
    <div>
      <h1 className={style.title}>Please leave feedback</h1>

      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={total}
        percentage={percentage}
        state={state}
      />
    </div>
  );
};
