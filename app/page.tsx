"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { CartProvider } from "@/lib/cart-context"
import { LoadingScreen } from "@/components/loading-screen"
import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { CollectionSection } from "@/components/collection-section"

const SceneCanvas = dynamic(() => import("@/components/scene/scene-canvas").then((module) => module.SceneCanvas), { ssr: false })

const values = ["مواد اولیه سنجیده", "فرم ماندگار", "کاربرد هر روزه"]

export default function Page() {
  return (
    <CartProvider>
      <LoadingScreen />
      <SceneCanvas />
      <SiteNavbar />
      <main id="top">
        <HeroSection />
        <section className="story section-wrap" id="story">
          <div className="story-top"><p className="eyebrow orange">داستان پارچه / ۰۲</p><h2>تفاوت را<br /><em>احساس کن.</em></h2></div>
          <div className="story-bottom"><p>پنبه سنگین‌وزن. فرم ساختاریافته.<br />برای چرخش روزمره طراحی شده.</p><div className="features"><div><b>۲۴۰</b><span>گرم بر متر</span></div><div><b>آزاد</b><span>فرم تن‌خور</span></div><div><b>ساخته</b><span>برای ماندن</span></div></div></div>
        </section>
        <section className="philosophy section-wrap"><p className="eyebrow">رویکرد ما / ۰۳</p><div className="philosophy-grid"><h2>کمتر،<br /><em>اما بهتر.</em></h2><div className="annotation"><span className="cross">＋</span><p>هر دوخت دلیلی دارد.<br />هر جزئیات جای خود را پیدا می‌کند.</p><div className="line" /><small>THREADFORM / شیء ۰۰۱<br />طراحی‌شده برای شهر</small></div></div></section>
        <CollectionSection />
        <section className="values section-wrap" id="values"><p className="eyebrow orange">اصول ما / ۰۴</p><h2>برای<br /><em>مسیر طولانی.</em></h2><div className="value-list">{values.map((value, index) => <motion.div className="value-row" key={value} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span>{`۰${index + 1}`}</span><strong>{value}</strong><span>↗</span></motion.div>)}</div></section>
        <section className="final section-wrap"><p className="eyebrow">دراپ ۰۰۱ / اکنون موجود است</p><h2>چرخش تو<br /><em>از اینجا شروع می‌شود.</em></h2><p>قطعه‌ای را پیدا کن که بارها سراغش می‌روی.</p><a className="button button-orange" href="#collection">مشاهده تی‌شرت‌ها <span>↘</span></a></section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#top">THREAD<span>FORM</span></a><div className="footer-links"><a href="#collection">فروشگاه</a><a href="#story">درباره ما</a><a href="mailto:hello@threadform.studio">تماس</a><a href="#values">ارسال و بازگشت</a><a href="#top">حریم خصوصی</a></div><p>ساخته‌شده برای پوشیدن متفاوت.</p></footer>
    </CartProvider>
  )
}
