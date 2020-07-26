import React from 'react'

//import styles
import styles from './hero.module.scss'

//import images
import wave from '../../images/wave.svg'

export default function hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.intro}>
                        <h2>Auto Repair</h2>
                        <h1>Direct Mail ROI Calculator</h1>
                        <p>Our powerful Auto Repair Direct Mail ROI calculator gives you the ability to calculate the real value of your customers and forecast the potential ROI that direct mail can produce based on your shop’s exact numbers.</p>
                    </div>
                    <div className={styles.math}>
                        <h3>We did the math</h3>
                        <p>After crunching the numbers, we went ahead and pre-populated the fields below with industry averages. Please adjust the inputs to your shop’s numbers to see your most accurate potential ROI calculation.</p>
                    </div>
                </div>
            </div>

            <div className={styles.wave} style={{backgroundImage: `url(${wave})`}}/>
            
        </section>
    )
}
