import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink,
  Routes,
} from "react-router-dom"
import { AppBar, Toolbar, Button, Typography } from "@mui/material"
import ShopScreen from "./screens/Shop"
import HomeScreen from "./screens/Home"
import AddItem from "./screens/AddItem"
import { getProducts } from "./api/api"
import { ProductsMap } from "./types/Product"

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductsMap>({})

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <Router>
      <nav>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/shop">
              Shop (Cart)
            </Button>
            <Button color="inherit" component={RouterLink} to="/add-item">
              Add Item
            </Button>
          </Toolbar>
        </AppBar>
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen products={products} />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  )
}

export default App
