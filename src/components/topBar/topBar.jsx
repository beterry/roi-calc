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
                        <button className='button_icon'><img src={menuIcon} alt='menu' /></button>
                        <img className={styles.logo} src={logo} alt='Mail Shark logo' />
                        <ul className={styles.links}>
                            <li>
                                <a
                                    href='https://www.themailshark.com/about/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.themailshark.com/products/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Products & Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.themailshark.com/direct-mailing-services/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Direct Mail Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.themailshark.com/resources/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <a
                            href='https://www.themailshark.net/logon.aspx?ReturnUrl=%2f'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            Log in
                        </a>
                        <button className='button_contained vivid'>Get a quote</button>
                    </div>
                </div>
                
            </nav>
        )
    }
}
