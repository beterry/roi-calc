import React from 'react'

export default function calcBox({
    mainTitle,
    mainValue
}) {
    return (
        <div className='calc-box'>
            <div>
                <p>{mainTitle}</p>
                <h2>{mainValue}</h2>
                <p className='caption'>For every $1.00 spent on direct mail you receive {mainValue} in revenue.</p>
            </div>
            
        </div>
    )
}
