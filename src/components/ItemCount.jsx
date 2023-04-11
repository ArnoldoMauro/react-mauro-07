import React, {useState} from 'react'
import Button from './Button';
import ItemDetailContainer from './ItemDetailContainer';

function ItemCount({onAddToCart}) {
    const [count, setCount] = useState(0);
    
    function handleAdd() {
        
        // if (stock alcance) return
        setCount (count+1);
    }

    function handleSubstract() {
        // if ( preguntamos si llegamos a 0) 
      setCount = count - 1;
    }

    function handleAddToCart() {
      onAddToCart(count)
    }
    
  return (
    <div>
      <Button color="red" onPress={handleSubstract}> 
        - 
      </Button>
      <span> {count} </span>
      <Button color="blue" onPress = {handleAdd}>  
        + 
      </Button>
      <Button onPress={handleAddToCart}> Agregar al Carrito</Button> 
    </div>
  )
}

export default ItemCount
