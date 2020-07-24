import React from 'react'

export default function calcBox({
    mainTitle,
    mainValue,
    leftTitle,
    leftValue,
    rightTitle,
    rightValue
}) {
    return (
        <div className='calc-box'>
            <div className='calc-box__main'>
                <p>{mainTitle}</p>
                <h2>{mainValue}</h2>
                <p className='caption'>For every $1.00 spent on direct mail you receive {mainValue} in revenue.</p>
            </div>
            <div className='calc-box__sub'>
                <div>
                    <p>{leftTitle}</p>
                    <h3>{leftValue}</h3>
                </div>
                <div>
                    <p>{rightTitle}</p>
                    <h3>{rightValue}</h3>
                </div>
            </div>
            
        </div>
    )
}
