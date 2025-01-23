import React from 'react'

const FormHandling = () => {
  const [userName, setUserName] = React.useState('');
  
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(userName);
    console.log('form submitted');
    setUserName('');
  }
  return (
    <div>
      {/* This is form Handling */}
      {/* <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
      <input type='text' placeholder='Enter your name' />
      <input type='number' placeholder='age' />
      <input type='text' placeholder='Your location Loaction'/>
      <button>Submit</button>
      </form> */}

      {/* Form handling with two way binding */}

      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input 
         onChange={(e)=>{
            setUserName(e.target.value);
         }}
         value={userName}
         type='text'
         placeholder='Enter your name' 
         />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default FormHandling
