import nxInterval from 'next-interval';

export default class {
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

}
