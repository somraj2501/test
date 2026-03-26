import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css'

function App() {

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
