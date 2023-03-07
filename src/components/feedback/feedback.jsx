import React from 'react';
import { Markup } from './markup';
import PropTypes from 'prop-types';

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

    console.log(target.name.toLowerCase());
    console.log(this.state.good);
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
    // console.log(total);
  };

  countPositiveFeedbackPercentage() {
    console.log('click Positive Feedback Percentage');
  }

  render() {
    return (
      <div>
        <Markup
          onIncrement={this.increment}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};
