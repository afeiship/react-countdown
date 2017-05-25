import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    className:PropTypes.string,
    interval:PropTypes.number,
    time:PropTypes.number,
    hidden:PropTypes.bool,
    onCounting:PropTypes.func,
    onComplete:PropTypes.func,
  };

  static defaultProps = {
    interval:1000,
    time:60,
    hidden:false,
    onCounting:noop,
    onComplete:noop
  };

  constructor(props) {
    super(props);
    this.state = {
      time:props.time
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.time !== this.props.time){
      this.setState({time:nextProps.time},()=>{
        this.start();
      });
    }
  }

  static format(inTime){
    const seconds = parseInt(inTime % 60, 10);
    const minutes = parseInt(inTime / 60, 10) % 60;
    const hours = parseInt(inTime / 3600, 10);
    return {
      hours,minutes,seconds
    };
  }

  start(){
    const {onCounting,onComplete,interval} = this.props;
    let {time} = this.state;
    this.stop();

    onCounting.call(this,time);
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
    const {className,interval,time,onComplete,onCounting,...props} = this.props;
    return (
      <span {...props} className={classNames('react-countdown',className)} />
    );
  }
}
