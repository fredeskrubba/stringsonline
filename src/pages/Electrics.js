import React from 'react'
import CurrentPage from "../components/currentPage/Currentpage"
import SideNav from '../components/sideNav/SideNav'

const Electrics = () => {
  return (
    <main>
        <CurrentPage currentPage={"Forside/Guitarer/Elektriske"}/>
        <div className='hero-grid'>
        <SideNav/>
        <section className=''>
            
        </section>
      </div>
    </main>
  )
}

export default Electrics