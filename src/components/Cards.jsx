import React from 'react';
import Card from './Card';
import '../css/cards.css';
import './ItemListContainer';
import products from '../data/productBackup';

// reemplaza al componente ItemList.jsx 
function Cards() {
  // console.log(cards)
  return (
    
    
    <div className='container d-flex justify-content-center align-items-center'>
   
        <div className="row">
          {
            products.map((products) => (
              <div className="col-md-3" key={products.id}>
                <Card 
                      id={products.id}
                      image={products.image} 
                      title={products.title}
                      category={products.category} 
                      url={products.url} 
                      price={products.price}
                      />
              </div>
            ))
          }
          
        </div>
      
    </div>
  )
}

export default Cards;
