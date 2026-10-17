import type { Product, Size } from "@/types/product"

export const sizes: Size[] = ["XS", "S", "M", "L", "XL", "XXL"]

export const products: Product[] = [
  { id: "core-black", name: "Core Black Tee", color: "Black", hex: "#111111", price: 38, description: "The essential, cut from heavyweight cotton." },
  { id: "bone-white", name: "Bone White Tee", color: "Bone", hex: "#e9e2d5", price: 38, description: "A warm neutral with a structured hand feel." },
  { id: "signal-orange", name: "Signal Orange Tee", color: "Signal", hex: "#ff5a1f", price: 42, description: "A precise flash of color for your everyday rotation." },
]
