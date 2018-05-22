import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  render(){
    const { className, ...props } = this.props;
    return (
      <span {...props} className={classNames('react-countdown',className)} />
    );
  }
}
