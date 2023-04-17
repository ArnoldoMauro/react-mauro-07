import React, {useState} from 'react'
import Button from './Button';
import ItemDetailContainer from './ItemDetailContainer';

function ItemCount({onAddToCart}) {
    const [count, setCount] = useState(0);
    
    function handleAdd() {        
      // Verificar si se alcanzó el stock antes de incrementar
      // if (stock alcance) return  
      setCount (count+1);
    }

    function handleSubstract() {
      // Verificar si ya llegamos a 0 antes de decrementar
      // if (preguntamos si llegamos a 0)
      if (count > 0) {  
        setCount (count - 1);
      }
    }

    function handleAddToCart() {
      onAddToCart(count)
    }

  return (
    <><br></br><br></br><br></br>
    <div className='container-btn'>
      <div className='substract'>
        <Button color="red" onPress={handleSubstract}>
          -
        </Button>
      </div>
      <div className='count'>
        <span> {count} </span>
      </div>
      <div className='add'>
        <Button color="blue" onPress={handleAdd}>
          +
        </Button>
      </div>
      <div className='addtocart'>
        <Button color="cadetblue" onPress={handleAddToCart}> Agregar al Carrito</Button>
      </div>  
    </div></>
  )
}

export default ItemCount
