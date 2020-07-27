import React from 'react'

//import styles
import styles from './footer.module.scss'

//import images
import logo from '../../images/logo.svg'
import insta from '../../images/insta.svg'
import facebook from '../../images/fb.svg'
import wave from '../../images/wave-footer.svg'

//import components
import Padding from '../../layout/padding/padding'

const Link = ({label, link}) => (
    <li>
        <a
            href={link}
            target='_blank'
            rel="noopener noreferrer"
        >
            {label}
        </a>
    </li>
)

export default function footer() {
    return (
        <footer className={styles.footer}>
            <Padding />
            <div className={styles.inner}>
                <div className={styles.contact}>
                    <img src={logo} alt='Mail Shark logo' />
                    <p><a href='tel:4846528359'>(484) 652-8359</a></p>
                    <p>4125 New Holland Rd<br />Mohnton, PA 19540</p>
                </div>
                <div className={styles.grid}>
                    <ul>
                        <h5>About</h5>
                        <Link label='Meet the Team' link='themailshark.com' />
                        <Link label='Case Studies' link='themailshark.com' />
                        <Link label='Careers' link='themailshark.com' />
                        <Link label='Contact Us' link='themailshark.com' />
                    </ul>
                    <ul>
                        <h5>Products & Pricing</h5>
                        <Link label='Postcards' link='themailshark.com' />
                        <Link label='Postcard Magnets' link='themailshark.com' />
                        <Link label='Scratch-Off Postcards' link='themailshark.com' />
                        <Link label='Plastic Postcards' link='themailshark.com' />
                        <Link label='Menus' link='themailshark.com' />
                        <Link label='Brochures' link='themailshark.com' />
                        <Link label='Letters' link='themailshark.com' />
                    </ul>
                    <ul>
                        <h5>Direct Mail Services</h5>
                        <Link label='Our Strategy' link='themailshark.com' />
                        <Link label='Targeted Mailing Lists' link='themailshark.com' />
                        <Link label='Saturation Mailing Lists' link='themailshark.com' />
                        <Link label='Every Door Direct Mail' link='themailshark.com' />
                        <Link label='Direct Mail Printing' link='themailshark.com' />
                    </ul>
                    <ul>
                        <h5>Resources</h5>
                        <Link label='Blog' link='themailshark.com' />
                        <Link label='Articles' link='themailshark.com' />
                        <Link label='Guides' link='themailshark.com' />
                        <Link label='Calcualtors' link='themailshark.com' />
                        <Link label='FAQs' link='themailshark.com' />
                    </ul>
                </div>
                <div className={styles.social}>
                    <a
                        className='button_icon'
                        href='https://www.instagram.com/mail_shark/?hl=en'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={insta} alt='Instagram'/>
                    </a>
                    <a
                        className='button_icon'
                        href='https://www.facebook.com/themailshark'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={facebook} alt='Facebook'/>
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Mail Shark © 2020. All rights reserved | <a href='https://www.themailshark.com/privacy-policy/'>Privacy Policy</a></p>
            </div>
            <Padding size='m' />
            <div className={styles.wave} styles={{backgroundImage: `url('${wave}')`}}/>
        </footer>
    )
}