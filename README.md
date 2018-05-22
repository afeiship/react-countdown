# react-countdown
> Countdown component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-countdown --registry=https://registry.npm.taobao.org
```

```js
import ReactCountdown from 'react-countdown';
```

```scss
// customize your styles:
$react-countdown-options:(
);

@import 'node_modules/react-countdown/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-countdown --save
// import : import ReactCountdown from 'react-countdown'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-countdown">
        <ReactCountdown ref='rc' />
      </div>
    );
  }
}

```
