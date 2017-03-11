import './dev.scss';
import ReactCountdown from './main';


class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      time:0
    };
  }

  componentDidMount(){
    this._countdown = this.refs.countdown;
  }

  render(){
    return (
      <div className="hello-react-coutdown">

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
