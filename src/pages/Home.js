import React from 'react'
import SideNav from '../components/sideNav/SideNav'
import Header from '../components/header/Header'

const Home = () => {
  return (
    <main>
      <section className='current-page'>
        Forside
      </section>
      <div className='hero-grid'>
        <SideNav/>
        <Header/>
      </div>
    </main>
  )
}

export default Home