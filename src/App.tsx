import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './styles/main.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
