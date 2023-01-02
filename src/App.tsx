import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/useCart'

import { Router } from './Router'

import './styles/main.css'

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  )
}
