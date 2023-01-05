import PropTypes from 'prop-types';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class Counter extends Component {

  state = {good: 0, neutral: 0, bad: 0};

  handleCounter = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { handleCounter, countTotalFeedback, countPositiveFeedbackPercentage } = this;

    return (
      <>
        <Section
          title="Please leave feedback"
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={handleCounter}
          />
        </Section>

        <Section
          title="Statistics"
        >
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification
              message="There is no feedback"
            />
          )}
        </Section>
      </>
    )
  }
}

Counter.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  handleCounter: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
