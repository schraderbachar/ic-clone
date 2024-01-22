import React from "react"
type Product = {
  name: string
  imageUrl: string
  location: string
}

const ProductItem: React.FC<Product> = ({ name, imageUrl, location }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  )
}

export default ProductItem
