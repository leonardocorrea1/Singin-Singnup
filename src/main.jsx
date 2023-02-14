import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//usados
import App from './App'
import { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'

//rotas
import Home from './routes/Home'
import Singin from './routes/Singin'
import Singnup from './routes/Singnup'
import useAuth from './hooks/useAuth'

const Private = ({Item}) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Home />;
};



const router = createBrowserRouter([
  {
    element:<App />,
    children: [
      {
        path: "/home",
        element: <Private Item= {Home} />         
      },
      {
        path: "/singin",
        element: <Singin />,
      },
      {
        path: "/singnup",
        element: <Singnup />
      },
      {
        path: "*",
        element: <Singin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)