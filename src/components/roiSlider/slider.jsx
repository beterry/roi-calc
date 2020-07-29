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

    const railWidthBefore = `${((value / (max-min)) - (min / (max-min))) * 100}%`
    const railWidthAfter = `${(1-((value / (max-min)) - (min / (max-min)))) * 100}%`

    return (
        <div className={styles.slider}>
            <div className={styles.labels}>
                <label htmlFor={label}>{label}</label>
                <label htmlFor={label}>{numeral(value).format(format)}</label>
            </div>
            <div className={styles.slider_wrapper}>
                <div className={styles.rail_before} style={{width: railWidthBefore}} />
                <div className={styles.rail_after} style={{width: railWidthAfter}} />
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
            <div className={styles.range}>
                <p className='caption'>{numeral(min).format(format)}</p>
                <p className='caption'>{numeral(max).format(format)}</p>
            </div>
        </div>
    )
}
