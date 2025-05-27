import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// global styles
import './index.scss'
// fonts
import './fonts.scss'
// Components
import NavBar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
  </StrictMode>
)