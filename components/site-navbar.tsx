"use client"
import { useState } from "react"
import { ShoppingBag } from "@/components/shopping-bag"
export function SiteNavbar() { const [menu, setMenu] = useState(false); const links = [["SHOP", "#collection"], ["STORY", "#story"], ["ABOUT", "#values"]]; return <header className="site-nav"><a href="#top" className="brand">THREAD<span>FORM</span></a><nav className={menu ? "nav-links open" : "nav-links"}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav><div className="nav-actions"><ShoppingBag /><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? "CLOSE" : "MENU"}</button></div></header> }
