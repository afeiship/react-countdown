# react-countdown
> Countdown component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-countdown
```

## properties
| Name      | Type   | Required | Default          | Description                                          |
| --------- | ------ | -------- | ---------------- | ---------------------------------------------------- |
| status    | enum   | false    | 'init'           | The counter status.                                  |
| value     | number | false    | 5                | The runtime value.                                   |
| end       | number | false    | 1                | The end number.                                      |
| step      | number | false    | -1               | The steper.                                          |
| transform | func   | false    | (value) => value | When value get, transform to another value you want. |
| interval  | number | false    | 1000             | Every interval'ms to count.                          |
| onChange  | func   | false    | noop             | When change will trigger.                            |


## usage
1. import css
  ```scss
  @import "~@jswork/react-countdown/dist/style.css";

  // or use sass
  @import "~@jswork/react-countdown/dist/style.scss";

  // customize your styles:
  $react-countdown-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCountdown from '@jswork/react-countdown';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      interval: 1000,
      value: 5,
      end: 1,
      step: -1,
      status: 'count'
    };

    render() {
      const { interval, value, end, step, status } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-countdown">
          <p className="mod-label">{status}</p>
          <span className="react-countdown">
            <ReactCountdown
              interval={interval}
              value={value}
              end={end}
              step={step}
              transform={(v) => `${v}s`}
              onChange={(e) => {
                const { status, value } = e.target;
                this.setState({ status, value });
                console.log('status,value:->', status, value);
              }}
              status={status}
            />
          </span>
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
            <label htmlFor="value">value</label>
            <input
              id="value"
              className="mod-input"
              value={value}
              onChange={(e) => {
                this.setState({ value: parseInt(e.target.value) });
              }}
            />
          </p>

          <p className="mod-form-control">
            <label htmlFor="end">end</label>
            <input
              id="end"
              className="mod-input"
              value={end}
              onChange={(e) => {
                this.setState({ end: parseInt(e.target.value) });
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
          <div className="actions mt-2">
            <button
              className="button is-primary mr-2"
              disabled={status === 'count'}
              onClick={() => {
                this.setState({ status: 'count' });
              }}>
              start!
            </button>
            <button
              className="button is-danger"
              onClick={() => {
                this.setState({ status: 'pause' });
              }}>
              Pause!
            </button>
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-countdown/


## license
Code released under [the MIT license](https://github.com/afeiship/react-countdown/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-countdown
[version-url]: https://npmjs.org/package/@jswork/react-countdown

[license-image]: https://img.shields.io/npm/l/@jswork/react-countdown
[license-url]: https://github.com/afeiship/react-countdown/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-countdown
[size-url]: https://github.com/afeiship/react-countdown/blob/master/dist/react-countdown.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-countdown
[download-url]: https://www.npmjs.com/package/@jswork/react-countdown
