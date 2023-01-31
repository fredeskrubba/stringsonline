import React from 'react'
import SideNav from '../components/sideNav/SideNav'
import Header from '../components/header/Header'
import usefavouriteStore from '../components/favourites/favouriteStore'
import { useEffect } from 'react'
import Favourites from '../components/favourites/Favourites'

const Home = () => {

  
  const fetchFavourites = usefavouriteStore((state)=>state.fetchFavourites)
  useEffect(() => {
    fetchFavourites("https://api.mediehuset.net/stringsonline/")
  }, []);
  
  
  return (
    <main>
      <section className='current-page'>
        Forside
      </section>
      <div className='hero-grid'>
        <SideNav/>
        <Header/>
      </div>
      <Favourites/>
    </main>
  )
}

export default Home