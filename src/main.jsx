import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/Productcontext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
  
)
