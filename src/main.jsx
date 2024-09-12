import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Password from './Componets/password'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Password />
  </StrictMode>,
)
