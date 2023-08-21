import React from 'react'
import '../../styles/payment-method'
import masterCard from '../../assets/images/master-card.jpg'
import payPal from '../../assets/images/paypal.jpg'

const PaymentMethod = () => {
  return <>
    <div className="payment">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />Direct Bank Transfer
        </label>
    </div>
    <div className="payment mt-3">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />
        </label>
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-content-beetwen">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />MasterCard
        </label>
        <img src={masterCard} alt="" />
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-content-beetwen">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />PayPal
        </label>
        <img src={payPal} alt="" />
    </div>
    <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
    </div>
  </>
}

export default PaymentMethod