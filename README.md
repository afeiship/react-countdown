<p align="center">
  <a href="https://afeiship.github.io/react-countdown">
    <img width="800" src="https://tva1.sinaimg.cn/large/006y8mN6gy1g6gxab6eohj315u0e440k.jpg">
  </a>
</p>

# react-countdown
> Countdown component for react.

## install
```shell
npm install -S afeiship/react-countdown
```

## usage
1. import css
  ```scss
  @import "~react-countdown/style.scss";

  // customize your styles:
  $react-countdown-options: ()
  ```
2. import js
  ```js
  import ReactCountdown from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      interval: 1000,
      min: 5,
      max: 1,
      step: -1,
      status: 'init'
    };

    render() {
      const { interval, min, max, step, status } = this.state;
      return (
        <div className="app-container">
          <p className="mod-label">{status}</p>
          <ReactCountdown
            className="react-countdown"
            interval={interval}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              const { status, value } = e.target;
              this.setState({ status });
              console.log('status,value:->', status, value);
            }}
            status={status}
          />
          <p className="mod-form-control">
            <label htmlFor="interval">Interval</label>
            <input
              id="interval"
              className="mod-input"
              value={interval}
              onChange={(e) => {
                this.setState({ interval: parseInt(e.target.value) });
              }}
            />
          </p>

          <p className="mod-form-control">
            <label htmlFor="min">min</label>
            <input
              id="min"
              className="mod-input"
              value={min}
              onChange={(e) => {
                this.setState({ min: parseInt(e.target.value) });
              }}
            />
          </p>

          <p className="mod-form-control">
            <label htmlFor="max">max</label>
            <input
              id="max"
              className="mod-input"
              value={max}
              onChange={(e) => {
                this.setState({ max: parseInt(e.target.value) });
              }}
            />
          </p>
          <p className="mod-form-control">
            <label htmlFor="step">step</label>
            <input
              id="step"
              className="mod-input"
              value={step}
              onChange={(e) => {
                this.setState({ step: parseInt(e.target.value) });
              }}
            />
          </p>
          <button
            disabled={status === 'count'}
            onClick={() => {
              this.setState({ status: 'count' });
            }}>
            START!
          </button>
          <button
            onClick={() => {
              this.setState({ status: 'pause' });
            }}>
            Pause!
          </button>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-countdown/
