import React from 'react'
import { useParams } from "react-router-dom";

function Checkout() {
  const { orderid } = useParams(); // obtén orderId de la URL
  return (
    <div>
      <h2>Gracias por tu compra</h2>
      <br></br>
      <h4>Tu compra se realizó correctamente. Tu ticket es: { orderid }</h4>
    </div>
  )
}

export default Checkout;
