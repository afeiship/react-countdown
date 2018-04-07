import PropTypes from 'prop-types';
import React, {Component} from 'react';
import classNames from 'classnames';
import noop from 'noop';

// 'start', 'pause', 'stop'

export default class extends Component {
  static propTypes = {
    className: PropTypes.string,
    interval: PropTypes.number,
    time: PropTypes.number,
    state: PropTypes.string,
    onCounting: PropTypes.func,
    onComplete: PropTypes.func
  };

  static defaultProps = {
    interval: 1000,
    time: 60,
    state: 'stop',
    onCounting: noop,
    onComplete: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    };
  }

  componentWillReceiveProps(inProps) {
    const { time } = inProps;
    if (time !== this.props.time) {
      this.setState({
        time
      }, () => {
        this.start();
      });
    }
  }

  // TODO: will refactor
  initialState(inProps){
    const { state } = inProps;
    this[ state ]();
  }

  start() {
    const {onCounting, onComplete, interval} = this.props;
    let {time} = this.state;
    this.stop();

    onCounting.call(this, time);
    this._timer = setInterval(() => {
      time--;
      onCounting.call(this, time);
      this.setState({
        time
      }, () => {
        if (!time) {
          this.stop();
          onComplete.call(this, time);
        }
      })
    }, interval);
  }

  pause() {
    this._timer && clearInterval(this._timer);
  }

  stop() {
    const {time} = this.props;
    this.setState({time});
    this._timer && clearInterval(this._timer);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render() {
    const {
      className,
      interval,
      time,
      state,
      onComplete,
      onCounting,
      ...props
    } = this.props;
    return (<span {...props} className={classNames('react-countdown', className)}/>);
  }
}
