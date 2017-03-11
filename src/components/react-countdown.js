import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    className:React.PropTypes.string,
    interval:React.PropTypes.number,
    time:React.PropTypes.number,
    onCounting:React.PropTypes.func,
    onComplete:React.PropTypes.func,
  };

  static defaultProps = {
    className:'',
    interval:1000,
    time:60,
    onCounting:noop,
    onComplete:noop
  };

  constructor(props) {
    super(props);
    const {interval,time,onCounting,onComplete} = props;
    this.state = {interval,time,onCounting,onComplete};
  }

  start(){
    let {onCounting,onComplete,interval,time} = this.state;
    this.stop();
    this._timer = setInterval(() => {
      time--;
      onCounting.call(this,time);
      this.setState({time},()=>{
        if(!time){
          this.stop();
          onComplete.call(this,time);
        }
      })
    }, interval);
  }

  pause(){
    this._timer && clearInterval(this._timer);
  }

  stop(){
    const {time} = this.props;
    const {onCounting} = this.state;
    this.setState({time});
    this._timer && clearInterval(this._timer);
  }

  componentWillUnmount(){
    if(this._timer){
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render(){
    const {className,children} = this.props;
    return (
      <span className={classNames('react-countdown',className)}>
        {children}
      </span>
    );
  }
}
