import React, {useState} from 'react'
import '../../styles/payment-method.css'
import masterCard from '../../assets/images/master-card.jpg'
import payPal from '../../assets/images/paypal.jpg'

const PaymentMethod = () => {

    const [value, setValue] = useState(false)

    const radioHandler = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }





  return <>
    <div className="payment">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input onChange={e => radioHandler(e)} checked={value === 'bank-transfer' ? true : false} type="radio" value='bank-transfer'/>Direct Bank Transfer
        </label>
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-content-beetwen">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input onChange={e => radioHandler(e)} checked={value === 'mastercard' ? true : false} type="radio" value='mastercard'/>MasterCard
        </label>
        <img src={masterCard} alt="" />
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-content-beetwen">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input onChange={e => radioHandler(e)} checked={value === 'paypal' ? true : false} type="radio" value='paypal'/>PayPal
        </label>
        <img src={payPal} alt="" />
    </div>
    <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
    </div>
  </>
}

export default PaymentMethod