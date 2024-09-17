import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
  return (
    <nav className={` ${sticky ? 'dark-nav' : ''}`}>
        <div className='logo-title'>
        <img src={logo} alt="" className='logo'/>
        <p>Edusity</p>
        </div>
        <ul>
            <li><Link to='hero-sec' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='contact-btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar