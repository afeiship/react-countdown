import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    template:React.PropTypes.string,
    startToEndGap:React.PropTypes.number,
    onCounting:React.PropTypes.func,
    onComplete:React.PropTypes.func,
  };

  static defaultProps = {
    startToEndGap:60,
    interval:1000,
    onCounting:function(){},
    onComplete:function(){}
  };

  constructor(props) {
    super(props);
    this.state = {
      startToEndGap:props.startToEndGap,
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

  pause(){
    clearInterval(this._timer);
  }

  stop(){
    this._couter = this.state.startToEndGap;
    clearInterval(this._timer);
  }

  reset(){
    this._timer = null;
    this._couter = this.state.startToEndGap;
  }

  render(){
    return (
      <span className={classNames('react-coutdown',this.props.cssClass)}>
        {this.props.children}
      </span>
    );
  }
}
