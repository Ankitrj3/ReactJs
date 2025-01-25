import { useState } from 'react'
import './App.css'

function App() {
  const  [search,setSearch] = useState('');
  const [suggest,setSuggest] = useState([]);
  const visibility = false;
  const question =[
    {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "answer": "Paris"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Earth", "Jupiter", "Saturn", "Neptune"],
      "answer": "Jupiter"
    },
    {
      "question": "How many bones are in the human body?",
      "options": ["206", "250", "300", "350"],
      "answer": "206"
    }
  ]

  const handleChange = ((e)=>{
    setSearch(e.target.value.toLowerCase());

    const filterQuestion = question.filter((q)=>
      q.question.toLowerCase().includes(search)
    );
    setSuggest(filterQuestion);
  })

  return (
    <>
    <input type="text" 
    placeholder="Search for questions.."
    value={search}
    onChange={handleChange}
    />
    <ul>
      {suggest.map((suggestion,key)=>(
        <li key={key}>{suggestion.question}</li>
      ))}
    </ul>
    

    </>
  )
}

export default App
