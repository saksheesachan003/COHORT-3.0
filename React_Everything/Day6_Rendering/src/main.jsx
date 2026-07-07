import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Web from './Components/Web.jsx'
import Form from './Components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Web /> */}
    <Form />
  </StrictMode>,
)
