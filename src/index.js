import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import styles
import './styles/normalize.css'
import './styles/index.scss';

//import sections
import ShortROI from './sections/shortRoi'
import LongROI from './sections/longRoi'

//import components


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aro: 600,
      quantity: 5000,
      response: .01,
      visits: 2,
      years: 5,
      referrals: 1,
      retention: .8
    }
    this.changeAro = this.changeAro.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeResponse = this.changeResponse.bind(this)
    this.changeVisits = this.changeVisits.bind(this)
    this.changeYears = this.changeYears.bind(this)
    this.changeReferrals = this.changeReferrals.bind(this)
    this.changeRetention = this.changeRetention.bind(this)
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

  changeVisits(e) {
    this.setState({visits: e.target.value})
  }

  changeYears(e) {
    this.setState({years: e.target.value})
  }

  changeReferrals(e) {
    this.setState({referrals: e.target.value})
  }

  changeRetention(e) {
    this.setState({retention: e.target.value})
  }


  render() {
    return(
      <>
        <ShortROI
          aro={this.state.aro}
          quantity={this.state.quantity}
          response={this.state.response}
          changeAro={this.changeAro}
          changeQuantity={this.changeQuantity}
          changeResponse={this.changeResponse}
        />
        <LongROI
          aro={this.state.aro}
          quantity={this.state.quantity}
          response={this.state.response}
          visits={this.state.visits}
          changeVisits={this.changeVisits}
          years={this.state.years}
          changeYears={this.changeYears}
          referrals={this.state.referrals}
          changeReferrals={this.changeReferrals}
          retention={this.state.retention}
          changeRetention={this.changeRetention}
        />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));