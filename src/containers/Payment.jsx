import React, {useContext} from 'react'
import {PayPalButton} from 'react-paypal-button-v2'
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'

const Payment = ({history}) => {
  const {state, addNewOrder} = useContext(AppContext)
  const {cart, buyer} = state

  const paypalOptions ={
    clientId: 'ARV6onCI9O16n1NWwRHwvFX7mf0DcfKfqvjcnFpMA3BaRv2wQnjeLajUzzQXI2-fYyZZV0p9IVRqURs2',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder ={
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item)=>(
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOption={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onStart={()=> console.log('Start paym3nt')}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log('Payment error', error)}
            onCancel={()=> console.log('Payment cancel')}
            >

          </PayPalButton>
        </div>
        
      </div>
    </div>
  )
}

export default Payment


