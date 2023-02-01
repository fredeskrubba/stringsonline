import React from 'react'
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg'

const Currentpage = ({currentPage}) => {
  return (
    <section className='current-page'>
        <HomeIcon/>
        <p>{currentPage}</p>
    </section>
  )
}

export default Currentpage