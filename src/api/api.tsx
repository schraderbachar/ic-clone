import { ProductsMap } from "../types/Product"

const API_URL = "http://localhost:8080"

export const getProducts = async (): Promise<ProductsMap> => {
  const res = await fetch(`${API_URL}/products`)
  return await res.json()
}

export const addItem = async (
  name: string,
  imageUrl: string,
  location: string
) => {
  try {
    const res = await fetch(`${API_URL}/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl, location }),
    })

    if (!res.ok) {
      throw new Error("couldn't complete request to add item")
    }

    return res.statusText //send status text back as no JSON is being sent
  } catch (error) {
    console.error("There was an error when posting the new item", error)
    throw error
  }
}
