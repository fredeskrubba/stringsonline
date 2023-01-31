import React from 'react'

const FavouriteCard = ({info}) => {
    console.log(info)
    return (
        <div className='favourite-card'>
            <img src={info.image_fullpath} alt={info.name} />
            <figure>
                <h4>{info.name}</h4>
                <p>{info.description_short}</p>
                <div className='price-cont'>
                    <p>Pris: DKK {info.price}</p>
                    <button>Læg i kurv</button>
                </div>
            </figure>
        </div>
    )
}

export default FavouriteCard