"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useState, useEffect, useMemo } from "react"
import { Questrial } from "next/font/google"

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
})

const loader_words = [
  "Belajar",
  "Live Tiktok",
  "Tidur",
  "w: kamar320.com",
  "i: @inside.kamar320",
]

const commonPreloadAssets = [
  "/logo/kamar320-putih.png",
  "/logo/kamar320.png",
  "/logo/icon-putih.svg",
  "/logo/icon-ungu.svg",
  "/logo/tulisan-kamar.png",
  "/logo/webicon.png",
]

const routePreloadAssets: Record<string, string[]> = {
  "/": [
    "/home/manten.png",
    "/home/wnt.png",
    "/home/fotokamar320.png",
  ],
  "/work": [
    "/work/tbm.png",
    "/work/photoscape.png",
    "/work/haloben.png",
    "/work/sbd.png",
  ],
  "/benaya-joshua": [
    "/ben/ben.jpg",
    "/ben/part.png",
    "/ben/edu/lentera.jpg",
    "/ben/edu/uph.png",
    "/ben/org/falcon.jpg",
    "/ben/org/idea.png",
    "/ben/work/marketing.jpeg",
  ],
  "/under-development": [
    "/utilitas/nukang.png",
  ],
}

const normalizeAssetPath = (src: string) => {
  if (src.startsWith("/") || src.startsWith("http")) {
    return src
  }

  return `/${src}`
}

const preloadAsset = (src: string) => {
  const assetPath = normalizeAssetPath(src)
  const cleanPath = assetPath.split("?")[0]
  const isImageAsset = /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(cleanPath)

  if (!isImageAsset) {
    return fetch(assetPath, { cache: "force-cache" }).then(() => undefined)
  }

  return new Promise<void>((resolve) => {
    const image = new window.Image()
    let isSettled = false

    const settle = () => {
      if (isSettled) {
        return
      }

      isSettled = true
      resolve()
    }

    image.decoding = "async"
    image.loading = "eager"
    image.onload = settle
    image.onerror = settle
    image.src = assetPath

    if (image.decode) {
      image.decode().then(settle).catch(settle)
    }
  })
}

type LoaderProps = {
  children?: ReactNode
}

export default function Loader({ children }: LoaderProps) {
  const pathname = usePathname()

  // progress 0 -> 100
  const [progress, setProgress] = useState(0)

  // loading selesai
  const [isDone, setDone] = useState(false)
  const [assetsReady, setAssetsReady] = useState(false)
  const [minimumDurationDone, setMinimumDurationDone] = useState(false)

  // animasi exit
  const [isExit, setExit] = useState(false)

  // slide text
  const [slideIndex, setSlideIndex] = useState(0)

  // hide loader
  const [showLoader, setShowLoader] = useState(true)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  // current text
  const currentSlide = useMemo(() => {
    return loader_words[slideIndex % loader_words.length]
  }, [slideIndex])

  const shouldUseHomeTransitionBackground = pathname === "/"



  // =========================
  // ENGINE LOADING
  // =========================

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    setIsPreviewMode(searchParams.get("previewLoader") === "1")
    document.body.dataset.loaderDone = "false"
  }, [])

  useEffect(() => {
    if (isPreviewMode) {
      setAssetsReady(true)
      return
    }

    let isMounted = true
    const assetsToPreload = Array.from(
      new Set([
        ...commonPreloadAssets,
        ...(routePreloadAssets[pathname] ?? []),
      ]),
    )

    Promise.allSettled(assetsToPreload.map(preloadAsset)).then(() => {
      if (isMounted) {
        setAssetsReady(true)
      }
    })

    return () => {
      isMounted = false
    }
  }, [pathname, isPreviewMode])

  useEffect(() => {
    if (!assetsReady || !minimumDurationDone) {
      return
    }

    setDone(true)
  }, [assetsReady, minimumDurationDone])

  useEffect(() => {

    const start = performance.now()
    const duration = 2600
    let animationFrameId = 0

    const tick = (now: number) => {

      const elapsed = now - start

      const ratio = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - ratio, 3)

      const nextProgress = Math.round(eased * 100)

      setProgress(nextProgress)

      if (ratio < 1) {
        animationFrameId = requestAnimationFrame(tick)
      } else if (isPreviewMode) {
        setProgress(100)
      } else {
        setMinimumDurationDone(true)
      }

    }

    animationFrameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }

  }, [isPreviewMode])



  // =========================
  // BODY SCROLL LOCK
  // =========================

  useEffect(() => {

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }

  }, [])



  // =========================
  // SLIDE LOOP
  // =========================

  useEffect(() => {
    if (isPreviewMode) {
      return
    }

    // kalau sudah selesai
    // DAN sudah di slide terakhir
    // stop looping

    if (
      isDone &&
      currentSlide === "Silahkan masuk"
    ) {
      return
    }

    const interval = setInterval(() => {

      setSlideIndex((prev) => prev + 1)

    }, 1200)

    return () => clearInterval(interval)

  }, [isDone, currentSlide, isPreviewMode])



  // =========================
  // EXIT FLOW
  // =========================

  useEffect(() => {
    if (isPreviewMode) {
      return
    }

    // tunggu:
    // progress selesai
    // DAN slide terakhir tampil

    if (
      !isDone ||
      currentSlide !== "Silahkan masuk"
    ) {
      return
    }

    // pause dulu biar user baca

    const exitTimer = setTimeout(() => {

      setExit(true)

    }, 1200)

    // remove loader

    const removeTimer = setTimeout(() => {
      document.body.dataset.loaderDone = "true"
      window.dispatchEvent(new Event("kamar320:loader-complete"))

      setShowLoader(false)

      document.body.style.overflow = ""

    }, 2000)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }

  }, [isDone, currentSlide, isPreviewMode])



  // =========================
  // REMOVE DOM
  // =========================

  return (
    <div className={quesFont.className}>
      <div
        className={[
          "min-h-screen",
          showLoader && shouldUseHomeTransitionBackground ? "bg-[#5F2E6D]" : "bg-transparent",
          showLoader ? "pointer-events-none" : "",
        ].join(" ")}
      >
        {children}
      </div>

      {showLoader && (
        <div
          className={[
            "fixed inset-0 z-9999 bg-[#5F2E6D] transition-all duration-700",
            isExit
              ? "pointer-events-none opacity-0 scale-[1.02]"
              : "opacity-100 scale-100"
          ].join(" ")}
        >
          <div className="h-full px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-10">
            <div className="flex h-full flex-col justify-between">
              <div
                key={slideIndex}
                className="flex justify-end"
              >
                <div className="flex flex-col items-end gap-2">
                  {isPreviewMode && (
                    <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                      Preview Mode
                    </span>
                  )}
                  <span className="animate-[fadeUp_0.4s_ease-out] pt-6 text-right text-lg text-white sm:text-2xl md:pt-10 md:text-3xl lg:pr-13 lg:text-4xl">
                    {currentSlide}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[64px] leading-none text-white transition-all duration-200 sm:text-[88px] md:text-[110px] lg:text-[130px]">
                  <span>{progress}</span> <span>%</span>
                </div>

                <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-200"
                    style={{
                      width: `${progress}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
