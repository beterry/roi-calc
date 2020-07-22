import React from 'react'

export default function slider({
    label,
    min,
    max,
    step,
    value,
    onChange
}) {
    return (
        <div className='slider_wrapper'>
            <div className='slider_labels'>
                <label htmlFor={label}>{label}</label>
                <label htmlFor={label}>${value}</label>
            </div>
            <input
                type='range'
                id={label}
                name={label}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}
