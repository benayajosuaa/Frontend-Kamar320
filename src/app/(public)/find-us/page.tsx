"use client";

import { poppins } from "@/lib/font";
import NavigationBar from "@/components/navbar-baru";
import FooterBar from "@/components/footer-baru";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const tempatKami = [
  {
    id: "1",
    nama: "Upwork",
    penjelasan:
      "Temukan dan kerjakan proyek bersama kami melalui Upwork.",
    link: "https://www.upwork.com/freelancers/~01df8530f02c3e2b73?mp_source=share",
  },
  {
    id: "2",
    nama: "Fiverr",
    penjelasan:
      "Lihat layanan digital Kamar320 yang tersedia melalui Fiverr.",
    link: "https://www.fiverr.com/s/7jYYjkL",
  },
  {
    id: "3",
    nama: "Fastwork",
    penjelasan:
      "Pesan layanan Kamar320 dengan mudah melalui Fastwork Indonesia.",
    link: "https://fastwork.id/byob/XeaxfGnG0r?openExternalBrowser=1&source=byob",
  },
  {
    id: "4",
    nama: "Freelancer",
    penjelasan:
      "Temukan profil dan layanan freelance kami melalui Freelancer.",
    link: "https://www.freelancer.co.id/u/benayajosua?frm=benayajosua&sb=t",
  },
];

export default function FindUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed z-30 w-full">
        <NavigationBar solid />
      </div>

      <main className="px-6 md:px-10 lg:px-15">
        {/* Judul */}
        {/* <section className="pt-32">
          <div className={poppins.className}>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#4B4B4B]">
              Kami ada di sini juga
            </h1>
          </div>
        </section> */}

        {/* Section utama */}
        <section className="pt-30">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-10">
            {/* Penjelasan kiri */}
            <div className="lg:col-span-4 ">
              <div className="max-w-md">
    
                <div className={poppins.className}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-[#5F2E6D]">
                    Temukan Kamar320 di berbagai platform freelance.
                  </h2>
                </div>

                <p className="mt-6 text-base md:text-lg text-[#777777] leading-relaxed max-w-sm">
                  Pilih platform yang paling nyaman untuk melihat layanan,
                  berdiskusi, dan memulai proyek bersama kami.
                </p>
              </div>
            </div>

            {/* Cards kanan */}
            <div className="lg:col-span-6 lg:mt-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tempatKami.map((x) => (
                  <Link
                    key={x.id}
                    href={x.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      relative
                      min-h-70
                      overflow-hidden
                      rounded-3xl
                      border
                      border-[#E2E2E2]
                      bg-white
                      p-7
                      text-[#4B4B4B]

                      transition-all
                      duration-500
                      ease-out

                      hover:scale-[1.025]
                      hover:bg-[#5F2E6D]
                      hover:text-white
                      hover:shadow-xl
                      hover:z-10
                    "
                  >
                    

                 

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      {/* top content */}
                      <div>
                        {/* garis */}
                        <div
                          className="
                            mb-8
                            h-px
                            w-24
                            bg-[#5A5A5A]

                            transition-all
                            duration-500

                            group-hover:w-32
                            group-hover:bg-[#D1D1D1]
                          "
                        />

                        {/* title */}
                        <div className={poppins.className}>
                          <h3 className="text-2xl md:text-3xl font-medium">
                            {x.nama}
                          </h3>
                        </div>

                        {/* description */}
                        <p
                          className="
                            mt-5
                            max-w-[90%]
                            text-base
                            leading-relaxed
                            text-[#777777]

                            transition-colors
                            duration-500

                            group-hover:text-[#D0D0D0]
                          "
                        >
                          {x.penjelasan}
                        </p>
                      </div>

                      {/* arrow */}
                      <div className="flex justify-end pt-10">
                        <MdArrowOutward
                          className="
                            text-4xl

                            transition-all
                            duration-500
                            ease-out

                            group-hover:-rotate-45
                            group-hover:scale-110
                          "
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-60 pb-50 p-10">
          <div className="flex flex-col gap-y-6">
            <div className={poppins.className}>
              <h2 className="text-3xl md:text-4xl text-[#5F2E6D] font-medium">
                Butuh diskusi lebih privat?
              </h2>
            </div>

            <div>
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  bg-[#5F2E6D]
                  px-6
                  py-3
                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:bg-[#4E245A]
                "
              >
                Hubungi kami lebih lanjut
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterBar />
    </div>
  );
}