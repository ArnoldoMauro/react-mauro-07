import React, {useState, useEffect} from 'react';
import '../App';
import './Cards';
import Item from './Item';
import '../App.css';
import Cards from './Cards'
import products from '../data/product';
import {useParams} from 'react-router-dom';

// ------Mock Async Service (Asincronia)------
// funcion que filtra por id ---
function getItems() {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 2500);
    });
    return promesa;
}

// funcion que filtra por categorias --- 
function getItemsByCategory(categoryURL) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            // quiero filtrar el array
            const filtro = products.filter((item) => item.category === categoryURL)
            resolve (filtro);
        }, 2500);
    });
    return promesa;
}

// ---------------------------------------------------
function ItemListContainer(products) {
    const [product, setProducts] = useState ([]);
    
    // ---- filtro por categorias ----
    const {categoryid} = useParams()
    
    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
        () => {
            if (categoryid === undefined) {
              // resolve
            getItems().then((respuesta) => {
            setProducts(respuesta)
                })

            } else {
              getItemsByCategory(categoryid).then((respuesta) => 
              setProducts(respuesta));
            }
        }, []
            )  
    
    return (
    <>
    {products.map((products) => (
      <Item
      key={products.id}
      id={products.id}
      title={products.title}
      price={products.price}
      category={products.category}
      imagen={products.imagen} />
    ))
    }
        {/* <Item /> */}
        {/* <ItemList se reemplaza por Cards */}
        {/* <Cards /> */}
    </>
    )
  }
export default ItemListContainer;