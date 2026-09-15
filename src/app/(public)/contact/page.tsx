"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Navbar from "../../../components/navbar-baru";
import Footer from "../../../components/footer-baru";
import { poppins, quesFont } from "@/lib/font";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

export default function HomePage() {
    const [nama, setNama] = useState("");
    const [bisnis, setBisnis] = useState("");
    const [keperluan, setKeperluan] = useState("");

    const handleKonsultasi = () => {
        // Validasi sederhana
        if (!nama.trim() || !bisnis.trim() || !keperluan.trim()) {
            alert("Mohon isi semua form terlebih dahulu.");
            return;
        }

        const nomorWhatsapp = "628970052654";

        const pesan = `Halo, saya ${nama} dan saya saat ini sedang menjalani ${bisnis}. Saat ini saya ingin berkonsultasi dengan Kamar320.

        Saat ini, ${keperluan}`;

        const encodedPesan = encodeURIComponent(pesan);

        const whatsappURL = `https://wa.me/${nomorWhatsapp}?text=${encodedPesan}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className={`${quesFont.className} bg-transparent`}>
            
            {/* Navbar */}
            <div className="fixed z-30 w-full bg-transparent">
                <Navbar solid />
            </div>

            {/* Section */}
            <div
                className="
                    pt-24 px-5 pb-12
                    sm:px-6 sm:pt-28 sm:pb-16
                    md:px-10
                    lg:pt-30 lg:p-15
                "
            >
                <div>
                    <div
                        className="
                            flex flex-col
                            lg:flex-row
                        "
                    >
                        {/* Title */}
                        <div
                            className="
                                w-full
                                lg:basis-4/10
                            "
                        >
                            <div
                                className="
                                    flex flex-col
                                    gap-y-5
                                    lg:gap-y-10
                                "
                            >
                                <div className={poppins.className}>
                                    <h1
                                        className="text-3xl min-[380px]:text-4xl sm:text-5xl font-semibold text-[#4B4B4B] leading-tight"
                                    >
                                        Konsultasikan
                                        <br />
                                        Keperluanmu!
                                    </h1>
                                </div>

                                <div>
                                    Konsultasi Gratis!
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div
                            className="
                                w-full
                                mt-12
                                sm:mt-16
                                lg:basis-6/10
                                lg:mt-30
                            "
                        >
                            <div
                                className="
                                    flex flex-col
                                    w-full
                                    gap-y-8
                                    sm:gap-y-10
                                    lg:gap-y-15
                                "
                            >
                                {/* Nama & Bisnis */}
                                <div
                                    className="
                                        flex flex-col
                                        gap-y-8
                                        sm:gap-y-10
                                        md:flex-row
                                        md:gap-x-10
                                        md:gap-y-0
                                    "
                                >
                                    {/* Nama */}
                                    <div
                                        className="
                                            w-full
                                            md:basis-1/2
                                            flex flex-col
                                        "
                                    >
                                        <span className={poppins.className}>
                                            <h1 className="font-semibold opacity-80 text-[#4B4B4B]">
                                                Nama
                                            </h1>
                                        </span>

                                        <span>
                                            <input
                                                type="text"
                                                name="nama"
                                                value={nama}
                                                onChange={(e) =>
                                                    setNama(e.target.value)
                                                }
                                                placeholder="cth. Benaya Joshua"
                                                className="
                                                    border-b
                                                    border-gray-300
                                                    w-full
                                                    pb-2
                                                    pr-2
                                                    pt-2
                                                    bg-transparent
                                                    outline-none
                                                    transition-colors
                                                    duration-300
                                                    focus:border-[#5F2E6D]
                                                "
                                            />
                                        </span>
                                    </div>

                                    {/* Sektor Bisnis */}
                                    <div
                                        className="
                                            w-full
                                            md:basis-1/2
                                            flex flex-col
                                        "
                                    >
                                        <span className={poppins.className}>
                                            <h1 className="font-semibold opacity-80 text-[#4B4B4B]">
                                                Jenis Bisnis / Usaha
                                            </h1>
                                        </span>

                                        <span>
                                            <input
                                                type="text"
                                                name="bisnis"
                                                value={bisnis}
                                                onChange={(e) =>
                                                    setBisnis(e.target.value)
                                                }
                                                placeholder="cth. Developer Perumahan"
                                                className="
                                                    border-b
                                                    border-gray-300
                                                    w-full
                                                    pb-2
                                                    pr-2
                                                    pt-2
                                                    bg-transparent
                                                    outline-none
                                                    transition-colors
                                                    duration-300
                                                    focus:border-[#5F2E6D]
                                                "
                                            />
                                        </span>
                                    </div>
                                </div>

                                {/* Form Masalah */}
                                <div>
                                    <span className={poppins.className}>
                                        <h1 className="font-semibold opacity-80 text-[#4B4B4B]">
                                            Saya ingin
                                        </h1>
                                    </span>

                                    <span>
                                        <textarea
                                            name="keperluan"
                                            value={keperluan}
                                            onChange={(e) =>
                                                setKeperluan(e.target.value)
                                            }
                                            className="
                                                border-b
                                                border-gray-300
                                                w-full
                                                h-44
                                                md:h-52
                                                lg:h-60
                                                pt-2
                                                pr-2
                                                resize-none
                                                bg-transparent
                                                outline-none
                                                transition-colors
                                                duration-300
                                                focus:border-[#5F2E6D]
                                            "
                                            placeholder="Saya ingin dibuatin website company profile dengan ...."
                                        />
                                    </span>
                                </div>

                                {/* Button */}
                                <div className="pt-5 lg:pt-14 lg:pb-30 flex flex-col items-stretch sm:items-end sm:pr-0 lg:pr-20 w-full">
                                    <button
                                        type="button"
                                        onClick={handleKonsultasi}
                                        className="
                                            border
                                            border-[#4E245A]
                                            rounded-xl
                                            inline-flex
                                            items-center
                                            justify-center
                                            px-6
                                            py-3
                                            text-white
                                            bg-[#4E245A]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:shadow-lg
                                            hover:bg-[#5F2E6D]
                                            active:translate-y-0
                                            
                                            w-full
                                            sm:w-auto
                                        "
                                    >
                                        <span className="flex flex-row items-center gap-x-2 text-sm">
                                            <span>
                                                Konsultasi Sekarang
                                            </span>

                                            <span>
                                                <GoArrowRight />
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Link Ke Find Us */}
            <div>
                <div className="px-5 py-12 sm:p-10 md:p-14 lg:p-20 lg:pt-10 lg:pb-30">
                    <Link href="/find-us" className="flex flex-row items-start gap-x-2 text-lg sm:text-xl md:text-2xl text-[#4B4B4B] opacity-50 hover:opacity-80">
                        <span className="font-sembibold shrink-0 pt-1">
                            <GoArrowLeft />
                        </span>
                        <span className={`${poppins.className} leading-snug`}>
                            Lihat Kami Ada Dimana Saja
                        </span>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-20">
                <Footer />
            </div>
        </div>
    );
}
