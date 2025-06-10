import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// global styles
import './index.scss'
// fonts
import './fonts.scss'
import App from './components/app.jsx'
// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);