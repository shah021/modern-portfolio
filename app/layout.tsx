import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "THREADFORM — Built to be worn different.",
  description: "Premium everyday essentials. Exceptional texture. No unnecessary noise.",
  keywords: ["streetwear", "premium t-shirts", "THREADFORM"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
