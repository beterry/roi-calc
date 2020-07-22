import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import styles
import './styles/normalize.css'
import './styles/index.scss';

//import sections
import ShortROI from './sections/shortRoi'

//import components


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aro: 600,
      quantity: 5000,
      response: .01
    }
    this.changeAro = this.changeAro.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeResponse = this.changeResponse.bind(this)
  }

  changeAro(e) {
    this.setState({aro: e.target.value})
  }

  changeQuantity(e) {
    this.setState({quantity: e.target.value})
  }

  changeResponse(e) {
    this.setState({response: e.target.value})
  }

  render() {
    return(
      <ShortROI
        aro={this.state.aro}
        quantity={this.state.quantity}
        response={this.state.response}
        changeAro={this.changeAro}
        changeQuantity={this.changeQuantity}
        changeResponse={this.changeResponse}
      />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));