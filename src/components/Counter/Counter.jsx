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
    return (
      <>
        <Section
          title="Please leave feedback"
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleCounter}
          />
        </Section>

        <Section
          title="Statistics"
        >
          <Notification
            message="There is no feedback"
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    )
  }
}
