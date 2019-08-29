import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-countdown';
const STATUS_LIST = ['init', 'pause', 'count', 'done'];

export default class extends Component {
  static displayName = CLASS_NAME;
  /*===properties min===*/
  static propTypes = {
    className: PropTypes.string,
    nodeName: PropTypes.any,
    virtual: PropTypes.bool,
    status: PropTypes.oneOf(STATUS_LIST),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    interval: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    nodeName: 'span',
    status: 'init',
    min: 5,
    max: 1,
    step: -1,
    interval: 1000,
    onChange: noop
  };
  /*===properties end===*/

  get value() {
    return this.state.value;
  }

  get boundary() {
    const { step, max } = this.props;
    return step + max;
  }

  get paused() {
    const { status } = this.props;
    return status === 'pause';
  }

  constructor(inProps) {
    super(inProps);
    this.state = { value: inProps.min };
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
    const { min } = this.props;
    this.change(min, 'init');
  }

  pause() {
    this.setState({ status: 'pause' });
  }

  reset() {
    clearInterval(this.timer);
    if (this.value <= this.boundary) {
      this.init();
    }
  }

  count() {
    const { interval } = this.props;
    this.reset();
    this.timer = setInterval(this.countdown, interval);
  }

  countdown() {
    const { step, max } = this.props;
    if (this.paused) return;
    const value = this.value;
    const _value = value + step;
    if (value <= max) {
      this.done();
    } else {
      this.change(_value, 'count');
    }
  }

  done() {
    clearInterval(this.timer);
    this.change(this.boundary, 'done');
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
      nodeName,
      virtual,
      status,
      min,
      max,
      step,
      interval,
      onChange,
      ...props
    } = this.props;
    const { value } = this.state;
    const _nodeName = virtual ? React.Fragment : nodeName;
    return React.createElement(_nodeName, {
      children: value,
      ...props
    });
  }
}
