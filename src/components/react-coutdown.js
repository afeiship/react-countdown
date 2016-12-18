import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    template:React.PropTypes.string,
    startTime:React.PropTypes.number,
    onCounting:React.PropTypes.func,
    onComplete:React.PropTypes.func,
  };

  static defaultProps = {
    startTime:60,
    interval:1000,
    onCounting:function(){},
    onComplete:function(){}
  };

  constructor(props) {
    super(props);
    this.state = {
      startTime:props.startTime,
      onCounting:props.onCounting,
      onComplete:props.onComplete,
      interval:props.interval
    };
  }

  start(){
    this._timer = setInterval(() => {
      if (!this._couter--) {
        this.stop();
        this.state.onComplete(this._couter);
      } else {
        this.state.onCounting(this._couter);
      }
    }, this.state.interval);
  }

  stop(){
    clearInterval(this._timer);
  }

  reset(){
    this._timer = null;
    this._couter = this.state.startTime;
  }

  render(){
    return (
      <span className={classNames('react-coutdown',this.props.cssClass)}>
        {this.props.children}
      </span>
    );
  }
}
