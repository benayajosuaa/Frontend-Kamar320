"use client";

import { useEffect, useRef, useState } from "react";
import { poppins } from "@/lib/font";
import Link from "next/link";
import styles from "./our-tech.module.css";


const tech = [
    {id:"1", nama:"Google Workspace"},
    {id:"2", nama:"HTML"},
    {id:"3", nama:"CSS"},
    {id:"4", nama:"React"},
    {id:"5", nama:"next.js"},
    {id:"6", nama:"Tailwind CSS"},
    {id:"7", nama:"Express.js"},
    {id:"9", nama:"Typescript"},
    {id:"10", nama:"Javascript"},
    {id:"11", nama:"Golang"},
    {id:"12", nama:"Postgress SQL"},
]


export default function OurTechStack (){
    const sectionRef = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || !window.matchMedia("(max-width: 1023px) and (prefers-reduced-motion: no-preference)").matches) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setRevealed(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={revealed ? styles.revealed : undefined}>
            <div className="p-20 max-lg:px-10 max-lg:py-12 max-sm:px-5 max-sm:py-8">
                <div className="flex flex-col gap-y-10 max-lg:gap-y-8 max-sm:gap-y-6">
                    <div className={styles.reveal}>
                        <div className={poppins.className}>
                            <h1 className="text-3xl font-[#4B4B4B] max-lg:text-2xl max-sm:text-xl max-lg:leading-snug">orang kamar menggunakan ini <br className="max-sm:hidden"/> untuk memenuhi kebutuhan mu</h1>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-wrap gap-5 max-lg:gap-3 max-sm:gap-2">
                            {tech.map((x, index) => (
                                <div key={x.id} className={`${styles.reveal} shrink-0 max-lg:max-w-full`} style={{ animationDelay: `${80 + index * 45}ms` }}>
                                    <span className="flex whitespace-nowrap bg-white px-10 py-3 border border-[#5F2E6D] rounded-full hover:bg-[#5F2E6D] hover:text-white transition-colors duration-200 max-lg:px-6 max-lg:py-3 max-sm:px-4 max-sm:py-2">
                                        <span className="text-5xl max-lg:text-3xl max-sm:text-lg">
                                            {x.nama}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.reveal} pt-10 pb-20 max-lg:pt-4 max-lg:pb-8 max-sm:pt-2 max-sm:pb-4`}>
                        <div className="opacity-50">
                            <Link href="/work" className="max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
                                <span className="text-lg">Lihat Kerjaan Kami-</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
