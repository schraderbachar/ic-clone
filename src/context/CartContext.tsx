import React, { createContext, useContext, useState } from "react"
import { Product, CartContextTytpe, CartProviderProps } from "../types/Product"

const CartContext = createContext<CartContextTytpe | undefined>(undefined)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: Product }>({})

  const addToCart = (name: string, product: Product) => {
    setCartItems((prevItems) => ({ ...prevItems, [name]: product }))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used withtin a CartProvider")
  return context
}
