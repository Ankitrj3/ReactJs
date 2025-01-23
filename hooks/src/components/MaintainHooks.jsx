import React from 'react'
import { useState } from 'react'
function MaintainHooks() {
    const [name,setName] = useState("ANkit");
  return (
    <div>
      name is {name}<br></br>

      <button onClick={()=> setName("Ujjwall with Undefined Gender")}>SetName</button>
    </div>
  )
}

export default MaintainHooks
