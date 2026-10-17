export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL"

export type Product = {
  id: string
  name: string
  color: string
  hex: string
  price: number
  description: string
}

export type CartItem = Product & { size: Size; quantity: number }
