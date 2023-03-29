import React from 'react';
import {Link} from 'react-router-dom';



function Card({image, id, title, category, url, price}) {
  return (
    <div className='card text-center bg-dark mt-1'>
        <img src={image} alt="imagen del producto" />
        <div className="card-body">

        </div>
      <h5 className='card-title text-light'>{title}</h5>
      <small className='text-light'>{category}</small>
      <p className='card-text text-secondary'>{price}
      </p>
      <Link to={`/categorys/${id}`} className='btn btn-sm btn-outline-secondary rounded-2'>
        Mas Detalles
      </Link> 
    </div>
  )
}

export default Card
