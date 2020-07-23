import React from 'react'
import numeral from 'numeral'

//import components
import Slider from '../components/slider'
import CalcBox from '../components/calcBox'

export default function shortRoi({
    aro,
    quantity,
    response,
    changeAro,
    changeQuantity,
    changeResponse
}) {
    const increasedCarCount = quantity * response
    const grossRevenue = increasedCarCount * aro
    const cost = 2150
    const netRevenue = grossRevenue - cost
    const roi = (netRevenue / cost)
    return (
        <section className='roi_layout'>
            <h2 className='padding-s'>Immediate ROI</h2>
            <p className='padding-m'>At Mail Shark, we define Immediate ROI as revenue earned through a 1-6+ month period after your last mailer was sent out. It’s important you remain patient and give your direct mail marketing time to work. </p>
            <CalcBox
                mainTitle='Immediate ROI'
                mainValue={numeral(roi).format('$0,0.00')}
            />
            <Slider
                label='Average Reapir Order'
                min={200}
                max={2000}
                format='$0,0.00'
                step={25}
                value={aro}
                onChange={changeAro}
            />
            <Slider
                label='Quantity Mailed'
                min={3000}
                max={50000}
                format='0,0'
                step={1000}
                value={quantity}
                onChange={changeQuantity}
            />
            <Slider
                label='Response Rate'
                min={.0025}
                max={.05}
                format='0.00%'
                step={.0025}
                value={response}
                onChange={changeResponse}
            />
        </section>
    )
}
