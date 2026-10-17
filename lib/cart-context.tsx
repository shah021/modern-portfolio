"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { CartItem, Product, Size } from "@/types/product"

type CartContextValue = { items: CartItem[]; count: number; addItem: (product: Product, size: Size) => void; removeItem: (id: string, size: Size) => void }
const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = "threadform-bag-v1"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  useEffect(() => { try { const saved = window.localStorage.getItem(STORAGE_KEY); if (saved) setItems(JSON.parse(saved)) } catch {} }, [])
  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) }, [items])
  const value = useMemo(() => ({ items, count: items.reduce((sum, item) => sum + item.quantity, 0), addItem: (product: Product, size: Size) => setItems(current => { const match = current.find(item => item.id === product.id && item.size === size); return match ? current.map(item => item === match ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, size, quantity: 1 }] }), removeItem: (id: string, size: Size) => setItems(current => current.filter(item => !(item.id === id && item.size === size))) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used inside CartProvider"); return context }
