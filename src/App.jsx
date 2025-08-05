
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_Found from './pages/Not_Found';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"*",
    element:<Not_Found/>
  },
  {
    path:"/login",
    element:<Login/>
  }
  ,
  {
    path:"/signup",
    element:<SignUp/>
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App