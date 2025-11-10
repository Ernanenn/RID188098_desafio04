import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ponto de entrada da aplicação React. O StrictMode ajuda a detectar problemas em tempo de desenvolvimento.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
