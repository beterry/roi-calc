import React, { Component } from 'react'

import logo from '../images/logo.svg'
import menuIcon from '../images/icon-menu.svg'

export default class topBar extends Component {
    render() {
        return (
            <nav>
                <div className='layout_margins nav_wrapper'>
                    <div className='nav_left'>
                        <button id='menu' className='button_icon'><img src={menuIcon} alt='menu' /></button>
                        <img id='logo' src={logo} alt='Mail Shark logo' />
                    </div>
                    <div className='nav_right'>
                        <button className='button_contained vivid'>Sign up</button>
                    </div>
                </div>
                
            </nav>
        )
    }
}
