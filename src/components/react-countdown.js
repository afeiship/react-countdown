import React, { createElement,Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'noop';
import nxInterval from 'next-interval';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    nodeName: PropTypes.any,
    interval: PropTypes.number,
    status: PropTypes.string,
  };

  static defaultProps = {
    value: 5,
    interval: 1000,
    status: 'stop',
    nodeName: 'span',
    onChange: noop,
  };
  /*===properties end===*/


  /*===actions start===*/
  stop() {
    this.destroy();
  }

  start() {
    this.destroy();
    this._interval = nxInterval(() => {
      this.count();
    }, this.props.interval);
  }

  count() {
    const { onChange } = this.props;
    const value = this.props.value - 1;
    if (value >= 0) {
      onChange({ target: { value } });
    } else {
      this.stop();
    }
  }

  destroy() {
    this._interval && this._interval.destroy();
  }
  /*===actions end===*/

  componentDidMount() {
    const { status } = this.props;
    this[status]();
  }

  componentWillReceiveProps(inProps) {
    const { status } = inProps;
    this[status]();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { interval, value, onChange, status, nodeName, ...props } = this.props;
    return createElement(nodeName, {
      ...props,
    });
  }
}
