import React, { Component } from 'react'

import styles from './topBar.module.scss'

import logo from '../../images/logo.svg'
import menuIcon from '../../images/icon-menu.svg'

export default class topBar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <button id='menu' className='button_icon'><img src={menuIcon} alt='menu' /></button>
                        <img className={styles.logo} src={logo} alt='Mail Shark logo' />
                    </div>
                    <div className={styles.right}>
                        <button className='button_contained vivid'>Sign up</button>
                    </div>
                </div>
                
            </nav>
        )
    }
}
