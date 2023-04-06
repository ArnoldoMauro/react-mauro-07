import React, {useState} from 'react'

function ItemCount({onAddToCart}) {
    const [count, setCount] = useState(0);
    const limite = 5;

    function handleAdd() {
        
        // if (stock alcance) return
        setCount (count+1);
    }

    function handleSubstract() {
        // if ( preguntamos si llegamos a 0) 
      setCount = count - 1;
    }

  return (
    <div>
      <button color="red" onPress={handleSubstract}> 
        - 
      </button>
      <span> {count} </span>
      <button color="blue" onclick = {(onAddToCart) => setCount(count+1)}>  
      {/* <button color="blue" onPress={handleAdd}> */}
        + 
      </button>
      <button onClick={onAddToCart}> Agregar al Carrito</button> 
    </div>
  )
}

export default ItemCount
