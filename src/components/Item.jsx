
import {useState} from 'react';
import {Link} from 'react-router-dom';
import products from '../data/product';
import React from 'react'
import '../css/item.css';

function Item({id, title, imagen, price, category, stock, offer}) {
    const [fav, setFav] = useState (false);

    function handleFavorite(evt) {
      evt.preventDefault();
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
        {/* <button onClick={handleFavorite} className={classNameFavorite}>
         ♥
        </button> */}
        <div className='item-card_img'>
          <img className={stock === 0 && "disabled"} src={imagen} alt="Imagen del producto" />
        </div>

        <div className='item-card_header'>
          <br></br>
          <h4>{title}</h4>
          <small style={{ color: "blue" }}>{category}</small>
          <br></br>
          <h4>{price}</h4>
        </div>
    
        <div className='item-card_detail'>
          {/* verificamos si existe una oferta con el RendCondicional -> operador logico &&  */}
          {typeof offer === 'number' && !isNaN(offer) && (
            <h4 style={{ color: "green" }}>{offer} %</h4>
          )} 
          <small>{stock}</small>
        </div>    
        {stock === 0 && <h6 style={{ color: "red" }}>Sin Stock</h6>}
        {stock > 0 && (
          <Link to={`/detail/${id}`}>
            <button className='btn'>Ver Detalle</button>
          </Link>    
        )
        }    
      </div>
         
    </Link>  
  )
}

export default Item
