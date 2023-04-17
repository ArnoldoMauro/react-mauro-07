import React, {useState, useEffect} from 'react';
import '../App';
import './Cards';
import Item from './Item';
import '../App.css';
import products from '../data/productBackup';
import {useParams} from 'react-router-dom';
import Loader from './Loader/Loader';

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
        }, [categoryid]
            )  
        
            // si el array products está vacìo, renderiza el componente <Loader />
            if (products.length === 0) {
          return <Loader />
        }

    return (
    <>
    {product.map((products) => (
      <Item
      key={products.id}
      id={products.id}
      imagen={products.image} 
      title={products.title}
      price={products.price}
      category={products.category}
      offer={products.offer}
      stock={products.stock}
      />
    ))
    }
        
    </>
    )
  }
export default ItemListContainer;