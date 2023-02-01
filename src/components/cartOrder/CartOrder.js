import React from 'react'
import { ReactComponent as CancelIcon } from "../../assets/images/cancel-icon.svg"
const CartOrder = ({order}) => {
    let price = 0
  return (
    <div className='order'>
        <img src={order.img} alt={order.alt}/>
        <section className='order-info'>
          <h2>{order.name}</h2>
          <div className='amount'>
              <p>antal:</p>
              <section className='amount-slider'>
                <div className='btn-minus button'>-</div>
                <p>1</p>
                <div className='btn-plus button'>+</div>
              </section>
              <p className='current-price'>DKK {price}</p>
              <div className='remove'>
                <CancelIcon/>
              </div>
          </div>
        </section>
    </div>
  )
}

export default CartOrder