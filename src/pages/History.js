import React from 'react'
import SideNav from '../components/sideNav/SideNav'
import Currentpage from '../components/currentPage/Currentpage'
import HistoryOrder from '../components/historyOrder/HistoryOrder'

const History = () => {

    const orders = [{
        date: "26. marts 2020",
        price: 38000,
        nr: 89982
    }]
  return (
    <main>
    <Currentpage currentPage={"Forside/Ordrehistorik"}/>
      <div className='hero-grid'>
        <SideNav/>
        <section className='history'>
            {orders.map((order)=>{
                return <HistoryOrder order={order}/>
            })}
        </section>
      </div>
      
    </main>
  )
}

export default History