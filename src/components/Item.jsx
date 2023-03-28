import {useState} from 'react';
import Card from './Card';
import React from 'react'



function Item(products) {
    const [fav, setFav] = useState (false);

    // function handleFavorite() {
    //     setFav(!fav);
    // }

    // let classNameFavorite;
    // if (fav === true) {
    //     classNameFavorite = "item-card_favicon favorite";
    // } else{
    //     classNameFavorite = "item-card_favicon";
    // }

//   return (
    // <div id={products.id} className = "item-card">
//         <Card />
      
//     </div>
//   )
}

export default Item
