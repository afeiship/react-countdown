import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-countdown';

export default class extends Component {
  static displayName = CLASS_NAME;
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    status: PropTypes.string,
    start: PropTypes.number,
    end: PropTypes.number,
    step: PropTypes.number,
    interval: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    status: 'init',
    start: 5,
    end: 1,
    step: -1,
    interval: 1000,
    onChange: noop
  };
  /*===properties end===*/

  get value() {
    return this.state.value;
  }

  get paused() {
    const { status } = this.state;
    return status === 'paused';
  }

  constructor(inProps) {
    super(inProps);
    this.state = { value: inProps.start };
    this.countdown = this.countdown.bind(this);
  }

  componentWillReceiveProps(inNextProps) {
    const { status } = inNextProps;
    const _status = this.props.status;
    if (status !== _status) {
      this[status]();
    }
  }

  componentDidMount() {
    const { status } = this.props;
    this[status]();
  }

  init() {
    const { start } = this.props;
    this.change(start, 'init');
  }

  pause() {
    this.setState({ status: 'paused' });
  }

  restart() {
    const { end } = this.props;
    clearInterval(this.timer);
    if (this.value === end) {
      this.init();
    }
  }

  count() {
    const { interval, step, end } = this.props;
    const { status } = this.state;
    this.restart();
    this.timer = setInterval(this.countdown, interval);
  }

  countdown() {
    const { step, end } = this.props;
    if (this.paused) return;
    const value = this.value;
    const _value = value + step;
    if (value === end) {
      this.done();
    } else {
      this.change(_value, 'count');
    }
  }

  done() {
    const { step, end } = this.props;
    const value = end + step;
    clearInterval(this.timer);
    this.change(end, 'done');
  }

  change(inValue, inStatus) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      target.status = inStatus;
      onChange({ target });
    });
  }

  render() {
    const {
      className,
      status,
      start,
      end,
      step,
      interval,
      onChange,
      ...props
    } = this.props;
    const { value } = this.state;
    return (
      <span className={classNames(CLASS_NAME, className)} {...props}>
        {value}
      </span>
    );
  }
}
