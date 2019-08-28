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
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactCountdown
            onChange={(e) => {
              const { status, value } = e.target;
              console.log('status,value:->', status, value);
            }}
            status="count"
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-countdown/
