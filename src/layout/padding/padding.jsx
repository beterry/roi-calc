import React from 'react'

import styles from './padding.module.scss'

export default function padding({size='section'}) {
    return (
        <div className={styles[`padding-${size}`]} />
    )
}
