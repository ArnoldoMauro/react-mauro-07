import React, {useContext} from "react";
import {cartContext} from '../../context/cartContext';

function CartContainer() {
    const context = useContext(cartContext);
    const cart = context.cart;
    const getPriceInCart = context.getPriceInCart;
    
    // 1. Rendering condicional -> si el carrito está vacio mostrar mensaje "volver al home"
    // 2. Desglose del carrito -> mostrar el contenido
    return (
    <div>
        <h1>Tu carrito</h1>
        { cart.map((item) => (
        <><h3>{item.title}</h3>
            <p>Cantidad: {item.count}</p>
            <p>Precio: {item.price}</p>
        </> 
        ))}
        <span>El total de tu compra es: {getPriceInCart()}</span>
    </div>
    )
}

export default CartContainer;