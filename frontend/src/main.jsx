import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// ...existing code...
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ...existing code...
import { StateProvider } from './Staateprovider/Stateprovider.jsx'
import reducer, { initialState } from './reducer/Reducer.jsx'
import { Authprovider } from './Context/Authcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Authprovider> 
     <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
     </StateProvider>
     </Authprovider>
  </StrictMode>
 
)
