import React from 'react'
import "../../styles/output.css"
import {Link} from "wouter"
import { useState } from 'react'

const SideNav = () => {
    const [showGuitarLinks, setShowGuitarLinks] = useState("sub-links-hidden")
  return (
    <section className='side-nav'>
            <p onClick={()=>{
                showGuitarLinks === "sub-links-hidden" ? setShowGuitarLinks("sub-links-show") : setShowGuitarLinks("sub-links-hidden")
            }}>Guitarer</p>
            <div className={showGuitarLinks}>
                <Link href='/guitars/accoustics'>
                    <a>Akustiske</a>
                </Link>
                <Link href='/guitars/electrics'>
                    <a>Elektriske</a>
                </Link>
            </div>
        
        <Link href='/basses'>
            <a>Basser</a>
        </Link>
        <Link href='/handmade'>
            <a>Handmade</a>
        </Link>
        <Link href='/keyboards'>
            <a>Keyboards</a>
        </Link>
        <Link href='/drums'>
            <a>Trommer</a>
        </Link>
        <Link href='/percussion'>
            <a>Percussion</a>
        </Link>
        <Link href='/stroke'>
            <a>Stryg & Blæs</a>
        </Link>
        <Link href='/brands'>
            <a>Brands</a>
        </Link>
    </section>
  )
}

export default SideNav