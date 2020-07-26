import React from 'react'
import numeral from 'numeral'

import styles from './slider.module.scss'

export default function slider({
    label,
    min,
    max,
    format='0',
    step,
    value,
    onChange
}) {
    return (
        <div className={styles.slider}>
            <div className={styles.labels}>
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
            <div className={styles.range}>
                <p className='caption'>{numeral(min).format(format)}</p>
                <p className='caption'>{numeral(max).format(format)}</p>
            </div>
        </div>
    )
}
