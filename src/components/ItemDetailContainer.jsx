import React, {useState, useEffect} from 'react';
import products from '../data/productBackup';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader/Loader';
import ItemCount from './ItemCount';
import {useContext} from 'react';
import { cartContext, CartProvider } from  '../context/cartContext';
import {getSingleItem} from '../services/firestore';


function ItemDetailContainer () {
    const [product, setProduct] = useState ({}); //useState actualiza el estado del componente 
    const [addedToCart, setaddedToCart] = useState(false);
    let {id} = useParams();
    
    const {cart, addItem, getCountInCart} = useContext(cartContext);
   
    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
        () => {
            // resolve
            getSingleItem(id).then((respuesta) => {
                console.log("promesa cumplida", respuesta)
                setProduct(respuesta)
            })
        }, [id]
    );

     // si el array products está vacìo, renderiza el componente <Loader />
     if (products.length === 0) {
      return <Loader />
    }
        
        function onAddToCart(count) {
            console.log("Agregaste al carrito este producto:", product.title)
            console.log("Cantidad pedida:", count)
            addItem(product, count);
        }

        const countInCart = getCountInCart(product.id);

    return (
        <>
        <ItemDetail product={product} />
        
        <ItemCount 
            stock={product.stock - countInCart} onAddToCart={onAddToCart}
        />
        </>
    );  
}

export default ItemDetailContainer;