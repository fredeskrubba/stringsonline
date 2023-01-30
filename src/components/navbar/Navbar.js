import React from 'react'
import {Link, Route} from "wouter"
import Home from "../../pages/Home"
import {ReactComponent as PhoneIcon} from "../../assets/images/phone-icon.svg"
import {ReactComponent as MailIcon} from "../../assets/images/mail-icon.svg"
import {ReactComponent as CartIcon} from "../../assets/images/cart-icon.svg"
import background from "../../assets/images/header-bg.png" 
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg'
import useNavStore from './navstore'

const Navbar = () => {
    
    const cartItems = useNavStore((state) => state.cartItems)
    
  return (
    <div>
        <nav>
            <img src={background} alt="nav background" className='nav-bg' />
            <article className='nav-links'>
                <Link href="/" className='link-button'>
                    Forside
                </Link>
                <Link href="/test" className='link-button'>
                    Salgs- og handelsbetingelser
                </Link>
                <Link href="/login" className='login-btn'>
                    Login
                </Link>

            </article>
            <section className='search-field'>
                <div className='upper-search'>
                    <div className='upper-search-div'>
                        <MailIcon className='icon'/>
                        <h6>SALES@STRINGSONLINE.COM</h6>
                    </div>
                    <div className='upper-search-div'>
                        <PhoneIcon className='icon'/>
                        <h6>+45 98 12 22 68</h6>
                    </div>
                    <div className='upper-search-div'>
                        <CartIcon className='icon cart-icon'/>
                    </div>
                </div>
                <div className='searchbar-cont'>
                    <input type="text" className='searchbar' placeholder='Indtast søgeord'/>
                    <button><ArrowIcon/></button>
                </div>
            </section>
        </nav>
            <Route path="/">
            <Home/>
            </Route>
    </div>
  )
}

export default Navbar