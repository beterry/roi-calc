import React from 'react'

export default function calcBox({
    mainTitle,
    mainValue
}) {
    return (
        <div className='calc-box'>
            <p>{mainTitle}</p>
            <h2>{mainValue}</h2>
        </div>
    )
}
