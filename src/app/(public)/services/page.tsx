"use client"
import Link from "next/link";
import Navbar from "../../../components/navbar-baru"
import Footer from "../../../components/footer-baru"
import { Questrial } from "next/font/google";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const services = [
    { 
        number: "01.",
        title: "Ngobrol & Menyusun Rencana",
        description:"Kami memulai dengan memahami kebutuhan, tujuan, serta gambaran besar dari proyek yang ingin dikembangkan. Dari sini, ide mulai disusun menjadi rencana yang lebih terarah dan realistis.",
    },
    {
        number: "02.",
        title: "Mulai Proses Pengembangan",
        description:"Setelah konsep dan arah proyek disepakati, proses pengerjaan dimulai secara bertahap. Mulai dari desain, pengembangan sistem, hingga implementasi fitur dilakukan dengan fokus pada kualitas dan kenyamanan pengguna.",
    },
    {
        number: "03.",
        title: "Cek, Evaluasi, & Penyempurnaan",
        description:"Sebelum sistem digunakan sepenuhnya, seluruh bagian akan diperiksa dan diuji terlebih dahulu. Tahap ini membantu memastikan semuanya berjalan stabil, rapi, dan sesuai dengan kebutuhan.",
    },
    {
        number: "04.",
        title: "Tetap Didampingi Setelah Rilis",
        description:"Proyek selesai bukan berarti komunikasi berhenti. Kami tetap menyediakan dukungan, maintenance, dan pengembangan lanjutan agar sistem dapat terus berkembang seiring waktu.",
    },
]



export default function HomePage(){
    const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");
    const darkSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleScroll = () => {
        const rect = darkSectionRef.current?.getBoundingClientRect();
        if (!rect) return;

        const isDark = rect.top <= 120 && rect.bottom >= 120;
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


    return (
        <div className={`${quesFont.className} bg-transparent`}>
            <div className="fixed z-30 w-full bg-transparent">
                <Navbar solid />
            </div>
            <div>
                <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-15 lg:p-15">
                    {/* SECTION 1 */}
                    <div>
                        <div className="pt-24 pb-5 sm:pt-28 sm:pb-6 md:pt-30 md:pb-8 lg:pt-20 lg:pb-8">
                            <h1 className="text-3xl font-bold text-[#5F2E6D] sm:text-4xl md:text-[2.7rem] lg:text-4xl">
                                pelayanan dari kamar320
                            </h1>
                        </div>
                    </div>

                    {/* SECTION 2b */}
                    <div>
                       <div className="flex pb-10 flex-row gap-x-4 max-w-4xl text-lg leading-relaxed sm:text-xl md:text-[1.7rem] lg:text-2xl">
                            <span>Website</span>
                            <span className="text-[#cecece] font-semibold">|</span>
                            <span>Design</span>
                            <span className="text-[#cecece] font-semibold">|</span>
                            <span>Presentation</span>
                       </div>
                    </div>
                    
                    {/* SECTION 2b */}
                    <div>
                       <div className="max-w-4xl text-lg leading-relaxed sm:text-xl md:text-[1.7rem] lg:text-2xl">
                            <p>
                                Dari obrolan awal sampai sistem berjalan
                                <br className="hidden sm:block"/>
                                <span className="sm:hidden"> </span>
                                semua proses dirancang agar jelas, terarah, dan nyaman dijalani bersama.
                            </p>
                       </div>
                    </div>

                    {/* SECTION 3 */}
                    <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-15">
                        <div className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-9 lg:gap-y-10">
                            {
                                services.map((x)=>(
                                    <div
                                        key={x.number}
                                        className="border-b border-neutral-300 pb-6 sm:pb-7 md:pb-8 lg:flex lg:flex-row lg:pb-8"
                                    >
                                        <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:flex-row">
                                            <div className="flex lg:basis-2/6">
                                                <h1 className="font-semiboldbold text-3xl text-[#5F2E6D] sm:text-4xl md:text-[3.4rem] ">
                                                    {x.number}
                                                </h1>
                                            </div>
                                            <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 lg:basis-4/6 lg:gap-y-6">
                                                <div>
                                                    <h1 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-[2rem] lg:text-3xl">
                                                        {x.title}
                                                    </h1>
                                                </div>
                                                <div>
                                                    <p className="text-base leading-relaxed text-neutral-800 sm:text-base md:text-lg">
                                                        {x.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* SECTION 4 */}
                    <div className="pt-14 pb-10 sm:pt-12 md:pt-26 md:pl-10">
                        <div className="flex max-w-3xl flex-col gap-y-5 sm:gap-y-6">
                            <div>
                                <p className="text-lg leading-relaxed sm:text-xl md:text-2xl">
                                    tertarik untuk masuk <span className="text-[#5F2E6D] font-semibold">kamar320</span>
                                    <br className="hidden sm:block" />
                                    <span className="sm:hidden"> </span>
                                    atau masih ragu?
                                </p>
                            </div>
                            <div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-between  gap-x-3 rounded-2xl border border-[#4b2157] bg-[#5F2E6D] px-4 py-3 text-base text-white transition-all duration-300 ease-out sm:w-fit
                                        sm:justify-center sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-lg"
                                >
                                    <span className="font-medium">ngobrolin aja dulu</span>
                                    <span className="flex items-center text-2xl sm:text-[1.7rem]">
                                        <IoIosArrowRoundForward />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div ref={darkSectionRef} className="relative z-20">
                <Footer/>
            </div>
        </div>
    )
}
