import React, {useRef, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = ({history}) => {
  const {state, addToBuyer} = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate()
  const {cart} = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    }
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto :</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre' name="name" id="" />
            <input type="text" placeholder='Correo' name="email" id="" />
            <input type="text" placeholder='Direccion' name="address" id="" />
            <input type="text" placeholder='Dpto' name="dpto" id="" />
            <input type="text" placeholder='Ciudad' name="city" id="" />
            <input type="text" placeholder='Pais' name="country" id="" />
            <input type="text" placeholder='Estado' name="state" id="" />
            <input type="text" placeholder='Cod Postal' name="cp" id="" />
            <input type="text" placeholder='Telefono' name="phone" id="" />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item)=>(
          <div className="Information-item" key={item.title}>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
        </div>
        ))} 
      </div>
    </div>
  )
}

export default Information