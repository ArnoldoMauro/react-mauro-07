import React from 'react'
import { useParams } from "react-router-dom";

function Checkout() {
  const { orderId } = useParams(); // obtén orderId de la URL
  return (
    <div>
      <h2>Gracias por tu compra</h2>
      <br></br>
      <h4>Tu compra se realizó correctamente. Tu ticket es: {orderId}</h4>
    </div>
  )
}

export default Checkout;
