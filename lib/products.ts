import type { Product, Size } from "@/types/product"

export const sizes: Size[] = ["XS", "S", "M", "L", "XL", "XXL"]

export const products: Product[] = [
  { id: "core-black", name: "تی‌شرت مشکی مرکزی", color: "مشکی", hex: "#111111", price: 38, description: "ضروری‌ترین انتخاب، از پنبه سنگین‌وزن." },
  { id: "bone-white", name: "تی‌شرت سفید استخوانی", color: "استخوانی", hex: "#e9e2d5", price: 38, description: "خنثی گرم با حسی ساختاریافته." },
  { id: "signal-orange", name: "تی‌شرت نارنجی سیگنال", color: "سیگنال", hex: "#ff5a1f", price: 42, description: "جرقه‌ای دقیق از رنگ برای چرخش روزمره." },
]
