import React, {useState} from 'react'

function ItemCount() {
    const [count, setCount] = useState(0);
    const limite = 5;

    function handleAdd() {
        
        // if (stock alcance) return
        setCount (count+1);
    }

    function handleSubstract() {
        // if (llegamos a 0) return

    }

  return (
    <div>
      <buttom> - </buttom>
      <span> {count} </span>
      <buttom onclick = {() => setCount(count+1)}> + </buttom>
    </div>
  )
}

export default ItemCount
