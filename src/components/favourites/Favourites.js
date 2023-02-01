import React from 'react'
import FavouriteCard from './FavouriteCard'
import usefavouriteStore from './favouriteStore'

const Favourites = () => {
    const favourites = usefavouriteStore((state)=>state.favourites)
    return (
        <section className='favourites-section'>
            <h2>Kundernes <b>favoritter</b></h2>
            <div className='favourites-grid'>
            
            {favourites !== undefined ? favourites.productgroups.items[0].subgroups[0].products.map((favourite)=>{
                return <FavouriteCard info={favourite}/>
                }): "no favourites" }
            </div>
        </section>
    )
}

export default Favourites