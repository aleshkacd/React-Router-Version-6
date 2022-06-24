import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={ <Products />} />
          <Route path="/contacts" element={ <Contacts />} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App