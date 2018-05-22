import './dev.scss';
import ReactCountdown from './main';

/*===example start===*/

// install: npm install afeiship/react-countdown --save
// import : import ReactCountdown from 'react-countdown'

class App extends React.Component {
  state = {
    value: 10,
    status: 'stop'
  };

  constructor(props) {
    super(props);
    window.demo = this;
  }

  componentDidMount() {
    const { rc } = this.refs;
    window.rc = rc;
  }

  _onChange = e => {
    this.setState({ value: e.target.value });
  };

  _onChangeValue = e => {
    this.setState({ value: Math.random() * 100 | 0 })
  };

  _onChangeStatus = status => {
    this.setState({ status })
  };

  render() {
    const { value, status } = this.state;
    return (
      <div className="hello-react-countdown">
        <button onClick={this._onChangeValue}>ChangeRandomValue : {this.state.value} </button>
        <button onClick={this._onChangeStatus.bind(this, 'start')}>Status:Start</button>
        <button onClick={this._onChangeStatus.bind(this, 'stop')}>Status:Stop</button>
        <ReactCountdown
          status={status}
          value={value}
          onChange={this._onChange}
          ref='rc'>
          {value ? value + 's' : '重新发送'}
        </ReactCountdown>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
