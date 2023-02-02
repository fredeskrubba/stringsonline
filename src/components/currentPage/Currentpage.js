import React from 'react'
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg'
import { Link } from 'wouter'

const Currentpage = ({currentPage, orderHistory}) => {
  return (
    <section className='current-page'>
        <HomeIcon/>
        <p>{currentPage}</p>
        {orderHistory === true && 
          <Link href='/history' >
            <a className='history-btn'>
              Ordrerhistorik
            </a>
          </Link>
        }
    </section>
  )
}

export default Currentpage