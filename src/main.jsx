import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Logo from './components/logo/logo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logo />
    <App />
    
  </StrictMode>,
)
