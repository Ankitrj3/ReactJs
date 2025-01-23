import React, { useState } from 'react'

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [total , setTotal] = useState(0);

    const addToCart = (goods,price)=>{
        setCart([...cart,{goods,price}]);
        setTotal(total +price);
    }
  return (
    <div>
       <button onClick={() => addToCart("Shirt", 1000)}>Add Shirt</button>
       <button onClick={() => addToCart("Pant", 2000)}>Add Pant</button>
       <button onClick={() => addToCart("Shoes", 3000)}>Add Shoes</button>


      <h1>Cart</h1>
      {cart.map((index)=>{
        return <p>{index.goods}:{index.price.toFixed(2)}</p>
      })}
      <p>total : {total.toFixed(2)}</p>
    </div>
  )
}

export default ShoppingCart
