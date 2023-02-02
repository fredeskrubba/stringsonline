import React from 'react'

const HistoryOrder = ({order}) => {
  return (
    <div className='history-order'>
        <p className='history-date'>{order.date}</p>
        <p className='history-price'>DKK {order.price}</p>
        <p className='history-number'>Ordrenr. <span>{order.nr}</span></p>
    </div>
  )
}

export default HistoryOrder