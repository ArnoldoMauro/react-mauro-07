import React, {useState, useEffect} from 'react';
import Cards from './Cards';
import products from '../data/product';
import {useParams} from 'react-router-dom';


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
    <div className="d-flex justify-content-center">    
        <div className="card text-center bg-dark" style={{ width: '400px' }}>
            <h3>Item Detail Container</h3>
            <img className = "card-img-top" src={product.image} alt="imagen del producto" />
            <div className="card-body">
                <h4 className='card-title text-light'>{product.title}</h4>
                <small className='text-light'>{product.category}</small>
                <p className='card-text text-secondary'>{product.price}
                </p>
            </div>
            {/* <Cards /> */}
        </div>
    </div>    
    )  
}

export default ItemDetailContainer;