import { createContext, useState } from 'react';

export const cartContext = createContext ({}); //eliminamos el valor por defecto
const Provider = cartContext.Provider;


//custom Provider
export function CartProvider(props){
    const [cart, setCart] = useState([])
    // cart -> inmutable

    function addItem(product, count){
        const newCart = [...cart]; //hace una copia del array cart en una variable newCart, para no modificar el original 
        newCart.push({...product, count})
        setCart(newCart); //actualizamos el estado del carrito
    }

    function getPriceInCart(){
        let pricetotal = 0;
        cart.forEach(item => {
            pricetotal += parseInt((item.count)*(item.price));
        });
        return pricetotal;
    }    

    function getCountInCart(){
        let total = 0;
        cart.forEach(item => {
            total += item.count;
        });
        return total;
    }    
    
    return(
        <Provider value={{ cart, addItem, getPriceInCart, getCountInCart }} > 
            {props.children}
        </Provider>
    )
}



 