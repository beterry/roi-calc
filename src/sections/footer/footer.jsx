import React from 'react'

//import styles
import styles from './footer.module.scss'

//import images
import logo from '../../images/logo.svg'
import insta from '../../images/insta.svg'
import facebook from '../../images/fb.svg'

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

const LinkList = ({label, link, children}) => (
    <ul>
        <a href={link}><h5>{label}</h5></a>
        {children}
    </ul>
)

export default function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.contact}>
                    <img src={logo} alt='Mail Shark logo' />
                    <p><a href='tel:4846528359'>(484) 652-8359</a></p>
                    <p>4125 New Holland Rd<br />Mohnton, PA 19540</p>
                </div>
                <div className={styles.grid}>
                    <LinkList label='About' link='https://www.themailshark.com/about/'>
                        <Link label='Meet the Team' link='https://www.themailshark.com/about/team/' />
                        <Link label='Case Studies' link='https://www.themailshark.com/about/case-studies/' />
                        <Link label='Careers' link='https://www.themailshark.com/about/careers/' />
                        <Link label='Contact Us' link='https://www.themailshark.com/contact-us/' />
                    </LinkList>
                    <LinkList label='Products & Pricing' link='https://www.themailshark.com/products/'>
                        <Link label='Postcards' link='https://www.themailshark.com/products/postcards/' />
                        <Link label='Postcard Magnets' link='https://www.themailshark.com/products/postcard-magnets/' />
                        <Link label='Scratch-Off Postcards' link='https://www.themailshark.com/products/scratch-off-postcards/' />
                        <Link label='Plastic Postcards' link='https://www.themailshark.com/products/plastic-postcards/' />
                        <Link label='Menus' link='https://www.themailshark.com/products/menus/' />
                        <Link label='Brochures' link='https://www.themailshark.com/products/brochures/' />
                        <Link label='Letters' link='https://www.themailshark.com/products/letters/' />
                    </LinkList>
                    <LinkList label='Direct Mail Services' link='https://www.themailshark.com/direct-mailing-services/'>
                        <Link label='Our Strategy' link='https://www.themailshark.com/our-strategy/' />
                        <Link label='Mailing Lists' link='https://www.themailshark.com/direct-mailing-services/mailing-lists/' />
                        <Link label='Every Door Direct Mail®' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
                        <Link label='Design' link='https://www.themailshark.com/design-services/' />
                        <Link label='Print' link='https://www.themailshark.com/printing-services/' />
                    </LinkList>
                    <LinkList label='Resources' link='https://www.themailshark.com/resources/'>
                        <Link label='Blog' link='https://www.themailshark.com/type/blog/' />
                        <Link label='Articles' link='https://www.themailshark.com/type/articles/' />
                        <Link label='Guides' link='https://www.themailshark.com/type/guides/' />
                        <Link label='Calculators' link='https://www.themailshark.com/type/calculators/' />
                        <Link label='FAQs' link='https://www.themailshark.com/faq/' />
                    </LinkList>
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
        </footer>
    )
}
