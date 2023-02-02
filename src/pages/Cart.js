import React from 'react'
import SideNav from '../components/sideNav/SideNav'
import Currentpage from '../components/currentPage/Currentpage'
import CartOrder from '../components/cartOrder/CartOrder'
import test from "../assets/images/hero-banner.png" 



const Cart = () => {
  
  const orders = [{
    name: "guitar",
    price: 3000,
    img: test,
    alt: "test"
  }]
  const sum = 42
  return (
    <main>
        <Currentpage currentPage={"Forside/Indkøbskurv"} orderHistory={true}/>
        <div className='cart-grid'>
            <SideNav/>
            <section className='orders'>
              {orders.map((order)=>{
                return <CartOrder order={order}/>
              })}
            </section>
        </div>
        <div className='sum-section'>
          <div className='sum-info'>
            <h4>BELØB</h4>
            <div className='sum'>
              <h4>DKK {sum}</h4>
              <p>prisen er inkl. moms</p>
            </div>
            <div className='clear'>
              RYD
            </div>
          </div>
          <div className='checkout-btn'>
            TIL KASSEN
          </div>
        </div>
    </main>
  )
}

export default Cart