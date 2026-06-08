"use client"
import { useState } from "react";
import { Questrial } from "next/font/google";
import LogoLoop from "@/decoration/LogoLoop";
import Link from "next/link";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

type journey = "Education" | "Organization" | "Work"

type journey_class = {
    id: string;
    title: string;
    image: string;
    description: string;
    date: string;
}

const education: journey_class[] = [
    {
        id: "1",
        title: "SMAS Lentera Harapan Medan",
        image: "ben/edu/lentera.jpg",
        description: "Kelas IPA",
        date: "2021 - 2025",
    },
    {
        id: "2",
        title: "Universitas Pelita Harapan",
        image: "ben/edu/uph.png",
        description: "Informatics 2024",
        date: "2024 - 2027 (terjadwal)",
    },
]

const organization: journey_class[] = [
    {
        id: "1",
        title: "Falcon Project",
        image: "ben/org/falcon.jpg",
        description: "menjadi bagian divisi dekorasi kreatif",
        date: "November 2024",
    },
    {
        id: "2",
        title: "IDEA 25",
        image: "ben/org/idea.png",
        description: "pembawa acara day 1 & day 2",
        date: "Juni 2025",
    },
    {
        id: "3",
        title: "Himpunan Mahasiswa Informatika",
        image: "ben/org/eks.jpeg",
        description: "Koordinator Departemen Eksternal",
        date: "Juli 2025 - Juli 2026",
    },
    {
        id: "4",
        title: "Welcoming Party co 2025",
        image: "ben/org/welpar.jpg",
        description: "menjadi bagian dalam divisi kreatif and games",
        date: "Oktober 2025",
    },
    {
        id: "5",
        title: "Tutor Me",
        image: "ben/org/tutorme.png",
        description: "Tutoring Kalkulus 1 dan 2",
        date: "Oktober 2025 & Februari 2026",
    },
    {
        id: "6",
        title: "Next Workshop",
        image: "ben/org/next.jpg",
        description: "bagian dalam divisi dana",
        date: "November 2025",
    },
    {
        id: "7",
        title: "IGC26 x Bank Jago",
        image: "ben/org/igc.jpg",
        description: "menjadi dewan pengawas / Steering Committee",
        date: "April 2026",
    },
    {
        id: "8",
        title: "Studi Banding HMIF UPH x Orbit SGU",
        image: "ben/org/studban.jpg",
        description: "menjadi dewan pengawas / Steering Committee",
        date: "April 2026",
    },
    {
        id: "9",
        title: "I-Trip",
        image: "ben/org/itrip.jpg",
        description: "menjadi bagian divisi Tata Tertib & Medis",
        date: "Juni 2026",
    },
   
]


const imageLogos = [
  { src: "ben/logo-looping/1.svg", alt: "typescrit" },
  { src: "ben/logo-looping/2.svg", alt: "typescrit" },
  { src: "ben/logo-looping/3.svg", alt: "typescrit" },
  { src: "ben/logo-looping/4.svg", alt: "typescrit" },
  { src: "ben/logo-looping/5.svg", alt: "typescrit" },
  { src: "ben/logo-looping/6.svg", alt: "typescrit" },
  { src: "ben/logo-looping/7.svg", alt: "typescrit" },
  { src: "ben/logo-looping/8.svg", alt: "typescrit" },
  { src: "ben/logo-looping/9.svg", alt: "typescrit" },
  { src: "ben/logo-looping/10.svg", alt: "typescrit" },
  { src: "ben/logo-looping/11.svg", alt: "typescrit" },
  { src: "ben/logo-looping/12.svg", alt: "typescrit" },
  { src: "ben/logo-looping/13.svg", alt: "typescrit" },
];

const work: journey_class[] = [
    {
        id: "1",
        title: "Marketing Part Time UPH",
        image: "ben/work/marketing.jpeg",
        description: "Liaison Officer dan Part Timer untuk Departemen Marketing UPH",
        date: "Februari 2026 - Now",
    },
]

export default function BenayaJoshua(){

    const [activeTab, setActiveTab] = useState<journey>("Education")

    return (
        <div className={quesFont.className}>
            <div className="p-5 sm:p-7 md:p-10 lg:p-15">
                <div className="flex flex-col gap-y-7 md:gap-y-9 lg:gap-y-10">
                    <div className="border-b border-[#d6d6d6] pb-6 md:pb-8 lg:pb-10">
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div>
                                <img src="ben/part.png" className="h-10 w-auto md:h-12 lg:h-14" alt="" />
                            </div>
                            <div>
                                <Link href="/" className="text-base underline md:text-lg lg:text-xl">
                                    Beranda Utama
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 1 : Nama dan Gambar */}
                    <div className="pt-4 text-[#4B4B4B] md:pt-8 lg:pt-10">
                        <h1 className="text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl lg:leading-none">
                            Benaya Joshua <br/> Ichlesia Simamora
                        </h1>
                    </div>
                    <div>
                        <img src="ben/ben.jpg" className="w-full h-auto" alt="" />
                    </div>
                    <div className="pb-4 md:pb-6 lg:pb-8">
                        <p className="text-lg text-[#7b7b7b] md:text-xl lg:text-2xl">
                            di tengah perkembangan teknologi yang bergerak semakin cepat, empati tetap menjadi fondasi dari setiap inovasi yang bermakna. Ketertarikan pada dunia Informatika berangkat dari keyakinan bahwa teknologi tidak hanya perlu bekerja dengan baik, tetapi juga mampu memahami kebutuhan manusia. Keberhasilan sebuah produk tidak semata diukur dari performanya, melainkan dari dampak positif yang dapat dirasakan oleh mereka yang menggunakannya.
                        </p>
                    </div>

                    {/* SECTION 2 : pengalaman */}
                    <div>
                        <h1 className="text-4xl text-[#4B4B4B] md:text-5xl lg:text-5xl">tentang ben</h1>
                    </div>
                    <div>
                        <div>
                            <div className="text-[#535353] mb-8 flex gap-6 overflow-x-auto border-b  text-sm whitespace-nowrap sm:mb-10 sm:gap-10 sm:text-base md:text-xl lg:gap-13">
                                <button
                                    onClick={() => setActiveTab("Education")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "Education"
                                        ? "border-b-3 border-[#5F2E6D] text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    Riwayat Pendidikan
                                </button>
                                <button
                                    onClick={() => setActiveTab("Organization")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "Organization"
                                        ? "border-b-3 border-[#5F2E6D]  text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    Pengalaman Organisasi
                                </button>
                                <button
                                    onClick={() => setActiveTab("Work")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "Work"
                                        ? "border-b-3 border-[#5F2E6D]  text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    Riwayat Kerja
                                </button>
                            </div>
                            {
                                activeTab === "Education" && (
                                    <div className="flex flex-col gap-6">
                                        {education.map((x) => {
                                            return(
                                                <div key={x.id} className="flex flex-col border-b border-[#cacaca] pb-8 pt-2 text-[#373737]">
                                                    <div className="">
                                                        <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:flex-row lg:gap-6">
                                                            <div className="w-full md:basis-5/12 lg:basis-4/10">
                                                                <div className="h-52 w-full overflow-hidden bg-amber-100 md:h-56 lg:h-50 lg:w-120">
                                                                    <img src={x.image} className="h-full w-full object-cover" alt={x.title} />
                                                                </div>
                                                            </div>
                                                            <div className="w-full md:basis-7/12 lg:basis-6/10">
                                                                <div className="flex h-full flex-col justify-between gap-4 lg:gap-0">
                                                                    <div className="text-2xl md:text-[26px] lg:text-[28px]">
                                                                        {x.title}
                                                                    </div>
                                                                    <div className="flex flex-col gap-x-6 text-lg md:text-xl lg:text-[22px]">
                                                                        <div className="text-[#6b6b6b]">{x.date}</div>
                                                                        <div> {x.description} </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            )
                                        })}
                                    </div>
                                )
                            }
                            {
                                activeTab === "Organization" && (
                                    <div className="flex flex-col gap-6">
                                        {organization.map((x) => {
                                            return(
                                                <div key={x.id} className="flex flex-col  border-b border-[#cacaca] pb-6 text-[#373737]">
                                                    <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:flex-row lg:gap-6">
                                                        <div className="w-full md:basis-5/12 lg:basis-4/10">
                                                            <div className="h-52 w-full overflow-hidden bg-amber-100 md:h-56 lg:h-50 lg:w-120">
                                                                <img src={x.image} className="h-full w-full object-cover" alt={x.title} />
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:basis-7/12 lg:basis-6/10">
                                                            <div className="flex h-full flex-col justify-between gap-4 lg:gap-0">
                                                                <div className="text-2xl md:text-[26px] lg:text-[28px]">
                                                                    {x.title}
                                                                </div>
                                                                <div className="flex flex-col gap-x-6 text-lg md:text-xl lg:text-[22px]">
                                                                    <div className="text-[#6b6b6b]">{x.date}</div>
                                                                    <div> {x.description} </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                            {
                                activeTab === "Work" && (
                                    <div className="flex flex-col gap-6">
                                        {work.map((x) => {
                                            return(
                                                <div key={x.id} className="flex flex-col  border-b border-[#cacaca] pb-6 text-[#373737]">
                                                    <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:flex-row lg:gap-6">
                                                        <div className="w-full md:basis-5/12 lg:basis-4/10">
                                                            <div className="h-52 w-full overflow-hidden bg-amber-100 md:h-56 lg:h-50 lg:w-120">
                                                                <img src={x.image} className="h-full w-full object-cover" alt={x.title} />
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:basis-7/12 lg:basis-6/10">
                                                            <div className="flex h-full flex-col justify-between gap-4 lg:gap-0">
                                                                <div className="text-2xl md:text-[26px] lg:text-[28px]">
                                                                    {x.title}
                                                                </div>
                                                                <div className="flex flex-col gap-x-6 text-lg md:text-xl lg:text-[22px]">
                                                                    <div className="text-[#6b6b6b]">{x.date}</div>
                                                                    <div> {x.description} </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>

                    {/* SECTION 3 : skill */}
                    <div className="pt-10 md:pt-16 lg:pt-20">
                        <h1 className="text-4xl text-[#4B4B4B] md:text-5xl lg:text-5xl">skill</h1>
                    </div>
                    <div>
                        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                            {/* Basic horizontal loop */}
                            <LogoLoop
                                logos={imageLogos}
                                speed={70}
                                direction="left"
                                logoHeight={60}
                                gap={60}
                                hoverSpeed={30}
                                scaleOnHover
                                fadeOut
                                fadeOutColor="#ffffff"
                                ariaLabel="Technology partners"
                            />
                        </div>
                    </div>


                    <div className="text-[#4B4B4B]">
                        <span className="text-xl md:text-2xl lg:text-2xl">tertarik melakukan kerja sama ? </span>
                        <span className="text-xl md:text-2xl lg:text-2xl">
                            <Link href="/contact">
                                <span className="underline"> hubungi disini</span>
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-col pb-12 text-[#4B4B4B] md:pb-16 lg:pb-20">
                        <span className="text-lg text-[#9e9e9e] md:text-xl lg:text-xl">kontak lainnya:</span>
                        <span className="wrap-break-words text-xl md:text-2xl lg:text-2xl">benaya.josua@kamar320.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
