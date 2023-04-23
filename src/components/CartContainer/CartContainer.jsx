import React, {useContext} from "react";
import Button from '../Button';
import {cartContext} from '../../context/cartContext';
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import '../../css/item.css';
import FormCheckout from './FormCheckout';

function CartContainer() {
    
    const context = useContext(cartContext);
    const cart = context.cart;
    const getPriceInCart = context.getPriceInCart;
    const removeItem = context.removeItem;    
    const navigateTo = useNavigate();
    
    
  async function handleCheckout(userData){
    const order = {
      items: cart,
      buyer: userData,
      total: getPriceInCart(),
      date: new Date(), 
    }
    const orderId = await createOrder(order);
    // redireccionar
    navigateTo(`/checkout/${orderId}`);
    clearCart() //vuelve a cero el estado del carrito cuando finaliza la compra
  }
  
  

// ------------------------------------
return (
  <> <h2 className="title-center">Tu Carrito</h2>
    <br></br>
    <table className="cartList">
      <thead className="cartList_head">
        <tr className="cartList_row">
          <th>Miniatura</th>
          <th>Título</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Remover</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        { cart.map((item) => (
          <tr key={item.id} className="cartList_row">  
            <td>
              <img height={60} src={item.image} alt={item.title} />
            </td>        
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>{item.count}</td>

            <td>
              <Button color="#c63224" onPress={() => removeItem(item.id)}>
                X
              </Button>
            </td>

            <th>$ {item.price * item.count}</th>
          </tr>
        ))}        
      </tbody>  
    </table>

    <div className="cartList_detail">
      <h4>El total de tu compra es de $ {getPriceInCart()}</h4>
      <br></br>
      
    </div>
    <br></br>
    
    <FormCheckout onCheckout={handleCheckout}/>
    
  </>
  );
  }  

export default CartContainer;