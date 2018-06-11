import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import Actions from './actions';

@mixin([Actions])
export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    interval: PropTypes.number,
    status: PropTypes.string,
  };

  static defaultProps = {
    value: 5,
    interval: 1000,
    status: 'stop',
    onChange: noop,
  };
  /*===properties end===*/

  componentDidMount() {
    const { status } = this.props;
    this[status]();
  }

  componentWillReceiveProps(inProps) {
    const { status } = inProps;
    this[status]();
  }

  componentWillUnmount(){
    this.stop();
  }

  render() {
    const {
      className,
      interval,
      value,
      onChange,
      status,
      ...props
    } = this.props;

    return (
      <span
        data-status={status}
        data-value={value}
        className={classNames('react-countdown', className)}
        {...props} />
    );
  }
}
