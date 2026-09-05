"use client"
import { MdArrowOutward } from "react-icons/md";
import { poppins, quesFont } from "@/lib/font"
import NavigationBar from "@/components/navbar-baru"
import FooterBar from "@/components/footer-baru"

const linkIG = [
    {
        link: "https://www.instagram.com/p/DceA9ibElcd/?igsi=aWdtdzNqNWU0bm9n",
        image: "activity-optimal/act1.webp",
    },
    {
        link: "https://www.instagram.com/p/DZpZqbPEgmG/?igsi=cmtocnN6ajg3bnM2",
        image: "activity-optimal/act2.webp",
    },
    {
        link: "https://www.instagram.com/p/DZXpCqlEkl5/?igsi=aHNmcWU1ZmMyd3I3",
        image: "activity-optimal/act3.webp",
    },
    {
        link: "https://www.instagram.com/p/DZDLneUkn1h/?igsi=bTVjbXd0azh0ejZ1",
        image: "activity-optimal/act4.webp",
    },
]

export default function ActivityPage() {
    return (
        <div>
            {/* Navigation Bar */}
            <div>
                <NavigationBar solid />
            </div>

            {/* Section */}
            <div className="px-5 py-8 sm:px-8 sm:py-10 md:p-10 lg:p-15">

                {/* Judul */}
                <div className="pt-18 md:pt-20">
                    <span className={poppins.className}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#5F2E6D] font-bold underline wrap-break-words">
                            #maindiluarkamar
                        </h1>
                        
                    </span>
                </div>

                {/* penjelasan singkat */}
                <div className="pt-6 pb-8 ml-5 md:ml-10 md:pt-10 md:pb-10">
                    <div className={poppins.className}>
                        <h1 className="text-xl sm:text-2xl font-semibold pt-6 md:pt-10 text-[#4B4B4B] leading-snug">
                            Di Kamar320, kami tidak hanya membangun produk. <br className="hidden lg:block"/> Kami juga membangun cerita
                        </h1>
                    </div>
                    <div className={quesFont.className}>
                        <p className="text-base sm:text-lg mt-3 md:mt-2 leading-relaxed">
                            Kamar320 memang tumbuh dari teknologi dan dunia digital, tapi cerita kami tidak berhenti di depan layar.
                            <br className="hidden lg:block" />
                            Lewat <span className="underline">#maindiluarkamar</span>, kami keluar, berkegiatan, mencoba hal baru, dan menikmati cerita di luar kamar.
                        </p>
                    </div>
                </div>
                
                {/* Embed Instagram */}
                <div className="pt-4 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between w-full gap-y-6 gap-x-6 md:gap-y-8 md:gap-x-8 lg:gap-y-10 lg:gap-x-10">

                        {linkIG.map((post, index) => (
                            <a
                                key={index}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block overflow-hidden rounded-lg"
                            >
                                <img
                                    src={post.image}
                                    alt={`Instagram Post ${index + 1}`}
                                    className="w-full aspect-4/5 object-cover transition duration-300 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-[#5F2E6D]/0 group-hover:opacity-90 transition duration-300 group-hover:bg-[#5F2E6D]">
                                    <span className="text-white font-semibold text-lg opacity-0 transition duration-300 group-hover:opacity-100">
                                        <span className="flex flex-row items-center justify-center gap-x-3">
                                            <span>kunjungi postingan</span>
                                            <span><MdArrowOutward /></span>
                                        </span>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>



            </div>

            {/* Footer */}
            <div>
                <FooterBar />
            </div>
        </div>
    )
}
