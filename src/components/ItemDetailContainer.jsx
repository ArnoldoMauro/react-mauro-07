import React, {useState, useEffect} from 'react';
import products from '../data/product';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Item from './Item';
import ItemCount from './ItemCount';
import {useContext} from 'react';
import {cartContext} from '../App';


function getSingleItems(idURL) {
    const promesa = new Promise ((resolve, reject) => {
        setTimeout(
            () => {
            const encontrado = products.find(item => {
                return(products.id === parseInt(idURL))    
            })
            resolve(encontrado)
            }, 2000)
    });
    return promesa;
}

function ItemDetailContainer () {
    const [product, setProduct] = useState ([]); //useState actualiza el estado del componente 

    let {id} = useParams();
    console.log(id);
    const {cart} = useContext(cartContext);
    console.log("Cart:", cart)

    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
        () => {
            // resolve
            getSingleItems(id).then((respuesta) => {
                console.log("promesa cumplida", respuesta)
                setProduct(respuesta)
            })
        }, []
    );

        function onAddToCart(count) {
            console.log("Agregaste al carrito este producto", product.title)
            console.log("Cantidad seleccionada", count)
            cart.push(product);
        }

    return (
        <>
        <ItemDetail product={product} />
        <ItemCount onAddToCart={onAddToCart} />
        </>
    );  
}

export default ItemDetailContainer;