"use client"
import Navbar from "../../../components/navbar-baru"
import Footer from "../../../components/footer-baru"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const listWork = [
    {   
        index:1,
        title:"Company Profile - CV Terang Berkat Mandiri",
        gambar:"work/tbm.png",
        link_demo:"https://terang-berkat-mandiri.vercel.app",
        magazine:"/under-development",
        type:"Website"
    },
    {   
        index:2,
        title:"Photoscape - Online Booking Studio",
        gambar:"work/photoscape.png",
        link_demo:"https://photoscape-frontend.vercel.app/",
        magazine:"/under-development",
        type:"Website"
    },
    {
        index:3,
        title:"Personal Portfolio",
        gambar:"work/haloben.png",
        link_demo:"https://www.halobenaya.com/",
        magazine:"/under-development",
        type:"Website"
    },
    {
        index:4,
        title:"Vector Database for Recipe",
        gambar:"work/sbd.png",
        link_demo:"/under-development",
        magazine:"/under-development",
        type:"Website"
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
        <div className={` ${quesFont.className}`}>
            <div>
                <div className="fixed w-full z-30">
                    <Navbar solid/>
                </div>


                <div className="px-4 py-12 sm:px-8 sm:py-14 md:px-10 lg:p-15">
                    <div className="flex flex-col">
                        {/* Judul */}
                        <div>
                            <div className="pt-14 pb-8 sm:pt-20 sm:pb-10 md:pt-28 md:pb-12 lg:pt-20 lg:pb-0">
                                <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#5F2E6D] sm:text-4xl md:text-[2.7rem] lg:text-4xl">yang sudah dikerjakan kamar320</h1>
                            </div>
                        </div>
                        {/* Section */}
                        <div className="pt-10 flex flex-col gap-y-10 sm:gap-y-12 lg:gap-y-8">
                            {
                                listWork.map((x) => {
                                    return (
                                        <div key={x.index} className="flex flex-col gap-y-7 sm:gap-y-7 lg:gap-y-7">
                                            <div className="border-b border-[#d0d0d0] pb-8 sm:pb-10 lg:pb-8">
                                                <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 lg:gap-x-0">
                                                    <div className="flex w-full md:basis-4/10 lg:basis-4/10">
                                                        <div className="flex aspect-16/10 w-full overflow-hidden bg-amber-300 md:h-44 lg:h-40 lg:w-80 lg:aspect-auto">
                                                            <img 
                                                                className="h-full w-full border border-gray-200 object-cover object-[center_0%] lg:h-40 lg:w-80"
                                                                src={x.gambar} alt="" 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full md:basis-6/10 lg:basis-6/10">
                                                        <div className="flex w-full flex-col justify-between gap-y-5 md:min-h-44 lg:min-h-0 lg:gap-y-0">
                                                            <div>
                                                                <h1 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-2xl lg:text-2xl">
                                                                    {x.title}
                                                                </h1>
                                                            </div>
                                                            <div  className="flex flex-wrap items-center gap-x-2 md:gap-x-5 gap-y-2 lg:flex-nowrap">
                                                                <div>
                                                                    <h1 className="text-base font-semibold sm:text-lg">
                                                                        {x.type}
                                                                    </h1>
                                                                </div>
                                                                <span className="font-extrabold text-[#d0d0d0]"> | </span>
                                                                <div className="text-base font-semibold underline-offset-4 hover:underline sm:text-lg">
                                                                    <Link target="blank" href={x.magazine}>
                                                                        Majalah Project
                                                                    </Link>
                                                                </div>
                                                                <span className="font-extrabold text-[#d0d0d0]"> | </span>
                                                                <div className="text-base font-semibold underline-offset-4 hover:underline sm:text-lg"> 
                                                                    <Link target="blank" href={x.link_demo}>
                                                                        Demo Project
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                        
                <div ref={darkSectionRef} className="">
                    <Footer/>
                </div>
            </div>  
        </div>
    )
}
