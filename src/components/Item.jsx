import {useState} from 'react';
import Card from './Card';
import React from 'react'



function Item(products) {
    const [fav, setFav] = useState (false);

    function handleFavorite() {
      setFav(!fav);
    }

    let classNameFavorite;
    if (fav === true) {
      classNameFavorite = "item-card_favicon favorite";
    } else{
      classNameFavorite = "item-card_favicon";
    }

  
    
  return (  
    <div id={products.id} className="item-card">
      {/* <Card /> */}
      <div className='item-card_img'>
        <h2>{products.img}</h2>
      </div>

      <div className='item-card_header'>
        <h4> $ {products.title}</h4>
        <small>{products.category}</small>
      </div>
    
      <div className='item-card_detail'>
        <h2>{products.price}</h2>
      </div>
      <button>Ver Detalle</button>
    </div>
  )
}

export default Item
