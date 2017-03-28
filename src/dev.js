import './dev.scss';
import ReactCountdown from './main';
import dateFormat from 'dateformat';

let nowDate = Date.now();

class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      time:0,
      time2:5,
      hidden2:false,
    };
  }

  componentDidMount(){
    this._countdown = this.refs.countdown;
  }

  _click2(){
    this.refs.ct2.start();
  }

  getFormatedData(){
    const time = this.state.time2;
    const {hours,minutes,seconds} = ReactCountdown.format(time);

    return (
      <div className="timeaser">
        {`${hours}小时${minutes}分${seconds}秒`}
      </div>
    )
  }

  render(){
    return (
      <div className="hello-react-coutdown">
        <button onClick={this._click2.bind(this)}>可以开始倒计时啦！</button>
        <ReactCountdown hidden={this.state.hidden2} onComplete={()=>{
            this.setState({hidden2:true})
          }} ref="ct2" time={5}
            onCounting={(time2)=>{
              console.log(time2)
              this.setState({time2})
            }}>
            {this.state.time2 && this.getFormatedData()}
        </ReactCountdown>

        <button  onClick={()=>{
            //this._countdown.reset();
            this._countdown.start();
          }} disabled={!!this.state.time} >
          <ReactCountdown ref="countdown" time={10}
            onCounting={(time)=>{
              this.setState({time})
            }}>
            {this.state.time ? this.state.time +'s' : '点我发送验证码'}
          </ReactCountdown>
        </button>


        <button onClick={()=>{
            this._countdown.pause();
          }}>Pause</button>

        <button onClick={()=>{
            this._countdown.start();
          }}>Start</button>

        <button onClick={()=>{
            this._countdown.stop();
            this.setState({time:0})
          }}>Stop</button>

    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
