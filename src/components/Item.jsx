
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
    <Link to={`/detail/${id}`}>   
      <div className="item-card"
        id={id}> 
        <div className='item-card_img'>
          <img src={imagen} alt="Imagen del producto" />
        </div>

        <div className='item-card_header'>
          <br></br>
          <h5>{title}</h5>
          <h6>{category}</h6>
          <h4>{price}</h4>
        </div>
    
        <div className='item-card_detail'>
          {/* verificamos si existe una oferta con el RendCondicional -> operador logico &&  */}
          {products && products.offer && (
            <h4 style={{ color: "green" }}>{offer} %</h4>
          )} 
          
        </div>    
        <div>
          <button className='btn'>Ver Detalle</button>
        </div>
      </div>    
    </Link>  
  )
}

export default Item
