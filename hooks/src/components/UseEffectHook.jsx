import React, { useEffect } from 'react'
import { useState } from 'react';
function UseEffectHook() {
    const [count , setCount] = useState(0);
    const [Multiply , Multiplication] = useState(1);
    
    useEffect(()=>{ //this will run only when count variable will change
        Multiplication(()=>{
            return count*2;
        })
    },[count])
    
    function increment(){
        return setCount(count+1);
    }
  return (
    <div>
      {count}<br></br>
      <button onClick={increment}>increment</button><br></br>
      {Multiply}<br></br>
    </div>
  )
}

export default UseEffectHook
