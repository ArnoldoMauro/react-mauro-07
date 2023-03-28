import React, {useState, useEffect} from 'react';
import '../App';
import './Cards';
import '../App.css';
import Cards from './Cards'
import products from '../data/product';

// ------Mock Async Service (Asincronia)------
function getItems() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (products)
        }, 2500);
    });
    return promesa;
}

// ------------------------------
// ----Componente contenedor ---- (estado, manejo de datos, fetch)
function ItemListContainer(props) {
    const [products, setProducts] = useState ([]);
    console.log("Renderizando....")
    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
        () => {
            // resolve
            getItems().then((respuesta) => {
                console.log("promesa cumplida", respuesta)
                setProducts(respuesta)
            })
        }, []
    )  

    return (
    <>
        {/* <ItemList se reemplaza por Cards */}
        <Cards />
    </>
       
       
    )
}
export default ItemListContainer;