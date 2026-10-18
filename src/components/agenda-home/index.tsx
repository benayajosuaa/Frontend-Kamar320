"use client";

import { useEffect, useRef, useState } from "react";
import { poppins } from "@/lib/font";
import Link from "next/link";


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
        <div ref={sectionRef}>
            <div className="p-20 max-lg:px-15 lg:px-15 max-lg:py-28 lg:py-25 max-sm:px-5 max-sm:py-8">
                <div className="flex flex-col gap-y-10 max-lg:gap-y-8 max-sm:gap-y-6">
                    <div className="flex flex-col gap-y-10">
                        {/* judul */}
                        <div>
                            <div className={poppins.className}>
                                <h1 className="text-4xl font-semibold text-[#4B4B4B] max-lg:text-2xl max-sm:text-xl max-lg:leading-snug">
                                    Agenda Kami
                                </h1>
                            </div>
                        </div>

                        {/* section */}
                        <div className="w-full">
                            <div className="w-full  h-150 p-10 border rounded-xl">
                                <div className="flex w-full h-full justify-center items-center">
                                    <h1>Dalam Masa Perbaikan heheheh.....</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
