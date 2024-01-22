//este es para mi
import React from "react"
import { ProductsMap, Product, GroupedProducts } from "../types/Product"
import { useCart } from "../context/CartContext"
import Box from "@mui/system/Box"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"

const Shop: React.FC = () => {
  const { cartItems } = useCart()
  //convert products map to an arr and sort by aisle
  const prodArr = Object.entries(cartItems).sort((a, b) => {
    return a[1].Location.localeCompare(b[1].Location)
  })

  //group products by aisle
  const prodByAisle = prodArr.reduce<GroupedProducts>(
    (acc, [name, product]) => {
      const aisle = product.Location
      if (!acc[aisle]) {
        acc[aisle] = []
      }
      acc[aisle].push({ name, ...product })
      return acc
    },
    {}
  )

  return (
    <div>
      <Box component="section" sx={{ p: 2 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          {Object.entries(prodByAisle).map(([aisle, products]) => (
            <div key={aisle}>
              <h2>
                <Alert severity="info">{aisle}</Alert>
              </h2>
              {products.map((product) => (
                <div key={product.name}>
                  <img
                    src={product.ImageURL}
                    alt={product.name}
                    style={{ width: 100, height: 100 }}
                  />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </Stack>
      </Box>
    </div>
  )
}

export default Shop
