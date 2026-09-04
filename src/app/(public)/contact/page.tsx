"use client"
import Link from "next/link";
import Navbar from "../../../components/navbar-baru"
import Footer from "../../../components/footer-baru"
import { Questrial } from "next/font/google";
import { useState, useRef } from "react";
import { useEffect } from "react";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const hyperlinkContact = [
    {index:1, href:"https://wa.me/628970052654?text=Hai!%20Tertarik%20ingin%20bekerja%20sama%20di%20Kamar320", label:"Whatsapp"},
    {index:2, href:"https://instagram.com/benayajosuaa", label:"Instagram"},
    {index:3, href:"https://https://www.upwork.com/freelancers/~01df8530f02c3e2b73?mp_source=share.com/benayajosuaa", label:"Upwork"},
    {index:4, href:"https://www.freelancer.co.id/u/benayajosua?frm=benayajosua&sb=t", label:"Freelancer"},
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
                <Navbar solid/>
            </div>
            <div>
                <div className="px-4 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-15 lg:py-15">
                    <div className="flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-10">
                        {/* SECTION JUDUL */}
                        <div>
                            <div className="pt-12 pb-5 sm:pt-12 sm:pb-6 md:pt-30 md:pb-5 lg:pt-20 lg:pb-6">
                                <h1 className="text-3xl font-bold text-[#5F2E6D] sm:text-4xl md:text-[2.7rem] lg:text-4xl">relasi kamar320</h1>
                            </div>
                        </div>
                        
                        {/* SECTION NAVBAR */}
                        <div className="flex flex-wrap gap-x-2 gap-y-1 pb-2 text-base sm:gap-x-4 sm:gap-y-2 sm:pb-6 sm:text-xl md:text-2xl lg:pb-8">
                            {
                                hyperlinkContact.map((x) => {
                                    return (
                                        <Link
                                            key={x.index}
                                            href={x.href}
                                            target="blank"
                                            className="flex flex-row items-center justify-center gap-x-2"
                                        >
                                            <span>
                                                {x.label} 
                                            </span>
                                            <span className="text-[#c0c0c0] font-semibold">|</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* section informasi */}
                        <div className="flex justify-start">
                            <div className="inline-flex max-w-full bg-amber-200 px-3 py-2 text-[10px] leading-snug text-[#4B4B4B] sm:px-4 sm:text-xs md:text-sm">
                                <h1>untuk saat ini proses komunikasi hanya bisa di akses melalui whatsapp dan Instagram</h1>
                            </div>
                        </div>

                        {/* FORM CONTACT */}
                        <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 lg:flex-row lg:items-stretch">
                            {/* BAGIAN_FORM_1 */}
                            <div className="basis-full px-1 py-2 sm:p-5 md:p-6 lg:basis-3/10 lg:p-0">
                                <div className="flex h-full flex-col gap-y-6 sm:gap-y-8">
                                    {/* Nama */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1  className="text-base">Nama</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Benaya Simamora"
                                            />
                                        </span>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Email</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="email" 
                                                placeholder="alamatemail@domain.mu"
                                            />
                                        </span>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Nomor Telephone</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="tel" 
                                                placeholder="+62 897-0052-654"
                                            />
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Keperluan</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Mau buat Landing Page"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN_2_FORM */}
                            <div className="basis-full px-1 py-2 sm:p-5 md:p-6 lg:basis-7/10 lg:p-0">
                                <div className="flex h-full flex-col">
                                    <div className="pb-1 sm:pb-2">
                                        <h1 className="text-base">Deskripsi Detail</h1>
                                    </div>
                                    <div className="w-full flex-1">
                                        <textarea
                                            className="h-full min-h-56 w-full resize-none border border-black px-3 py-3 pr-3 text-base font-medium outline-none sm:min-h-60 sm:px-3 sm:py-3 sm:pr-5 sm:text-lg md:min-h-64 md:text-xl lg:min-h-64"
                                            placeholder="Mau buat Landing Page dengan ... "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* BUTTON */}
                        <div className="pt-0 sm:pt-0">
                            <div className="flex items-center justify-stretch sm:justify-end">
                                <button className="w-full rounded-lg border border-black bg-[#dadada] px-5 py-3.5 text-base sm:w-auto sm:px-8 sm:py-2.5 sm:text-lg md:text-xl">
                                    kirim pesan
                                </button>
                            </div>
                        </div>


                        {/* PEMBERITAHUAN */}
                        <div className="flex flex-col gap-y-2 pt-1 sm:gap-y-3 sm:pt-0">
                            <div>
                                <h1 className="text-2xl sm:text-3xl">Perhatian!</h1>
                            </div>
                            <div className="flex text-sm sm:text-sm">
                                <p className="w-full leading-relaxed md:max-w-[75%] lg:basis-3/5">
                                    Kamar320 mengimbau untuk berhati-hati terhadap segala bentuk informasi palsu, 
                                    akun tiruan, maupun nomor yang mengatasnamakan pihak Kamar320. 
                                    Seluruh komunikasi resmi hanya dilakukan melalui kontak dan kanal 
                                    yang telah dicantumkan secara resmi oleh Kamar320, 
                                    termasuk nomor telepon resmi: +62 897-0052-654. 
                                    Kami tidak pernah meminta password, kode OTP, ataupun data pribadi sensitif melalui 
                                    chat pribadi maupun pihak ketiga. Jika menemukan aktivitas mencurigakan atau 
                                    informasi yang diragukan kebenarannya, harap segera melakukan verifikasi melalui kontak resmi Kamar320.
                                </p>
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
