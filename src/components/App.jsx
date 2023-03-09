import React from 'react';
import { Feedback } from './feedback/feedback';
import { Feedbackoptions } from './feedback-options/feedbackoptions';
import { Section } from './section/section';

export class App extends React.Component {
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
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
          onIncrement={this.increment}
          state={this.state}
        />
        <Feedbackoptions onIncrement={this.increment} />
        <Section></Section>
      </div>
    );
  }
}
