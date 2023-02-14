import reactLogo from './assets/react.svg'
import './App.css'

import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth'

function App() {
  

  return (
    <div className="div-app">
      <AuthProvider>
      <Outlet />
      </AuthProvider>
      
    </div>
  )
}

export default App
