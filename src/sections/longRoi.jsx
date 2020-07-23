import React from 'react'
import numeral from 'numeral'

//import components
import Slider from '../components/slider'
import CalcBox from '../components/calcBox'

export default function longRoi({
    aro,
    quantity,
    response,
    visits,
    changeVisits,
    years,
    changeYears,
    referrals,
    changeReferrals,
    retention,
    changeRetention
}) {
    
    const increasedCarCount = quantity * response
    const carsRetained = increasedCarCount * retention
    const ltv = (visits * aro * years) + (referrals * (visits * aro * years))
    const grossRevenue = ltv * carsRetained
    const cost = 2150
    const netRevenue = grossRevenue - cost
    const roi = netRevenue / cost

    return (
        <section className='roi_layout'>
            <h2 className='padding-s'>Lifetime ROI</h2>
            <p className='padding-m'>Throughout your shop’s lifetime, customers gained from a mailer earn you increased revenue as they keep coming back for years and refer your business to friends and family. By understanding the power of referrals and customer retention, we can calculate the enormous total lifetime revenue earned from a direct mail marketing campaign.</p>
            <CalcBox
                mainTitle='Lifetime ROI'
                mainValue={numeral(roi).format('$0,0.00')}
            />
            <Slider
                label='Number of visits a customer makes per year'
                min={1}
                max={5}
                step={1}
                value={visits}
                onChange={changeVisits}
            />
            <Slider
                label='Average number of years you keep a customer'
                min={1}
                max={10}
                step={1}
                value={years}
                onChange={changeYears}
            />
            <Slider
                label='Average number of referrals made by one customer'
                min={1}
                max={10}
                step={1}
                value={referrals}
                onChange={changeReferrals}
            />
            <Slider
                label='Retention Rate'
                min={.6}
                max={1}
                format='00%'
                step={.05}
                value={retention}
                onChange={changeRetention}
            />
        </section>
    )
}