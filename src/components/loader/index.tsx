"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useState, useEffect, useMemo } from "react"
import { Questrial } from "next/font/google"

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
})

const loader_words = [
  "8 Jam Kuliah",
  "8 Jam Belajar",
  "2 Jam Drakor",
  "6 Jam Tidur",
  "kamar320.com",
]

type LoaderProps = {
  children?: ReactNode
}

export default function Loader({ children }: LoaderProps) {
  const pathname = usePathname()

  // progress 0 -> 100
  const [progress, setProgress] = useState(0)

  // loading selesai
  const [isDone, setDone] = useState(false)

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

    const start = performance.now()
    const duration = 2600

    const tick = (now: number) => {

      const elapsed = now - start

      const ratio = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - ratio, 3)

      const nextProgress = Math.round(eased * 100)

      setProgress(nextProgress)

      if (ratio < 1) {
        requestAnimationFrame(tick)
      } else if (isPreviewMode) {
        setProgress(100)
      } else {
        setDone(true)
      }

    }

    requestAnimationFrame(tick)

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

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}
