"use client";
import { Questrial } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const linkNav = [
    {
        index: "1",
        href: "/work",
        label: "Galeri",
        children: [
            {
                label: "Semua Karya",
                href: "/work",
                desc: "lihat seluruh project yang telah kami kerjakan",
            },
            {
                label: "Aktifitas Kami",
                href: "/activity",
                desc: "lihat seluruh aktifitas yang ada di dalam ataupun diluar kamar320",
            },
        ],
    },
    {
        index: "2",
        href: "/services",
        label: "Tentang Kami",
        children: [
            {
                label: "Pelayanan Kami",
                href: "/services",
                desc: "penawaran yang bisa kami berikan untuk kamu",
            },
            {
                label: "Benaya Joshua",
                href: "/benaya-joshua",
                desc: "lihat sekilas terkait orang pertama yang ada di balik kamar320",
            },
            {
                label: "Pernyataan Kami",
                href: "/under-development",
                desc: "ini pernyataan yang kami berikan untuk kamu agar kamu paham mengenai kami",
            },
            {
                label: "Design Kami",
                href: "/under-development",
                desc: "cerita-cerita yang ada dibalik design kami",
            },
        ],
    },
    {
        index: "3",
        href: "/contact",
        label: "Relasi Kamar",
        children: [
            {
                label: "Hubungi kami secara personal",
                href: "/contact",
                desc: "ceritakan kebutuhan digital bisnismu secara privat kepada kami dengan cepat",
            },
            {
                label: "Kami Ada di Tempat Lain",
                href: "/under-development",
                desc: "kamar320 juga berada di platfrom-platfrom lain",
            },
        ],
    },
];

type NavigationBarProps = {
    solid?: boolean;
};

export default function NavigationBar ({ solid = false }: NavigationBarProps){
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, []);

    const clearHoverTimer = () => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }
    };

    const openMenuWithDelay = (menuIndex: string) => {
        clearHoverTimer();
        hoverTimerRef.current = setTimeout(() => {
            setActiveMenu(menuIndex);
            hoverTimerRef.current = null;
        }, 800);
    };

    const closeMenu = () => {
        clearHoverTimer();
        setActiveMenu(null);
    };

    const isSolidNavbar = solid || isScrolled || isMenuOpen;

    const logoSrc = isSolidNavbar
        ? "/logo-optimal/kamar320.webp"
        : "/logo-optimal/kamar320-putih.webp";

    const navbarBackground = isSolidNavbar
        ? "bg-white shadow-sm shadow-black/5"
        : "bg-transparent";

    const textColor = isSolidNavbar ? "text-[#5F2E6D]" : "text-white";

    return (
        <header
            className={[
                quesFont.className,
                "fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-out",
                navbarBackground,
            ].join(" ")}
        >
            {/* Desktop */}
            <div className="hidden md:block" onMouseLeave={closeMenu}>
                <div>
                    <div className={`flex flex-row justify-between px-15 py-4 transition-colors duration-300 lg:px-15 items-center ${textColor}`}>
                        <div>
                            <Link href="/">
                                <img
                                    src={logoSrc}
                                    className="h-7 w-auto transition-all duration-300"
                                    alt="logo-kamar-320"
                                />
                            </Link>
                        </div>
                        <div>
                            <div className="flex flex-row gap-x-10 text-[19px]">
                                {
                                    linkNav.map((x) => {
                                        const isActive = activeMenu === x.index

                                        return (
                                            <button
                                                key={x.index}
                                                type="button"
                                                onMouseEnter={() => openMenuWithDelay(x.index)}
                                                onMouseLeave={clearHoverTimer}
                                                onFocus={() => setActiveMenu(x.index)}
                                                onDoubleClick={() => {
                                                    closeMenu();
                                                    router.push(x.href);
                                                }}
                                                className="relative transition-opacity duration-300 hover:opacity-70"
                                            >
                                                {x.label}

                                                <span
                                                    className={[
                                                        "absolute -bottom-4 left-0 h-0.5 bg-[#5F2E6D] transition-all duration-300",
                                                        isActive
                                                            ? "w-full"
                                                            : "w-0",
                                                    ].join(" ")}
                                                />
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* menu extend */}
                <div
                    className={[
                        "absolute left-0 top-full w-full overflow-hidden border-t bg-white text-[#252525] shadow-xl transition-all duration-300",
                        activeMenu
                            ? "visible max-h-125 opacity-100"
                            : "invisible max-h-0 opacity-0",
                    ].join(" ")}
                >
                    {
                        linkNav.map((x) => {
                            if (x.index !== activeMenu){
                                return null;
                            }
                            
                            return (
                                <div
                                    key={x.index}
                                    className="mx-auto gap-10 px-15 py-12"
                                >
                                    {/* extend menu */}
                                    <div className="grid grid-cols-3 gap-y-10 gap-x-10">
                                        {
                                            x.children?.map((child, childIndex) => {
                                                return (
                                                    <Link
                                                        key={`${x.index}-${child.label}-${childIndex}`}
                                                        href={child.href}
                                                        onClick={() =>
                                                            setActiveMenu(null)
                                                        }
                                                        className="group"

                                                    >
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h3 className={poppins.className}>
                                                                    <span className="text-xl text-[#4B4B4B] font-medium transition-colors group-hover:text-[#5F2E6D]">
                                                                        {child.label}
                                                                    </span>
                                                                </h3>

                                                                <p className="mt-2 max-w-md text-[15px] leading-6 text-[#262626]">
                                                                    {child.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {/* Mobile */}
            <div className="md:hidden">
                <div className={`flex items-center justify-between px-5 py-5 transition-all duration-300 ${textColor}`}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src={logoSrc}
                            className="h-7 w-auto transition-all duration-300"
                            alt="logo-kamar-320"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        className="flex h-10 w-10 items-center justify-center text-3xl"
                        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                    </button>
                </div>

                <div
                    className={[
                        "overflow-hidden transition-[max-height] duration-300 ease-out",
                        isMenuOpen ? "max-h-96" : "max-h-0",
                    ].join(" ")}
                >
                    <div className="flex flex-col gap-y-1 border-t border-[#5F2E6D]/15 bg-white px-5 py-5 text-[#5F2E6D]">
                        {
                            linkNav.map((x) => {
                                return (
                                    <Link
                                        key={x.index}
                                        href={x.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between py-4 text-2xl"
                                    >
                                        <span>{x.label}</span>
                                        <MdArrowOutward />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </header>
    )
}
