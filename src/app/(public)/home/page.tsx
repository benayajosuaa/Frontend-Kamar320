"use client"
import Navbar from "../../../components/navbar-baru"
import Footer from "../../../components/footer-baru"
import BlurText from "../../../decoration/blurtext"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io"; 
import { poppins, quesFont } from "@/lib/font";
import TentangKamar from "@/components/about-kamar";
import OurStack from "@/components/our-tech-home";
import AgendaKamar from "@/components/agenda-home"


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



export default function HomePage() {
    const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");
    const heroSectionRef = useRef<HTMLDivElement>(null);
    const section1SectionRef = useRef<HTMLDivElement>(null);
    const darkSectionRef = useRef<HTMLDivElement>(null);
    const footerSectionRef = useRef<HTMLDivElement>(null);
    const [showHeroBlurText, setShowHeroBlurText] = useState(false)

    useEffect(() => {
        const isSectionActive = (section: HTMLDivElement | null) => {
            const rect = section?.getBoundingClientRect();

            if (!rect) {
                return false;
            }

            return rect.top <= 200 && rect.bottom >= 200;
        };

        const handleScroll = () => {
            const isDark =
                isSectionActive(section1SectionRef.current) ||
                isSectionActive(heroSectionRef.current) ||
                isSectionActive(darkSectionRef.current) ||
                isSectionActive(footerSectionRef.current);

            setNavbarTheme(isDark ? "dark" : "light");
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (document.body.dataset.loaderDone === "true") {
            setShowHeroBlurText(true);
            return;
        }

        const handleLoaderComplete = () => {
            setShowHeroBlurText(true);
        };

        window.addEventListener("kamar320:loader-complete", handleLoaderComplete);

        return () => {
            window.removeEventListener("kamar320:loader-complete", handleLoaderComplete);
        };
    }, []);

    return (
        <div className="overflow-x-hidden bg-[#5F2E6D]">
            {/* SECTION: NAVBAR */}
            <div className="fixed z-30 w-full">
                <Navbar />
            </div>

            {/* {quesFont.className} */}
            {/* SECTION: 1 */}
            <div className={quesFont.className}>
                <div ref={section1SectionRef}>
                    <div className="flex flex-col relative bg-[#5F2E6D]">
                        <div className="relative flex min-h-screen items-center justify-center px-4 text-2xl sm:px-6 md:px-10 lg:px-0">
                            {/* Background Image
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img src="/ulitity/tesing.png" alt="background" className="w-full h-full object-cover" />
                            </div> */}

                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col gap-y-4 text-center text-white">
                                <div className="relative">
                                    {showHeroBlurText && (
                                        <BlurText
                                            key="hero-loader-ready"
                                            text="Selamat datang di Kamar 320"
                                            delay={300}
                                            animateBy="words"
                                            direction="top"
                                            onAnimationComplete={handleAnimationComplete}
                                            className="mb-8 text-3xl sm:text-4xl md:text-5xl"
                                        />
                                    )}
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: 2 */}
            <div ref={heroSectionRef} className="bg-[#ffffff]">
                <div  className="">
                     <AgendaKamar />
                </div>
            </div>


            {/* SECTION: ... */}
            <div ref={heroSectionRef} className="bg-[#5F2E6D]">
                <div  className="">
                   
                    <TentangKamar />
                </div>
            </div>

            {/* SECTION: ... */}
            <div ref={heroSectionRef} className="bg-[#ffffff]">
                <div className="pt-20">
                    <OurStack />
                </div>
            </div>

            {/* SECTION: FOOTER */}
            <div ref={footerSectionRef} className="">
                <Footer />
            </div>
        </div>
  )
}
