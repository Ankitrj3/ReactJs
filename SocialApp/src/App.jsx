import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LeftBar from "./componets/leftBar/LeftBar";
import NavBar from "./componets/navbar/NavBar";
import RightBar from "./componets/rightBar/RightBar";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
    // {
    //   path: "/profile",
    //   element: <Profile />,
    // },
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
