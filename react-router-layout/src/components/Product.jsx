import React from 'react'

const Product = () => {
    const [api , setApi] = React.useState([])
    const apiCall = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setApi(data)
    }
  return (
    <div>
      <div className="gap-4">
        <button onClick={()=>{apiCall()}} className='h-8 w-20 bg-slate-800 text-white'>API Call</button>

        <ul>
            {api.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default Product
