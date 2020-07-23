import React from 'react'
import numeral from 'numeral'

export default function slider({
    label,
    min,
    max,
    format,
    step,
    value,
    onChange
}) {
    return (
        <div className='slider_wrapper'>
            <div className='slider_labels'>
                <label htmlFor={label}>{label}</label>
                <label htmlFor={label}>{numeral(value).format(format)}</label>
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
            <div className='slider_range'>
                <p className='caption'>{numeral(min).format(format)}</p>
                <p className='caption'>{numeral(max).format(format)}</p>
            </div>
        </div>
    )
}
