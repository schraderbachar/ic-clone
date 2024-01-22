//for mom to search and add things to shopping page
import React from "react"
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material"

import { useCart } from "../context/CartContext"
import { HomeScreenProps } from "../types/Product"

const Home: React.FC<HomeScreenProps> = ({ products }) => {
  const { addToCart } = useCart()

  return (
    <Grid container spacing={4}>
      {Object.entries(products).map(([name, product]) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={product.ImageURL}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.Location}
              </Typography>
              <Button
                variant="contained"
                onClick={() => addToCart(name, product)}
                style={{ marginTop: "10px" }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home
