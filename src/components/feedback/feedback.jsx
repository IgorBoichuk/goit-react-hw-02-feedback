import React from 'react';
import { Markup } from './markup';
// import PropTypes from 'prop-types';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = event => {
    const { target } = event;

    this.setState(prevState => {
      return {
        [target.name.toLowerCase()]: prevState[target.name.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Markup
          onIncrement={this.increment}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          percentage={percentage}
        />
      </div>
    );
  }
}
