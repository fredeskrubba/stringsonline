import React from 'react'
import SideNav from '../components/sideNav/SideNav'
import Header from '../components/header/Header'
import usefavouriteStore from '../components/favourites/favouriteStore'
import { useEffect } from 'react'
import Favourites from '../components/favourites/Favourites'
import Currentpage from '../components/currentPage/Currentpage'

const Home = () => {

  
  const fetchFavourites = usefavouriteStore((state)=>state.fetchFavourites)
  useEffect(() => {
    fetchFavourites("https://api.mediehuset.net/stringsonline/")
  }, []);
  
  
  return (
    <main>
    <Currentpage currentPage={"Forside"}/>
      <div className='hero-grid'>
        <SideNav/>
        <Header/>
      </div>
      <Favourites/>
    </main>
  )
}

export default Home