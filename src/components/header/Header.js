import React from 'react'
import "../../styles/output.css"
import heroBanner from "../../assets/images/hero-banner.png"
import { Link } from 'wouter'

const Header = () => {
  return (
    <Link href='/'>
        <a>
            <img src={heroBanner} alt="hero banner" className='hero-banner' />  
        </a>
    </Link>
  )
}

export default Header