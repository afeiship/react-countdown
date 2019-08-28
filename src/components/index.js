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
    status: PropTypes.oneOf(['init', 'pause', 'count', 'done']),
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
    this.setState({ status: 'pause' });
  }

  restart() {
    clearInterval(this.timer);
    if (this.value === this.boundary) {
      this.init();
    }
  }

  count() {
    const { interval } = this.props;
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
