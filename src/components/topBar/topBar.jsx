import React, { Component } from 'react'

import styles from './topBar.module.scss'

//import icons
import logo from '../../images/logo.svg'
import {MdArrowDropDown, MdMenu} from 'react-icons/md'

const NavLink = ({label, link}) => (
    <a
        href={link}
    >
        {label}
    </a>
)

const DropdownMenu = ({label, link, children}) => (
    <div className={styles.dropdown}>
        <a
            href={link}
        >
            {label}
        </a>
        <MdArrowDropDown size='1.5rem'/>
        <div className={styles.dropdown_content}>
            {children}
        </div>
    </div>
)

export default class topBar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <button className={`button_icon ${styles.menu}`}><MdMenu size='1.5rem' /></button>
                        <img className={styles.logo} src={logo} alt='Mail Shark logo' />
                        <div className={styles.links}>
                            <NavLink label='About Us' link='https://www.themailshark.com/about/' />
                            <DropdownMenu label='Products & Pricing' link='https://www.themailshark.com/products/'>
                                <NavLink label='Postcards' link='https://www.themailshark.com/products/postcards/' />
                                <NavLink label='Postcard Magnets' link='https://www.themailshark.com/products/postcard-magnets/' />
                                <NavLink label='Scratch-Off Postcards' link='https://www.themailshark.com/products/scratch-off-postcards/' />
                                <NavLink label='Plastic Postcards' link='https://www.themailshark.com/products/plastic-postcards/' />
                                <NavLink label='Menus' link='https://www.themailshark.com/products/menus/' />
                                <NavLink label='Brochures' link='https://www.themailshark.com/products/brochures/' />
                                <NavLink label='Letters' link='https://www.themailshark.com/products/letters/' />
                            </DropdownMenu>
                            <DropdownMenu label='Direct Mail Services' link='https://www.themailshark.com/direct-mailing-services/'>
                                <NavLink label='Our Strategy' link='https://www.themailshark.com/our-strategy/' />
                                <NavLink label='Mailing Lists' link='https://www.themailshark.com/direct-mailing-services/mailing-lists/' />
                                <NavLink label='Every Door Direct Mail' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
                                <NavLink label='Design' link='https://www.themailshark.com/design-services/' />
                                <NavLink label='Print' link='https://www.themailshark.com/printing-services/' />
                            </DropdownMenu>
                            <NavLink label='Resources' link='https://www.themailshark.com/resources/' />
                        </div>
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
