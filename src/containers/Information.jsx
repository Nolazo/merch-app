import React from 'react'
import '../styles/components/Information.css'

const Information = () => {
  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto :</h2>
        </div>
        <div className="Information-form">
          <form action="">
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
            Regresar
          </div>
          <div className="Information-next">
            pagar
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className='Information-element'>
            <h4>ITEM Name</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information