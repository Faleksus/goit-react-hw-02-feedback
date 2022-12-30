import { Component } from 'react';
import css from './Counter.module.css';

// let counterGood = 0;
// let counterNeutral = 0;
// let counterBad = 0;

export class Counter extends Component {

  state = {good: 0, neutral: 0, bad: 0};

  // handleCounterGood = () => {
  //   this.setState(prevState => ({counterGood: prevState.counterGood + 1}))
  // };

  // handleCounterNeutral = () => {
  //   this.setState(prevState => ({counterNeutral: prevState.counterNeutral + 1}))
  // };

  // handleCounterBad = () => {
  //   this.setState(prevState => ({counterBad: prevState.counterBad + 1}))
  // };

  handleCounter = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };

  render() {
    return (
      <div className={css.sectionCounter}>
        <div>
          <h2 className={css.counterHeader}>Please leave feedback</h2>
          <div className={css.countBtn}>
            <button
              name='good'
              className={css.countBtnItem}
              onClick={this.handleCounter}
            >Good</button>
            <button
              name='neutral'
              className={css.countBtnItem}
              onClick={this.handleCounter}
            >Neutral</button>
            <button
              name='bad'
              className={css.countBtnItem}
              onClick={this.handleCounter}
            >Bad</button>

          </div>
        </div>
        <div>
          <h3 className={css.statisticHeader}>Statistic</h3>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>

            <li>Total: {this.countTotalFeedback()}</li>

            <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        </div>
      </div>
    )
  }
}
