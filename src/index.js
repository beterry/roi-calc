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
      aro: 600
    }
    this.changeAro = this.changeAro.bind(this)
  }

  changeAro(e) {
    this.setState({aro: e.target.value})
  }

  render() {
    return(
      <Slider
        label='Average Reapir Order'
        min={200}
        max={2000}
        step={20}
        value={this.state.aro}
        onChange={this.changeAro}
      />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));