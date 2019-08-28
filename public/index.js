import ReactCountdown from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    status: 'init'
  };

  render() {
    const { status } = this.state;
    return (
      <div className="app-container">
        <p className="mod-label">{status}</p>
        <ReactCountdown
          onChange={(e) => {
            const { status, value } = e.target;
            this.setState({ status });
            console.log('status,value:->', status, value);
          }}
          status={status}
        />
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
