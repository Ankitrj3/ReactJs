import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './routes/Root'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import ErrorPage from './components/ErrorPage'
const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
         {path:'/',element:<Home/>},
         {path:'/about',element:<About/>},
         {path:'/contact',element:<Contact/>},
         {path:'/product',element:<Product/>},
         //catch all route
         {path:'*',element:<ErrorPage/>}
      ]
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
