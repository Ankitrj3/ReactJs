import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  // first we wrap our app in BrowserRouter 
  // Then go to App.jsx and wrap the Routes in Routes
  // be careful with the import statement
   <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
