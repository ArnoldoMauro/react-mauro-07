
import {useState} from 'react';
import {Link} from 'react-router-dom';
import products from '../data/product';
import React from 'react'
import '../css/item.css';




function Item({id, title, imagen, price, category}) {
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
    <Link to={`/detail/${products.id}`}>   
      <div className="item-card"
        id={id}> 
        <div className='item-card_img'>
          <img src={imagen} alt="Imagen del producto" />
        </div>

        <div className='item-card_header'>
          <h4>{products.title}</h4>
          <h6>{products.category}</h6>
        </div>
    
        <div className='item-card_detail'>
          <h3>{products.price}</h3>
        </div>    
        <div>  
          <button className='btn'>Ver Detalle</button>
        </div>
      </div>    
    </Link>  
  )
}

export default Item
