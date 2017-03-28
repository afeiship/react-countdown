# react-coutdown
> Countdown component for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## size:
+ 4.0K	react-coutdown.js

## props:
```javascript
    className:React.PropTypes.string,
    interval:React.PropTypes.number,
    time:React.PropTypes.number,
    hidden:React.PropTypes.bool,
    onCounting:React.PropTypes.func,
    onComplete:React.PropTypes.func,
```

## usage:
```html
  <ReactCountdown ref="countdown" time={10}
    onCounting={(time)=>{
      this.setState({time})
    }}>
    {this.state.time ? this.state.time +'s' : '点我发送验证码'}
  </ReactCountdown>
```
