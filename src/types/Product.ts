export interface Product {
  ImageURL: string
  Location: string
}
//so that I can map the products
export interface ProductsMap {
  [key: string]: Product
}

export interface GroupedProducts {
  [aisle: string]: Array<{
    name: string
    ImageURL: string
    Location: string
  }>
}

export interface CartContextTytpe {
  cartItems: { [key: string]: Product }
  addToCart: (name: string, product: Product) => void
}

export interface HomeScreenProps {
  products: ProductsMap
}
export interface CartProviderProps {
  children: React.ReactNode // Explicitly type 'children' prop
}
