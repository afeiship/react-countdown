import './dev.scss';
import ReactCoutdown from './main';


class App extends React.Component{
  static defaultProps ={
    startTime:20
  }
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
            this._countdown.reset();
            this._countdown.start();
          }} disabled={!!this.state.time} >
          <ReactCoutdown ref="countdown" startTime={this.props.startTime}
            onCounting={(time)=>{
              this.setState({time})
            }}>
            {this.state.time ? this.state.time +'s' : '点我发送验证码'}
          </ReactCoutdown>
        </button>

    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
