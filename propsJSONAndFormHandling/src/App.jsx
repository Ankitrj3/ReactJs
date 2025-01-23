
import './App.css'
import Card from './components/Card'
import P1 from './components/p1'
function App() {

  
  const users = [
   
      {
        "name": "Alice",
        "age": 28,
        "profilePhoto": "https://example.com/alice.jpg"
      },
      {
        "name": "Bob",
        "age": 32,
        "profilePhoto": "https://example.com/bob.jpg"
      },
      {
        "name": "Charlie",
        "age": 25,
        "profilePhoto": "https://example.com/charlie.jpg"
      },
      {
        "name": "David",
        "age": 35,
        "profilePhoto": "https://example.com/david.jpg"
      },
      {
        "name": "Eve",
        "age": 29,
        "profilePhoto": "https://example.com/eve.jpg"
      }
    ];
  
  return (
    <>
    {users.map((user,index)=>(
      <Card key={index}
       name={user.name}
       age={user.age} 
       profilePhoto={user.profilePhoto}/>
    ))}

    <P1 name="UNdefined Ujjwal"/>
   
    

    </>
  );
  
}

export default App
