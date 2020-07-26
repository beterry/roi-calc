import React from 'react'

import styles from './roi.module.scss'

export default function shortRoi({children}) {
    return (
        <section className={styles.layout_roi}>
            <div className={styles.left}>
                {children}
            </div>
        </section>
    )
}