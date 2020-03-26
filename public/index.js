import ReactCountdown from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
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
      <div className="app-container">
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
        <button
          disabled={status === 'count'}
          onClick={() => {
            this.setState({ status: 'count' });
          }}>
          start!
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
