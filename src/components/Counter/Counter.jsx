import { Component } from 'react';
import css from './Counter.module.css';

// let counterGood = 0;
// let counterNeutral = 0;
// let counterBad = 0;

export class Counter extends Component {

  state = {counterGood: 0, counterNeutral: 0, counterBad: 0};

  handleCounterGood = () => {
    this.setState(prevState => ({counterGood: prevState.counterGood + 1}))
  };

  handleCounterNeutral = () => {
    this.setState(prevState => ({counterNeutral: prevState.counterNeutral + 1}))
  };

  handleCounterBad = () => {
    this.setState(prevState => ({counterBad: prevState.counterBad + 1}))
  };

  render() {
    return (
      <div className={css.sectionCounter}>
        <div>
          <h2 className={css.counterHeader}>Please leave feedback</h2>
          <div className={css.countBtn}>
            <button className={css.countBtnItem} onClick={this.handleCounterGood}>Good</button>
            <button className={css.countBtnItem} onClick={this.handleCounterNeutral}>Neutral</button>
            <button className={css.countBtnItem} onClick={this.handleCounterBad}>Bad</button>
          </div>
        </div>
        <div>
          <h3 className={css.statisticHeader}>Statistic</h3>
          <ul>
            <li>Good: {this.state.counterGood}</li>
            <li>Neutral: {this.state.counterNeutral}</li>
            <li>Bad: {this.state.counterBad}</li>
          </ul>
        </div>
      </div>
    )
  }
}
