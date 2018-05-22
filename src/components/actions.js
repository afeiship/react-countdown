export default class {
  stop() {
    this.destroy();
  }

  start() {
    this.destroy();
    this._interval = nx.interval(() => {
      this.count();
    }, this.props.interval);
  }

  count() {
    const { onChange } = this.props;
    const value = this.props.value - 1;
    value === 0 && this.stop();
    onChange({ target: { value } });
  }

  destroy() {
    this._interval && this._interval.destroy();
  }

}
