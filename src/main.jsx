import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import './index.css'
import Password from './Componets/password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Password/>
  </StrictMode>,
)
