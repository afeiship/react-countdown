import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxFsm from 'next-fsm';
import RSM from 'react-status-manager';

const CLASS_NAME = 'react-countdown';
const STATUS = {
  INIT: 0,
  COUNT: 1,
  DONE: 2
};

export default class extends Component {
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
    start: 10,
    end: 1,
    step: -1,
    interval: 1000,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = { value: inProps.start };
  }

  componentDidMount() {
    const { status } = this.props;
    this[status]();
  }

  init() {
    const { start, onChange } = this.props;
    this.setState({ value: start }, () => {
      onChange({
        target: {
          value: start,
          status: 'init'
        }
      });
    });
  }

  count() {
    const { interval, step, end, onChange } = this.props;
    this.timer = setInterval(() => {
      const { value } = this.state;
      const target = { value: value + step };
      this.setState(target, () => {
        target.status = 'count';
        if (target.value === end) {
          this.done();
        } else {
          onChange({ target });
        }
      });
    }, interval);
  }

  done() {
    const { end, onChange } = this.props;
    clearInterval(this.timer);
    onChange({ target: { value: end, status: 'done' } });
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
    return <Fragment {...props}>{value}</Fragment>;
  }
}
