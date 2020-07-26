import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral'

//import styles
import './styles/normalize.css'
import './styles/index.scss';

//import sections
import Hero from './sections/hero/hero'

// import layout
import RoiLayout from './layout/roi/roi'
import Padding from './layout/padding/padding'

//import components
import TopBar from './components/topBar/topBar'
import Slider from './components/roiSlider/slider'
import CalcBox from './components/calcBox/calcBox'

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

    //immediate ROI
    const increasedCarCount = this.state.quantity * this.state.response
    const shortGrossRevenue = increasedCarCount * this.state.aro
    const cost = 1000 + (this.state.quantity * .25)
    const shortNetRevenue = shortGrossRevenue - cost
    const shortRoi = (shortNetRevenue / cost)

    //lifetime ROI
    const carsRetained = increasedCarCount * this.state.retention
    const customerValue = this.state.visits * this.state.aro * this.state.years
    const ltv = customerValue + (this.state.referrals * customerValue)
    const longGrossRevenue = ltv * carsRetained
    const longNetRevenue = longGrossRevenue - cost
    const longRoi = longNetRevenue / cost

    return(
      <>
        <TopBar />
        <Hero />
        <Padding />
        <RoiLayout>
          <h2>Immediate ROI</h2>
          <p className='padding-m'>At Mail Shark, we define Immediate ROI as revenue earned through a 1-6+ month period after your last mailer was sent out. It’s important you remain patient and give your direct mail marketing time to work. </p>
          <CalcBox
              mainTitle='Estimated Immediate ROI'
              mainValue={numeral(shortRoi).format('$0,0.00')}
              leftTitle='Increased Car Count'
              leftValue={numeral(increasedCarCount).format('0,0')}
              rightTitle='Immediate Revenue'
              rightValue={numeral(shortNetRevenue).format('$0,0')}
          />
          <Slider
              label='Average Repair Order'
              min={200}
              max={2000}
              format='$0,0'
              step={25}
              value={this.state.aro}
              onChange={this.changeAro}
          />
          <Slider
              label='Quantity Mailed'
              min={3000}
              max={50000}
              format='0,0'
              step={1000}
              value={this.state.quantity}
              onChange={this.changeQuantity}
          />
          <Slider
              label='Response Rate'
              min={.0025}
              max={.05}
              format='0.00%'
              step={.0025}
              value={this.state.response}
              onChange={this.changeResponse}
          />
          <p className='caption text-60'>A 0.5% is the targeted benchmark response rate. However, with the right creative, mailing list, CTA and strategy, this number can certainly be exceeded as well. You can get a lower response right such as ¼% and still have the campaign be quite successful based on the dollar amount repair orders and revenue generated.</p>
        </RoiLayout>
        <Padding />
        <RoiLayout>
          <h2 className='padding-s'>Lifetime ROI</h2>
          <p className='padding-m'>Throughout your shop’s lifetime, customers gained from a mailer earn you increased revenue as they keep coming back for years and refer your business to friends and family. By understanding the power of referrals and customer retention, we can calculate the enormous total lifetime revenue earned from a direct mail marketing campaign.</p>
          <CalcBox
              mainTitle='Estimated Lifetime ROI'
              mainValue={numeral(longRoi).format('$0,0.00')}
              leftTitle='Customer Lifetime Value'
              leftValue={numeral(ltv).format('$0,0')}
              rightTitle='Lifetime Revenue'
              rightValue={numeral(longNetRevenue).format('$0,0')}
          />
          <Slider
              label='Number of visits a customer makes per year'
              min={1}
              max={5}
              step={1}
              value={this.state.visits}
              onChange={this.changeVisits}
          />
          <Slider
              label='Average number of years you keep a customer'
              min={1}
              max={10}
              step={1}
              value={this.state.years}
              onChange={this.changeYears}
          />
          <Slider
              label='Average number of referrals made by one customer'
              min={1}
              max={10}
              step={1}
              value={this.state.referrals}
              onChange={this.changeReferrals}
          />
          <Slider
              label='Retention Rate'
              min={.6}
              max={1}
              format='00%'
              step={.05}
              value={this.state.retention}
              onChange={this.changeRetention}
          />
        </RoiLayout>
        <Padding />
        <section id='cta'>
          <h2>Start with no money down</h2>
          <p>We finance the cost of your mailing area analysis, mailing list, artwork, printing, postal sorting, and delivery. You don’t pay a dime until we pay the post office for your first week’s mailing.</p>
          <div>
            <button className='button_contained orange'>Sign up</button>
            <button className='button_text'>Email me results</button>
          </div>
        </section>
        <Padding />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));