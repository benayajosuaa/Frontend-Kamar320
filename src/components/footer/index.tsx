"use client"
import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const navigationLink = [
    { href: "/work", label: "Kerjaan kamar320" },
    { href: "/services", label: "Pelayanan" },
    { href: "/contact", label: "Relasi" },
]


const hyperlinkContact = [
    {index:1, href:"https://wa.me/628970052654?text=Hai!%20Tertarik%20ingin%20bekerja%20sama%20di%20Kamar320", label:"Whatsapp"},
    {index:2, href:"https://instagram.com/benayajosuaa", label:"Instagram"},
    {index:3, href:"https://https://www.upwork.com/freelancers/~01df8530f02c3e2b73?mp_source=share.com/benayajosuaa", label:"Upwork"},
    {index:4, href:"https://www.freelancer.co.id/u/benayajosua?frm=benayajosua&sb=t", label:"Freelancer"},
]

const gerbangFooter = [
    { index:"1", href: "/under-development", label:"masuk ke kamar"},
    { index:"2",href: "/under-development", label:"jadilah bagian kamar320"},
]

export default function NavigationBar() {
    return (
        <div className={`${quesFont.className} relative`} data-navbar-theme="dark">
            {/* DESKTOP */}
            <div className="hidden md:block" data-navbar-theme="dark">
                <div className={`relative text-white isolate overflow-hidden pointer-events-none h-screen bg-[#4B4B4B]`}>
                {/* Section 1 */}
                <div>
                    {/* pembagian */}
                    <div className="grid grid-cols-2 items-center px-15 pt-9 pb-0">
                        {/* kiri */}
                        <div className=""/>
                            {/* kanan */}
                            <div className="">
                                <div className="grid grid-cols-4 gap-0 divide-y divide-[#ffffff] ">
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="flex h-11 items-center border-l  border-b border-[#ffffff] px-1 justify-center ">
                                        <p className="text-lg ">Phone</p>
                                    </div>
                                    <div className="pl-5 p-2 col-span-3 flex h-11 items-center  border-r border-b border-l border-[#ffffff] px-1">
                                        <p className="text-lg">+62 897-0052-654</p>
                                    </div>
                                    <div className="flex h-11 items-center justify-center border-l  border-b border-[#ffffff] px-1">
                                        <p className="text-lg">Email</p>
                                    </div>
                                    <div className="pl-5 p-2  col-span-3 flex h-11 items-center  border-r  border-l border-[#ffffff] px-1">
                                        <p className="text-lg">
                                            information@kamar320.com
                                        </p>
                                    </div>
                                    <div className="bg-transparent h-11 border-0"/>
                                    <div className="pl-5 p-2 col-span-3 flex h-auto items-center  border-r border-b border-l border-[#ffffff] px-1">
                                        <p className="text-lg">
                                            Jl. Boulevard M.H. Thamrin 1100, <br/> Lippo Village, Kelapa Dua, <br/> Tangerang, Banten <br/>Indonesia  
                                            <br/>
                                            <span className="text-sm italic">*alamat bisa berubah kapan saja</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Section 2*/}
                    <div className="absolute bottom-0 bg-transparent p-15">
                        <div className="flex flex-row gap-x-5 pb-2 pointer-events-auto">
                            {
                                gerbangFooter.map((x) => {
                                    return (
                                        <Link
                                            key={x.index}
                                            href={x.href}
                                            className="flex flex-row text-xl text-[#8f8f8f]"
                                        >
                                            {x.label}  |
                                        </Link>
                                        
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl">Kecakapan pelayanan profesional dan responsif</h1>
                        </div>
                        <div className="pt-10">
                            <h4 className="text-xl">
                                <span>2026 © kamar320  - </span>
                                <span>develop by Benaya Joshua, part of </span>
                                <span className="font-underline">halobenaya.com</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden" data-navbar-theme="dark">
                <div className="p-8 pt-20 bg-[#4B4B4B]">
                   <div className="flex flex-col text-white">
                        <div className=" pb-2">
                            <img 
                                className="h-7 w-auto"
                                src="logo/tulisan-kamar.png" alt="icon-kamar320" 
                            />
                        </div>

                        <div className="text-sm pb-2">
                            <p>tempat merealisasikan ide sebelum tidur</p>
                        </div>

                        <div className="flex flex-row pt-13 pb-15">
                            {/* Social Media */}
                            <div className="flex basis-1/2 flex-col">
                                <div className="pb-2">
                                    <h1 className="text-lg text-[#ababab] font-semibold">Sosial</h1>
                                </div>
                                <div className="gap-y-1 flex flex-col border-l pl-2">
                                    {
                                        hyperlinkContact.map((x)=> {
                                            return (
                                                <div key={x.href}>
                                                    <Link
                                                        key={x.href} 
                                                        href={x.href}
                                                        target="blank"
                                                        >
                                                            {x.label}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> 
                            {/* Media sosial */}
                            <div className="flex basis-1/2 flex-col">
                                <div className="pb-3">
                                    <h1 className="text-lg text-[#ababab] font-semibold">Link</h1>
                                </div>
                                <div className="gap-y-1 flex flex-col border-l pl-2">
                                    {
                                        navigationLink.map((x) => {
                                            return (
                                                <div key={x.href}>
                                                    <Link
                                                        href={x.href}
                                                    >
                                                        {x.label}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> 
                        </div>
                        

                        <div className="pt-2 pb-4">
                            <div className="flex flex-row gap-x-3 pointer-events-auto">
                                {
                                    gerbangFooter.map((x) => {
                                        return (
                                            <Link
                                                key={x.index}
                                                href={x.href}
                                                className="flex flex-row text-[14px] text-[#8f8f8f]"
                                            >
                                                {x.label} |
                                            </Link>
                                            
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <h1 className="text-sm">
                                Jl. Boulevard M.H. Thamrin 1100, <br/> Lippo Village, Kelapa Dua, <br/> Tangerang, Banten <br/>Indonesia 
                            </h1>
                        </div>

                        <div>
                            <h4 className="text-sm text-center pt-15 pb-8">
                                <span>2026 © kamar320  - </span>
                                <span>develop by Benaya Joshua, part of </span>
                                <span className="font-underline">halobenaya.com</span>
                            </h4>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
