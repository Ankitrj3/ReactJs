import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./App.scss";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import LeftBar from "./componets/leftBar/LeftBar";
import NavBar from "./componets/navbar/NavBar";
import RightBar from "./componets/rightBar/RightBar";

function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>{/* Outlet is a placeholder for the child routes*/}
          <RightBar/>
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      
      element: (
      <ProtectedRoute>
         <Layout />
      </ProtectedRoute>
      ),
      children:[
        {
        path: "/",
        element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
