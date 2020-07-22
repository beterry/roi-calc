import React from 'react'

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
        <div>
            <CalcBox
                mainTitle='Immediate ROI'
                mainValue={roi}
            />
            <Slider
                label='Average Reapir Order'
                min={200}
                max={2000}
                step={25}
                value={aro}
                onChange={changeAro}
            />
            <Slider
                label='Quantity Mailed'
                min={3000}
                max={50000}
                step={1000}
                value={quantity}
                onChange={changeQuantity}
            />
            <Slider
                label='Response Rate'
                min={.0025}
                max={.05}
                step={.0025}
                value={response}
                onChange={changeResponse}
            />
        </div>
    )
}
