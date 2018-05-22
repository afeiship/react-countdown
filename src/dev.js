import './dev.scss';
import ReactCountdown from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
