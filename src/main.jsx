import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx';
 import Flight from './Components/Flight/Flight.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/loginpage",
    element: <LoginPage/>,
  },


   {
     path: "/flight",
    element: <Flight/>,
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);

reportWebVitals();
