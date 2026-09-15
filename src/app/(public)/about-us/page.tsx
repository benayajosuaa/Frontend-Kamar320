"use client"
import { Questrial } from "next/font/google";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer-baru"
import NavigationBar from "@/components/navbar-baru";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});


const visi = [
    {id:"1", nomor:"01", nama:"Adaptive Agility", desc:"Bergerak cepat, tetap terarah"},
    {id:"2", nomor:"02", nama:"Thoughtful Partnership", desc:"Mendengar sebelum menyelesaikan"},
    {id:"3", nomor:"03", nama:"Reliable Craftsmanship", desc:"Dibangun dengan serius, dibuat untuk bertahan"},
]


export default function TentangKami (){
    return (
        <div className="bg-white">
            <div className={quesFont.className}>
                <div>
                    <NavigationBar solid />
                </div>

                {/* SECTION */}
                <div className="flex flex-col gap-y-10 px-5 pt-28 pb-12 sm:px-8 sm:pt-30 md:px-10 md:pt-32 lg:p-15 lg:pt-32">    
                    {/* Judul */}
                    <div className={poppins.className}>
                        <h1 className="text-4xl font-semibold leading-tight text-[#4B4B4B] sm:text-5xl lg:text-6xl">
                            Tentang Kamar320
                        </h1>
                    </div>
                    
                    {/* SECTION 1 - About us */}
                    <div>
                        {/* Penjelasan */}
                        <div>
                            <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                                <div className="lg:basis-5/10">
                                    <div className="flex flex-col justify-between gap-y-8 lg:h-150 lg:gap-y-0">
                                        <div className="text-base sm:text-lg">
                                            Lebih lanjut tentang kami
                                        </div>
                                        <div className="text-lg leading-relaxed text-[#4B4B4B] sm:text-xl">
                                            Kamar320 adalah usaha mandiri yang digerakkan oleh sekumpulan mahasiswa informatika dari Universitas Pelita Harapan. Kamar320 adalah software house yang bergerak dalam pengembangan solusi digital, mulai dari website, web application, sistem informasi, hingga berbagai produk digital yang disesuaikan dengan kebutuhan bisnis dan organisasi. Kami menggabungkan pengembangan teknologi, desain, dan pemahaman terhadap kebutuhan pengguna untuk menciptakan solusi yang tidak hanya berfungsi dengan baik, tetapi juga relevan dan mudah digunakan
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:basis-5/10">
                                    <img src="picture-optimal/320-1.webp" alt="" className="aspect-4/3 h-auto w-full object-cover sm:aspect-16/10 lg:aspect-auto lg:h-150 lg:w-200"/>
                                </div>
                            </div>
                        </div> 
                    </div>

                    {/* SECTION ... - */}
                    <div className="pt-12 sm:pt-18 lg:pt-30">
                        <div className="flex flex-col">
                            <div className={poppins.className}>
                                <h1 className="text-3xl font-semibold text-[#4B4B4B] sm:text-4xl">Nilai Kami</h1>
                            </div>
                            <div className="grid w-full grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-6 lg:pt-10">
                                {visi.map((x) => {
                                    return (
                                        <div key={x.id} className="group min-h-56 rounded-2xl border p-5 text-[#4B4B4B] duration-300 ease-in-out hover:bg-[#4B4B4B] hover:text-white sm:p-6 lg:h-70 lg:w-140 lg:p-7">
                                            <div className="flex h-full flex-col justify-between gap-y-10 lg:gap-y-0">
                                                <span className="text-2xl opacity-50 sm:text-3xl">{x.nomor}</span>
                                                <span className={poppins.className}>
                                                    <span className="flex items-end text-3xl leading-tight font-normal sm:text-4xl lg:text-5xl">{x.nama}</span>
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* SECTION ... - Location */}
                    <div className="flex flex-col gap-y-3 pt-12 pb-2 sm:pt-16 lg:pt-40 lg:pb-20">
                        <span className="text-lg text-[#4B4B4B] opacity-50 sm:text-2xl">lokasi kami</span>
                        <span className="text-3xl leading-tight text-[#4B4B4B] sm:text-4xl lg:text-5xl">MYC Dormitory, Kamar no 320 <br/> Jl. M.H. Thamrin Boulevard 1100, <br className="hidden lg:block"/> Lippo Village, Tangerang, Banten 15811</span>
                    </div>
                    
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
