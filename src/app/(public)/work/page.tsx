"use client"
import Navbar from "../../../components/navbar-baru"
import Footer from "../../../components/footer-baru"
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "motion/react";

import { poppins, quesFont } from "@/lib/font";

const listWork = [
    {   
        index:1,
        title:"Static Company Profile - CV Terang Berkat Mandiri",
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

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const workItemVariants: Variants = {
    hidden: { opacity: 0, y: 54 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: Math.min(index * 0.08, 0.24),
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 24 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};


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


                <div className="pt-10 pb-20 max-lg:pt-16 max-md:pb-12">
                    {/* judul */}
                    <div className="">
                        <div className="p-15 max-lg:px-8 max-lg:py-12 max-md:px-5 max-md:py-9">
                            <div className="">
                                <span className={poppins.className}>
                                    <motion.h1
                                        variants={titleVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-5xl font-semibold text-[#5F2E6D] max-lg:text-4xl max-md:text-3xl"
                                    >
                                        kerjaan kami
                                    </motion.h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* section */}
                    <div className="p-10 max-lg:px-8 max-lg:py-4 max-md:px-5">
                        <div className="">
                            {
                                listWork.map((x, itemIndex) => {
                                    return(
                                        <motion.div
                                            key={x.index}
                                            custom={itemIndex}
                                            variants={workItemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.25, margin: "0px 0px -12% 0px" }}
                                            className="group p-10 pb-10 border-t max-lg:px-0 max-lg:py-8 max-md:py-7"
                                        >
                                            <div className="flex flex-row gap-x-10 max-lg:flex-col max-lg:gap-y-6">
                                                <div className="basis-4/10 h-full max-lg:basis-auto">
                                                    <div className="flex flex-col justify-between h-100 max-lg:h-auto max-lg:gap-6">
                                                        {/* Judul */}
                                                        <div>
                                                            <h1 className="text-4xl text-[#4B4B4B] transition-colors duration-500 group-hover:text-[#5F2E6D] max-lg:max-w-3xl max-lg:text-3xl max-md:text-2xl">
                                                                {x.title}
                                                            </h1>
                                                        </div>
                                                        {/* Link Slug */}
                                                        <div>
                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="
                                                                        group inline-flex items-center gap-3
                                                                        rounded-xl border border-[#4B4B4B]/25
                                                                        bg-white px-5 py-1
                                                                        text-[#4B4B4B]
                                                                        transition-all duration-300 ease-out
                                                                        hover:-translate-y-0.5 hover:border-[#5F2E6D]
                                                                        hover:bg-[#5F2E6D] hover:text-white
                                                                        active:translate-y-0 active:scale-95
                                                                        focus-visible:outline-none
                                                                        focus-visible:ring-4 focus-visible:ring-[#5F2E6D]/25
                                                                        motion-reduce:transform-none motion-reduce:transition-none
                                                                        max-md:px-4 max-md:py-1.5
                                                                    "
                                                                    >
                                                                    <span className="font-medium">Lihat Detailnya</span>

                                                                    <span
                                                                        className="
                                                                        flex size-8 items-center justify-center rounded-full
                                                                        transition-colors duration-300
                                                                        "
                                                                    >
                                                                        <IoMdArrowForward
                                                                        className="
                                                                            transition-transform duration-300 ease-out
                                                                            group-hover:translate-x-1
                                                                        "
                                                                        />
                                                                    </span>
                                                                    </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-6/10 max-lg:basis-auto">
                                                    <motion.div
                                                        variants={imageVariants}
                                                        className="w-auto h-100 overflow-hidden rounded-lg border max-lg:h-105 max-md:h-65"
                                                    >
                                                        {/* nanti image buat object cover */}
                                                        <img
                                                            className="object-cover w-full h-100 rounded-lg object-[center_0%] transition-transform duration-700 ease-out group-hover:scale-[1.035] max-lg:h-full"
                                                            src={x.gambar}
                                                            alt={x.title}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
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
