import React from 'react'

const Product = ({product}) => {
  return (
    <section className='product'>
      <img src={product.img} alt="test" />
      <div className='product-info'>
        <div className='description-cont'>
          <h2>{product.name}</h2>
          <p>{product.description} <span>Læs mere</span></p>
        </div>
        <div className='add-container'>
          <p className='price'>Pris: DKK {product.price}</p>
          <p className='cart-add'>Læg i kurv</p>
          <p className='stock'>{product.stock >= 5 ? "5+ på lager" : `${product.stock} på lager`}</p>
        </div>
      </div>
    </section>
  )
}

export default Product