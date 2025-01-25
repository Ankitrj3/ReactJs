import {useState,createContext,useContext} from 'react'

const userContext = createContext();
export function ContextApi() {
    const [user,setUser] = useState('Ankit Ranjan');
    return (
    <userContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component1/>
    </userContext.Provider>
  )
}
export function Component1(){
  return(
    <div>
        <h2>Component 1</h2>
      <Component2/>
    </div>
  )
}
export function Component2(){
  const emp = useContext(userContext);
  return(
    <div>
        <h3>Component 2</h3>
        <p>{`Hello ${emp}!`}</p>
    </div>
  )
}