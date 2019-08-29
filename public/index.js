import ReactCountdown from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    interval: 1000,
    start: 5,
    end: 1,
    step: -1,
    status: 'init'
  };

  render() {
    const { interval, start, end, step, status } = this.state;
    return (
      <div className="app-container">
        <p className="mod-label">{status}</p>
        <ReactCountdown
          className="react-countdown"
          interval={interval}
          start={start}
          end={end}
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
          <label htmlFor="start">start</label>
          <input
            id="start"
            className="mod-input"
            value={start}
            onChange={(e) => {
              this.setState({ start: parseInt(e.target.value) });
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
