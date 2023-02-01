import React from 'react'

const FavouriteCard = ({info}) => {
    console.log(info)
    if (info.name !== 'Affinity Stratocaster MN Black'){
        return (
        <div className='favourite-card'>
            <img src={info.image_fullpath} alt={info.name} />
            <div className='info-box'>
                <h4>{info.name}</h4>
                <p>{info.description_short} <p className='read-more'>Læs mere</p></p>
                <div className='price-cont'>
                    <p className='price'>Pris: DKK {info.price}</p>
                    <button>Læg i kurv</button>
                </div>
            </div>
        </div>
    )
    }
    
}

export default FavouriteCard