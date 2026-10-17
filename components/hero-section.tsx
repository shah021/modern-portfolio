"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return <section className="hero section-wrap" id="hero" dir="rtl"><div className="hero-copy"><motion.p className="eyebrow orange" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>فصل جدید / دراپ ۰۰۱</motion.p><motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>برای متفاوت<br /><em>پوشیده‌شدن.</em></motion.h1><motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>فرم‌های ضروری. بافت استثنایی.<br />بدون هیچ شلوغی اضافه.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}><a className="button button-orange" href="#collection">خرید دراپ <span>↘</span></a><a className="text-link" href="#story">کشف جزئیات <span>↘</span></a></motion.div></div><div className="hero-meta"><span>تهران / ۱۴۰۳</span><span>اسکرول برای کشف</span></div></section>
}
