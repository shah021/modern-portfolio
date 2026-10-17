"use client"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const Scene = dynamic(() => import("./tshirt-model"), { ssr: false })
export function SceneCanvas() { return <div className="scene-canvas" aria-hidden="true"><Suspense fallback={null}><Scene /></Suspense></div> }
