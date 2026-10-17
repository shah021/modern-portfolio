"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products, sizes } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import type { Product, Size } from "@/types/product"

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [size, setSize] = useState<Size>("M")
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const add = () => { addItem(product, size); setAdded(true); window.setTimeout(() => setAdded(false), 1600) }
  return <motion.article className="product-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * .1 }} dir="rtl"><div className="product-art" style={{ ["--shirt" as string]: product.hex }}><div className="product-number">{`۰${index + 1}`}</div><div className="card-shirt" /><span className="product-color">{product.color} / ۰۰۱</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{product.price} دلار</strong></div><div className="size-row"><span>انتخاب سایز</span>{sizes.map((item) => <button key={item} className={size === item ? "selected" : ""} onClick={() => setSize(item)} aria-pressed={size === item}>{item}</button>)}</div><button className={`button add-button ${added ? "added" : ""}`} onClick={add}>{added ? "به سبد اضافه شد ✓" : "افزودن به سبد"}<span>↗</span></button></motion.article>
}

export function CollectionSection() { return <section className="collection section-wrap" id="collection" dir="rtl"><div className="section-heading"><div><p className="eyebrow orange">مجموعه / ۰۰۱</p><h2>یونیفرم<br /><em>هر روز.</em></h2></div><p className="section-note">سه رنگ. یک فرم سنجیده.<br />نقطه شروع روزمره‌ات را پیدا کن.</p></div><div className="product-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div></section> }
