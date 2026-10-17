"use client"
import { motion } from "framer-motion"
export function LoadingScreen() { return <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0, pointerEvents: "none" }} transition={{ delay: 1.4, duration: .55 }} className="loader"><div className="loader-wordmark">THREADFORM</div><div className="loader-meta"><span>PREPARING YOUR FIT</span><span>100%</span></div><div className="loader-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} /></div></motion.div> }
