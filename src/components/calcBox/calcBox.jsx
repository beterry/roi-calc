import React from 'react'

import styles from './calcBox.module.scss'

export default function calcBox({
    mainTitle,
    mainValue,
    leftTitle,
    leftValue,
    rightTitle,
    rightValue
}) {
    return (
        <div className={styles.box}>
            <div className={styles.main}>
                <p>{mainTitle}</p>
                <h2>{mainValue}</h2>
                <p className='caption'>For every $1.00 spent on direct mail you receive {mainValue} in revenue.</p>
            </div>
            <div className={styles.sub}>
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
