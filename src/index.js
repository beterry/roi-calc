import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import styles
import './styles/normalize.css'
import './styles/index.scss';

//import sections

//import components
import Slider from './components/slider'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aro: 595
    }
  }
  render() {
    return(
      <Slider />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));