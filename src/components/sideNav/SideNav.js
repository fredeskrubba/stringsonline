import React from 'react'
import "../../styles/output.css"
import {Link} from "wouter"

const SideNav = () => {
  return (
    <section className='side-nav'>
        <Link href='/guitars/accoustics'>
            <a>Guitarer</a>
        </Link>
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