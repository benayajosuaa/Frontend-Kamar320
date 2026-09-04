import { poppins, quesFont } from "@/lib/font";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io"; 

export default function TentangKamar (){
    return (
        <div  className="">
            <div className="">
                <div className="flex items-center px-5 py-20 text-white sm:px-8 sm:py-24 md:px-10 lg:p-20 lg:pt-50 lg:pb-60">
                    <div className="flex w-full flex-col items-start gap-y-8 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0">
                        <div className="w-full lg:basis-4/10">
                            <div className="aspect-square w-full overflow-hidden bg-amber-100 sm:max-w-120 lg:h-120 lg:w-120 lg:max-w-none">
                                <img src="home-optimal/kamar320.webp" alt="" className="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full lg:basis-6/10">
                            <div className="flex flex-col">
                                {/* Judul */}
                                <div className={poppins.className}>
                                    <h1 className={`${poppins.className} text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                                        Tentang kamar320
                                    </h1>
                                </div>
                                {/* penjelasan */}
                                <div className={quesFont.className}>
                                    <p className="pt-6 text-base leading-relaxed sm:text-lg lg:pt-10">
                                        Kamar320 merupakan representasi dari sebuah ruang kecil yang melahirkan ide-ide unik. Berawal dari sebuah kamar bersama pada asrama kampus yang menjadi tempat bertumbuhnya kreativitas, eksperimen, dan ketertarikan terhadap dunia digital, Kamar320 berkembang menjadi identitas yang membawa semangat inovasi dan eksplorasi tanpa batas.
                                    </p>
                                </div>
                                <div className="pt-8 lg:pt-10">
                                    <div >
                                        <Link href="/tentang-kami">
                                            <button className="flex flex-row items-center gap-x-2 rounded-lg bg-[#F7F3F0] p-2 pr-4 pl-6 text-[#5F2E6D]">
                                                <span>lihat lebih lanjut</span>
                                                <span className="text-2xl"><IoIosArrowRoundForward/></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
