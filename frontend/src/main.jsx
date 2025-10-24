import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// ...existing code...
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ...existing code...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
