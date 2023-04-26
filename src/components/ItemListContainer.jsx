import React, {useState, useEffect} from 'react';
import '../App';
import './Cards';
import Item from './Item';
import '../App.css';
import {useParams} from 'react-router-dom';
import Loader from './Loader/Loader';
import { getItems, getItemsByCategory } from '../services/firestore';

function ItemListContainer(products) {
    const [product, setProducts] = useState ([]);
    const [loader, setLoader]= useState(false)
    
    // ---- filtro por categorias ----
    const {categoryid} = useParams()
    
    //la funcion useEffect() es para que el array se renderize una sola vez (sino se repite)
    useEffect(
      () => {
       
          if (categoryid === undefined) {
            // LOS LLAMADOS A FIREBASE VAN SIEMPRE DENTRO DE useEffect
          getItems().then((respuesta) => {
            setLoader(true)
            setProducts(respuesta)
              })
              .catch((error)=> console.log(error))
              .finally(()=>setLoader(false))

          } else {
            getItemsByCategory(categoryid).then((respuesta) => {
              setLoader(true)
              setProducts(respuesta)
            })
            .catch((error)=> console.log(error))
              .finally(()=>setLoader(false))
          }
      }, [categoryid]
          )  
      
          // si el array products está vacìo, renderiza el componente <Loader />
       

  return (
    <>
          {
      loader ? <Loader/> 
      :<>
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
    }
    </>
  
  )
}
export default ItemListContainer;