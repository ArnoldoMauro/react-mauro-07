import { createContext, useState } from 'react';
import useDeepCopy from '../components/hooks/useDeepCopy';

export const cartContext = createContext ({}); //eliminamos el valor por defecto
const Provider = cartContext.Provider;

//creamos el Provider
export function CartProvider(props){
    const [cart, setCart] = useState([]);
    const newCart = useDeepCopy(cart); //hacemos una copia del array cart en una variable newCart, para no modificar el original
    
    // cart -> inmutable
    function addItem(product, countFromCounter){
        
        if (isItemInCart(product.id)) {
          const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === product.id);
          newCart[itemIndex].count += countFromCounter; 
        } else {
          newCart.push({...product, count: countFromCounter});
        }
        setCart(newCart); //actualizamos el estado del carrito
    }   
    
    function isItemInCart(id) {
      return 
        cart.some((itemInCart) => itemInCart.id === id);
    }

    function getCountInCart(id) {
      const item = cart.find((itemInCart) => itemInCart.id === id);
      return item ? item.count : 0;
    }

    function getPriceInCart(){
        let total = 0;
        cart.forEach(item => {
          const count = item.count ?? 0; // asignamos 0 si item.count es nulo o indefinido
        const price = item.price ?? 0; // asignamos 0 si item.price es nulo o indefinido
        total += count * price;
        //   if (item.count && item.price && !isNaN(item.count) && !isNaN(item.price)) {
        //     total += parseInt(item.count) * parseInt(item.price);  
        });
        console.log("array cart:", cart)
        return total;
    }      
    
    function removeItem(idToDelete){
      setCart(cart.filter((item) => item.id !== idToDelete));
    }

    return(
        <Provider value={{ cart: cart, addItem: addItem, getPriceInCart, getCountInCart, removeItem }} > 
            {props.children}
        </Provider>
    )
}