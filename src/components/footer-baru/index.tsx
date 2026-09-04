"use client";
import { Questrial } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const questerial = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const layananKami = [
    {index:"1", name:"Tentang Kami", link:"/tentang-kami"},
    {index:"2", name:"Dibalik Layar", link:"/benaya-joshua"},
]

const temukankamar = [
    {index:"1", name:"Instagram", link:"/tentang-kami"},
    {index:"2", name:"Whatsapp", link:"/benaya-joshua"},
    {index:"3", name:"Upwork", link:"/benaya-joshua"},
    {index:"4", name:"Fiverr", link:"/benaya-joshua"},
    {index:"5", name:"Freelancer", link:"/benaya-joshua"},
]


export default function FooterBar(){
    return (
        <div>
            {/* desktop */}
            <div className={`${questerial.className} hidden md:block`}>
                <div className="pb-10 p-15 bg-[#4B4B4B] text-white">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-10 pt-10 pb-10">
                            <div className="flex flex-row justify-between">
                                {/* 1- Image */}
                                <div>
                                    <span>
                                        <img src="logo-optimal/kamar320-putih.webp" alt="" className="h-10"/>
                                    </span>
                                    <span className="flex flex-col mt-10">
                                        <span className="opacity-50">
                                            Alamat
                                        </span>
                                        <span>
                                            Jl. Boulevard Diponegoro No.1100, Klp. Dua, Kecamatan Kelapa Dua,<br/> Kabupaten Tangerang, Banten 15811
                                        </span>
                                    </span>
                                </div>

                                {/* 2 - Classname */}
                                <div className="flex flex-row gap-x-10">
                                    {/* section 1 */}
                                    <div className="flex flex-col gap-y-2">
                                        {/* judul */}
                                        <div className={poppins.className}>
                                            <h1 className="text-base font-medium text-white mb-5 opacity-70">tentang kamar320</h1>
                                        </div>
                                        {/* link */}
                                        <div className="flex flex-col gap-y-1">
                                            {
                                                layananKami.map((x) => {
                                                    return (
                                                        <div key={x.index}>
                                                            <Link href={x.link}>
                                                                {x.name}
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                   
                                    {/* section 2 */}
                                    <div>
                                        {/* judul */}
                                        <div className={poppins.className}>
                                            <h1 className="text-base font-medium text-white mb-5 opacity-70">kami berada di </h1>
                                        </div>
                                        {/* link */}
                                        <div className="flex flex-col gap-y-1">
                                            {
                                                temukankamar.map((x) => {
                                                    return (
                                                        <div key={x.index}>
                                                            <Link href={x.link}>
                                                                {x.name}
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-t pt-5">
                            <div className="flex flex-row justify-between w-full  text-sm">
                                <span>
                                    2026 © kamar320, All Rights Reserved
                                </span>
                                <span>
                                    develop by <span className={`${poppins.className} font-semibold`}>Benaya Joshua</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className={`${questerial.className} md:hidden`}>
                <div className="bg-[#4B4B4B] px-5 py-10 text-white sm:px-8">
                    <div className="flex flex-col gap-y-10">
                        <div>
                            <img
                                src="/logo-optimal/kamar320-putih.webp"
                                alt="logo-kamar-320"
                                className="h-8 w-auto"
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <span className="text-sm opacity-50">Alamat</span>
                            <p className="max-w-sm text-base leading-relaxed">
                                Jl. Boulevard Diponegoro No.1100, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15811
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-y-8 min-[420px]:grid-cols-2 min-[420px]:gap-x-8">
                            <div className="flex flex-col gap-y-3">
                                <div className={poppins.className}>
                                    <h1 className="text-sm font-medium text-white opacity-70">tentang kamar320</h1>
                                </div>
                                <div className="flex flex-col gap-y-2 border-l border-white/30 pl-3">
                                    {
                                        layananKami.map((x) => {
                                            return (
                                                <Link
                                                    key={x.index}
                                                    href={x.link}
                                                    className="text-base transition-opacity duration-300 hover:opacity-70"
                                                >
                                                    {x.name}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <div className={poppins.className}>
                                    <h1 className="text-sm font-medium text-white opacity-70">kami berada di</h1>
                                </div>
                                <div className="flex flex-col gap-y-2 border-l border-white/30 pl-3">
                                    {
                                        temukankamar.map((x) => {
                                            return (
                                                <Link
                                                    key={x.index}
                                                    href={x.link}
                                                    className="text-base transition-opacity duration-300 hover:opacity-70"
                                                >
                                                    {x.name}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/30 pt-5">
                            <div className="flex flex-col gap-y-2 text-sm text-white/80">
                                <span>2026 © kamar320, All Rights Reserved</span>
                                <span>
                                    develop by <span className={`${poppins.className} font-semibold text-white`}>Benaya Joshua</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
