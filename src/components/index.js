import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';

const CLASS_NAME = 'react-countdown';
const STATUS_LIST = ['init', 'pause', 'count', 'done'];

export default class ReactCountdown extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The counter status.
     */
    status: PropTypes.oneOf(STATUS_LIST),
    /**
     * The runtime value.
     */
    value: PropTypes.number,
    /**
     * The end number.
     */
    end: PropTypes.number,
    /**
     * The steper.
     */
    step: PropTypes.number,
    /**
     * Every interval'ms to count.
     */
    interval: PropTypes.number,
    /**
     * When change will trigger.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    status: 'init',
    value: 5,
    end: 1,
    step: -1,
    interval: 1000,
    onChange: noop
  };

  get value() {
    return this.state.value;
  }

  get boundary() {
    const { step, end } = this.props;
    return step + end;
  }

  get paused() {
    const { status } = this.props;
    return status === 'pause';
  }

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value };
  }

  shouldComponentUpdate(inNextProps) {
    const { status, value } = inNextProps;
    const _status = this.props.status;
    const _value = this.state.value;
    if (status !== _status) {
      this[status]();
    }
    if (value !== _value) {
      this.setState({ value, status: 'init' });
    }
    return true;
  }

  componentDidMount() {
    const { status } = this.props;
    this[status]();
  }

  init = () => {
    const { value } = this.props;
    this.change(value, 'init');
  };

  pause = () => {
    this.setState({ status: 'pause' });
  };

  reset = () => {
    clearInterval(this.timer);
    if (this.value <= this.boundary) {
      this.init();
    }
  };

  count = () => {
    const { interval } = this.props;
    this.reset();
    this.timer = setInterval(this.countdown, interval);
  };

  countdown = () => {
    const { step, end } = this.props;
    if (this.paused) return;
    const value = this.value;
    const _value = value + step;
    if (value <= end) {
      this.done();
    } else {
      this.change(_value, 'count');
    }
  };

  done() {
    const { end } = this.props;
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
      virtual,
      status,
      value,
      end,
      step,
      interval,
      onChange,
      ...props
    } = this.props;
    const _value = this.state.value;

    return React.createElement(React.Fragment, {
      children: _value,
      ...props
    });
  }
}
