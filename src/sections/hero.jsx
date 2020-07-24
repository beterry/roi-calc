import React from 'react'

import wave from '../images/wave.svg'

export default function hero() {
    return (
        <section className='hero padding-l'>
            <div className='layout_margins'>
                <div className='hero_text'>
                    <h2>Auto Repair</h2>
                    <h1 className='padding-s'>Direct Mail ROI Calculator</h1>
                    <p className='padding-m'>Our powerful Auto Repair Direct Mail ROI calculator gives you the ability to calculate the real value of your customers and forecast the potential ROI that direct mail can produce based on your shop’s exact numbers.</p>
                    <h3 className='padding-s'>We did the math</h3>
                    <p>After crunching the numbers, we went ahead and pre-populated the fields below with industry averages. Please adjust the inputs to your shop’s numbers to see your most accurate potential ROI calculation.</p>
                </div>
            </div>

            <img id='wave' src={wave} alt='wave graphic' />

        </section>
    )
}
