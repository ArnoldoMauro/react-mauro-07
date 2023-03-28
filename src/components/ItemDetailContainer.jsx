import React, {useState, useEffect} from 'react';
import products from '../data/product';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';


function getSingleItems(idURL) {
    const promesa = new Promise ((resolve, reject) => {
        setTimeout(
            () => {
            const encontrado = products.find(item => {
                return(item.id === parseInt(idURL))    
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
    return (
        <ItemDetail product = {product} />    
    );  
}

export default ItemDetailContainer;