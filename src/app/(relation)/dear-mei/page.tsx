"use client";

import { ChevronLeft, ChevronRight, Mailbox, X } from "lucide-react";
import { Questrial, Rajdhani } from "next/font/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});

const NAMA_PENERIMA = "ESTAFIN MEILA KRISTANTO DRAJAT";

const animation_monitor_1 = [
  "Aerocom untuk Mba Mei",
  "Selamat menjalani babak baru",
];

const scrambleChars = "@#$%";

const pesan = [
  {
    id: 1,
    dari: "Yoll",
    role: "Cibed",
    unit: "Cibed",
    avatar: "💗",
    isi: "Cuma mau bilang Thankyou udh berjuang sampe di titik ini. Thankyou udh menjadi cibed pertama aku di kamar 1705, walaupun cuman 1 tahun, mbak Mei mengajarkan aku banyak hal. Semangat profesinya ya cibedd, semoga di tempat mba Mei bertempur nanti dikelilingi orang2 yg baik, suport dan caring sama mba. Jangan lupa nanti ajak aku ya ke kost mbaa kalau liburr hehe🤣, traktir mie ayamm yg deket kost itu yak😋, Kalau butuh bantuan jangan ragu ya mba chat aku, love uu😘",
  },
  {
    id: 2,
    dari: "Olip",
    role: "Cibed",
    unit: "Cibed",
    avatar: "💗",
    isi: "Hallo mbak meya mwehehehe, sebenarnya nggak tau mau ngomong apa lagi dan bingung juga yah. Aku happy punya cibed dan dapat cibed kaya mbak meya, aku asalkan dengar cerita permasalahan mengenai cibed kawan aku dari luar, aku selalu berpikir bersyukur dapat mbak, walaupun kita sering berantem tapi mbak selalu baik (muah).  Aku bersyukur dapat mbak sebagai cibed karena mbak termasuk orang yang perhatian, peduli, mau ngajarin aku buat menjadi berani, masih mau ngajarin aku segala sesuatu yang bisa buat aku belajar lagi, bahkan aku masih ingat aku habis nangis karena homesick dan mbak meya kasih aku cokelat. Mbak juga orangnya bikin happy, makanya aku senang cerita ke mbak mei, mbak meya juga udah kaya kakak bagi aku :(. Mbak udah mau profesi ya? Sedih sebenarnya mbak udah mau ngekost, kita juga jadi jarang ketemu nanti nggak ada yang bisa ajarin aku lagi, nanti juga nggak ada yang bisa aku tanya tanya random lagi mbak :( walaupun mbak di rumah sakit sebelah tapi belom tentuh kita main bareng lagi  lagian kenapa mbak cepat banget piginya. Sekali lagi aku Cuma mau bilang makasih banyak udah jadi cibed aku dari awal sampe akhir, aku nggak bakal lupain mbak yang dari awal selalu nolong aku dalam kesusahan, mau cerita ke aku, mau menjadi pendengar aku, mau menerima keusilan aku, mau selalu ngajarin aku segala hal, Bahkan ngajarin aku untuk buat ngelakuin dengan berani dan jangan takut selagi kita benar. Makasih mbak baik baik disana bye bye :3 sayang mbak mei sebagai kakak dan cibed :D",
  },
  {
    id: 3,
    dari: "Meizy",
    role: "Taurus girl",
    unit: "Taurus girl",
    avatar: "♉️",
    isi: "Halo, Mbak Mei Jawa <3 Mbak Mei, semangat ya beberapa saat sebelum menuju profesi. Mbak Mei, keren banget udah lewatin hampir 3 tahun di FoN dan tahan banting sampai dihari ini. Dari awal kenal Mbak Mei, aku masih takut soalnya aku pikir, Mbak orangnya galak dan tegas :) Dan, ternyata Mbak Mei orangnya baik banget! <3 Aku bersyukur banget ketemu Mbak Mei, orang yang pemikiran dewasa, selalu mau di ajak curhat meskipun aku curcol gajelas. Mau jadi penengah buat semua orang padahal Mbak sendiri juga punya masalah :)) I don’t even know what to write anymore to describe how grateful I am to have met Mbak Mei. Sukses selalu Mbak Mei, dimanapun Mbak Mei ditempatkan nanti, Mbak selalu baik dan pasti akan ketemu orang baik! Maafkan adikmu ini yang masih suka ngeluh dan banyak gajelasnya, semoga Mbak Mei selalu di kelilingi hal-hal baik.",
  },
  {
    id: 4,
    dari: "Jenifer",
    role: "Cece",
    unit: "Cece",
    avatar: "🧑‍🧒",
    isi: "semangat menuju ners ya adek kecil💕",
  },
  {
    id: 5,
    dari: "Jepa",
    role: "Pacar Haikal",
    unit: "Pacar Haikal",
    avatar: "💕",
    isi: "Mbak Mei, senang banget bisa kenal dan sekamar sama Mbak. First impression aku dulu tuh Mbak orangnya kalem dan ramah banget. Eh, ternyata makin lama kenal, sisi tengil sama usilnya mulai kelihatan juga. 😂 Tapi justru itu yang bikin suasana kamar jadi seru dan nggak pernah sepi. Makasih ya, Mbak, udah sering ngobrol, bercanda, dan jadi kakak kamar yang baik. Sekarang Mbak mau mulai perjalanan baru di profesi. Semoga semuanya lancar, selalu sehat, dan dimudahkan di setiap prosesnya. Nanti kalau udah di kos jangan keseringan kangen sama asrama ya... apalagi kangen sama aku. 🤭 Semoga betah di tempat baru, tapi jangan lupa main atau mampir kalau sempat. Semangat terus ya, Mbak Mei!",
  },
  {
    id: 6,
    dari: "Dini",
    role: "Artis FIT",
    unit: "Artis Tiktok",
    avatar: "📱",
    isi: "Hai Mbak Mei👋 \n Ciee sekarang udh mau masuk ditahap baru dikehidupan Mbak, semangat buat profesi 1 tahunnya pastinya ada banyak tantangan,bornout, senang dan sedihnya tapi aku yakin Mbak bisa lewatin itu semua🥰. \n First impressions aku kira Mbak itu orang yang galak,tegas dan gabisa di ajak bercanda tapi ternyata setelah kenal Mbak orangnya plenger dan dewasa banget :) \n Aku bersyukur bisa kenal Mbak di kamar ini. Trimakasih sudah mau mendengar semua ceritaku yang banyak drama ini, makasih udh ngajarin aku dikamar, walau aku tau sendiri Mbak sesibuk itu tapi mau menyempatkan waktu buat mendengarkan cerita dan ngajarin aku ini, dari Mbak aku belajar banyak hal🫶🏻 \n Mbak mei jangan bosan cerita ke aku ya kalau butuh bantuan kabarin aja, jangan sedih² di kost nanti harus jadi cewek kuat tahan banting yaa Mbakk😌. Semoga dapat jodoh di profesi nanti yang sesuai dengan Mbak, jangan lupa cerita ke aku yaaaa :3 \n Ohiyaa info kost Mbak yaa, biar aku bisa kesana nanti xixixixixi, mau jadi penguasa kost Mbak mei, jangan lupa traktir anak kicik ini yaa kalau gajian hehehehehe😙 \n Good luck on your next adventure, Mbak Mei! I hope this new journey brings you lots of happiness, great experiences, and amazing people. Stay kind, stay humble, and keep being the wonderful person you are. I'll definitely miss having you around. 🤍",
  },
  {
    id: 7,
    dari: "Flora",
    role: "Nias",
    unit: "Nias",
    avatar: "💕",
    isi: "Aloo mbak mey,ciee yang udh mau masuk ke dunia orang dewasa wkwk.Sebelumnya terimakasih banyak buat waktu,kebaikan dan keceriaan mbak mey dalam satu tahun ini dikamar,terimakasih juga udah jadi sidebed dan kk kamar  yang sangat menginspirasi buat aku dalam setahun ini,hati hati yaa diluar sana aku yakin mbak mey bisa jaga diri dan bisa tuntasin professi ini dengan sangat baik,semoga bertemu dengan orang orang baik yang bisa bantu mbak untuk lewatin masa profesi dengan lancar.Urusan jodoh jangan terlalu dipusingin yakk tapi tetap berdoa semoga bertemu diwaktu yang tepat.Semangat buat hidup mandirinyaa!!",
  },
  {
    id: 8,
    dari: "Kenny",
    role: "China Mainland",
    unit: "Kamar320",
    avatar: "🚪",
    isi: "Selamat ya, Kak Mei, atas pencapaiannya dalam menjalani profesinya. Semoga ini menjadi awal yang indah untuk perjalanan karier Mbak, dan semoga Tuhan selalu menyertai setiap langkah, memberikan kesehatan, kekuatan, serta hikmat dalam menjalankan profesi yang mulia ini. Senang banget bisa kenal dan bertemu sama kak Mei. Karena kalau bukan karena kak Mei mungkin aku ga dapet second ignya seseorang xixixixixixi and walaupun nanti pasti bakal makin sibuk sama kerjaan, jangan lupa sesekali tetap join live-nya Ben ya, biar kita masih bisa cerita-cerita dan ketawa bareng lagi. Sekali lagi, selamat ya, kak Mei",
  },
  {
    id: 9,
    dari: "Ben",
    role: "CEO kamar320 wkwkw",
    unit: "Kamar320",
    avatar: "🚪",
    isi: "semangat kk mei dalam profesinya, semoga diberi kesabaran dan ketabahan serta hikmat dalam menjalani setiap pekerjaan yang dipercaya nantinya. tq kk mei yg udah jadi pndengar yg baik belakangan ini meskipun cuma sebentar doang tpi itu sngt berharga xixixix! tetap semangat dan mari mengurangi galau",
  },
  { 
    id: 10,
    dari: "Ivon",
    role: "Gadis Netral",
    unit: "Netral",
    avatar: "💅",
    isi: "Semangat untuk profesi partner dalam segala hal",
  },
  {
    id: 11,
    dari: "Nonci",
    role: "Akamsi Karawaci",
    unit: "Akamsi",
    avatar: "🏡",
    isi: "Hallo mbak meiiii, seneng deh kenal sama mba di kamar pertama ku iniii, bener bener bersyukur bangettt bisa ketemu mba mei, seneng dapat 1706. makasih yahh mbaa untuk setiap kebaikan mbak atas setiap dukungan dan motivasi mbak buat aku, itu berarti bangetttt tau. Semoga saat mba profesi nanti segala sesuatu nya dilancarkan yahh mba, jangan lupain aku yawww yg menggemaskan iniww, aku slalu berdoa yg terbaik untuk mbaaa. Lovvv u Mbakkkk💋🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍",
  {

];

type Pesan = (typeof pesan)[number];
type Direction = "next" | "prev";
type CapsulePhase = "idle" | "exit-right" | "exit-left" | "enter-left" | "enter-right" | "clunk";

export default function NewJourney() {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");
  const [capsulePhase, setCapsulePhase] = useState<CapsulePhase>("idle");
  const [monitorText, setMonitorText] = useState(animation_monitor_1[0]);
  const [isMonitorTextVisible, setIsMonitorTextVisible] = useState(true);
  const [openedMessage, setOpenedMessage] = useState<Pesan | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isNavigating = useRef(false);
  const monitorIndexRef = useRef(0);

  const activeMessage = pesan[activeIndex];

  const moveTo = useCallback((nextIndex: number, nextDirection: Direction) => {
    if (isNavigating.current || nextIndex === activeIndex) {
      return;
    }

    isNavigating.current = true;
    navTimers.current.forEach(clearTimeout);
    navTimers.current = [];

    const wrappedIndex = (nextIndex + pesan.length) % pesan.length;

    setDirection(nextDirection);
    setCapsulePhase(nextDirection === "next" ? "exit-right" : "exit-left");

    navTimers.current.push(
      setTimeout(() => {
        setActiveIndex(wrappedIndex);
        setCapsulePhase(nextDirection === "next" ? "enter-left" : "enter-right");
      }, 200),
    );

    navTimers.current.push(
      setTimeout(() => {
        setCapsulePhase("clunk");
      }, 680),
    );

    navTimers.current.push(
      setTimeout(() => {
        setCapsulePhase("idle");
        isNavigating.current = false;
      }, 860),
    );
  }, [activeIndex]);

  const goNext = useCallback(() => {
    moveTo(activeIndex + 1, "next");
  }, [activeIndex, moveTo]);

  const goPrev = useCallback(() => {
    moveTo(activeIndex - 1, "prev");
  }, [activeIndex, moveTo]);

  const capsuleKey = useMemo(
    () => `${activeMessage.id}-${direction}-${capsulePhase}`,
    [activeMessage.id, direction, capsulePhase],
  );

  const getCapsuleClass = () => {
    switch (capsulePhase) {
      case "exit-right":
        return "capsule-exit-right";
      case "exit-left":
        return "capsule-exit-left";
      case "enter-left":
        return "capsule-enter-from-left";
      case "enter-right":
        return "capsule-enter-from-right";
      case "clunk":
        return "capsule-clunk";
      default:
        return "";
    }
  };

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIsIntroVisible(false), 3000);
    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const timers: number[] = [];

    const interval = window.setInterval(() => {
      setIsMonitorTextVisible(false);

      timers.push(window.setTimeout(() => {
        const nextIndex = (monitorIndexRef.current + 1) % animation_monitor_1.length;
        monitorIndexRef.current = nextIndex;
        const nextText = animation_monitor_1[nextIndex];
        const scrambled = nextText
          .split("")
          .map((char, index) => {
            if (char === " " || index > 3) {
              return char;
            }

            return scrambleChars[index % scrambleChars.length];
          })
          .join("");

        setMonitorText(scrambled);

        timers.push(window.setTimeout(() => {
          setMonitorText(nextText);
          setIsMonitorTextVisible(true);
        }, 80));
      }, 300));
    }, 3000);

    return () => {
      window.clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (openedMessage) {
        if (event.key === "Escape") {
          startCloseMessage();
        }
        return;
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, openedMessage]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
      navTimers.current.forEach(clearTimeout);
      isNavigating.current = false;
    };
  }, []);

  const startOpenMessage = () => {
    if (isNavigating.current) {
      return;
    }

    setIsClosing(false);
    setOpenedMessage(activeMessage);
  };

  const startCloseMessage = () => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpenedMessage(null);
      setIsClosing(false);
    }, 480);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <main className={`${rajdhani.variable} ${questrial.variable} tube-page`}>
      {isIntroVisible && (
        <section className="intro-layer" aria-label="Intro pesan">
          <div className="intro-tube" />
          <div className="intro-capsule" />
          <div className="intro-copy">
            <h1>Ada pesan untukmu...</h1>
            <p>dari orang-orang yang menyayangimu 💙</p>
          </div>
        </section>
      )}

      <div className="tube-network" aria-hidden="true">
        <span className="moving-dot" />
      </div>

      <header className="top-bar">
        <div>
          <span className="hospital-mark">dari kamar320</span>
          <h1>aerocomei</h1>
        </div>
        <p>{NAMA_PENERIMA}</p>
      </header>

      <section className="message-stage" aria-label="Carousel pesan farewell">
        <div className="monitor-stack">
          <div className="main-monitor" aria-label="Monitor pesan utama">
            <div className="monitor-screen">
              <p className={isMonitorTextVisible ? "monitor-text visible" : "monitor-text"}>
                {monitorText}
              </p>
            </div>
            <div className="monitor-chin">
              <span className="power-led" />
            </div>
          </div>

          <div className="monitor-control-row">
            <div className="mini-monitor" aria-label="Monitor unit pengirim">
              <div className="mini-screen">
                <span className="mini-label">UNIT</span>
                <span key={activeMessage.id} className="mini-unit">
                  {activeMessage.unit}
                </span>
              </div>
              <div className="mini-chin">
                <span className="mini-led" />
              </div>
            </div>

            <button
              className="monitor-nav-button"
              type="button"
              onClick={() => goPrev()}
              aria-label="Pesan sebelumnya"
            >
              <ChevronLeft size={30} strokeWidth={2.2} />
            </button>

            <button
              className="monitor-nav-button"
              type="button"
              onClick={() => goNext()}
              aria-label="Pesan berikutnya"
            >
              <ChevronRight size={30} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          className="tube-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            key={capsuleKey}
            className={`capsule-shell capsule-phase-${capsulePhase}`}
            type="button"
            onClick={startOpenMessage}
            aria-label={`Buka pesan dari ${activeMessage.dari}`}
          >
            <span className="tube-rail" aria-hidden="true" />
            <span className="motion-trail" aria-hidden="true" />
            <span className="air-puffs" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={`capsule-3d ${getCapsuleClass()}`}>
              <span className="capsule-cap cap-left" aria-hidden="true" />
              <span className="capsule-ring ring-left" aria-hidden="true" />
              <span className="accent-ring accent-left" aria-hidden="true" />
              <span className="capsule-body" aria-hidden="true" />
              <span className="capsule-window">
                <span className="sender-label">dari:</span>
                <span className="sender-name">{activeMessage.dari}</span>
              </span>
              <span className="accent-ring accent-right" aria-hidden="true" />
              <span className="capsule-ring ring-right" aria-hidden="true" />
              <span className="capsule-cap cap-right" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className="dot-row" aria-label="Indikator pesan">
          {pesan.map((item, index) => (
            <button
              key={item.id}
              className={index === activeIndex ? "dot active" : "dot"}
              type="button"
              onClick={() => moveTo(index, index > activeIndex ? "next" : "prev")}
              aria-label={`Lihat pesan ${index + 1} dari ${item.dari}`}
            />
          ))}
        </div>
      </section>

      <footer className="footer-note">
        kamar320.com
      </footer>

      {openedMessage && (
        <div className={isClosing ? "message-overlay closing" : "message-overlay"}>
          <button
            className="overlay-backdrop"
            type="button"
            onClick={startCloseMessage}
            aria-label="Tutup pesan"
          />
          <article className="message-card" role="dialog" aria-modal="true">
            <button
              className="modal-x"
              type="button"
              onClick={startCloseMessage}
              aria-label="Tutup pesan"
            >
              <X size={20} />
            </button>

            <div className="chart-label">
              <span className="avatar">{openedMessage.avatar}</span>
              <div>
                <p>{openedMessage.dari}</p>
                <span>{openedMessage.role}</span>
              </div>
            </div>

            <div className="red-line" />

            <div className={`${questrial.className} message-body`}>
              {openedMessage.isi}
            </div>

            <button className="close-stamp" type="button" onClick={startCloseMessage}>
              <Mailbox size={18} />
              Tutup Pesan
            </button>
          </article>
        </div>
      )}

      <style jsx global>{`
        .tube-page {
          --night: #0a1628;
          --steel: #c0c8d4;
          --steel-light: #e8edf2;
          --steel-shadow: #6b7a8d;
          --paper: #f5f0e8;
          --red: #e63946;
          --glow: #4cc9f0;
          --text: #0a1628;
          --dark-text: #1a1a2e;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #ffffff;
          color: var(--text);
          font-family: var(--font-rajdhani), sans-serif;
          isolation: isolate;
        }

        .tube-network {
          display: none;
        }

        .moving-dot {
          position: absolute;
          top: calc(52% - 4px);
          left: 18%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--glow);
          box-shadow: 0 0 20px var(--glow);
          animation: route-dot 5.6s linear infinite;
        }

        .intro-layer {
          position: fixed;
          inset: 0;
          z-index: 20;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #ffffff;
          animation: intro-fade 3s ease forwards;
        }

        .intro-tube {
          position: absolute;
          left: 8%;
          right: 8%;
          top: calc(50% - 34px);
          height: 68px;
          border-radius: 999px;
          border: 1px solid rgba(232, 237, 242, 0.22);
          background: linear-gradient(180deg, rgba(232, 237, 242, 0.22), rgba(107, 122, 141, 0.08) 46%, rgba(232, 237, 242, 0.16));
          box-shadow: inset 0 18px 28px rgba(232, 237, 242, 0.1), inset 0 -20px 24px rgba(0, 0, 0, 0.22);
        }

        .intro-capsule {
          position: absolute;
          top: calc(50% - 42px);
          width: min(350px, 70vw);
          height: 84px;
          border-radius: 999px;
          background:
            linear-gradient(90deg, var(--steel-shadow), var(--steel-light) 14%, var(--paper) 23% 77%, var(--steel-light) 86%, var(--steel-shadow)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.5), transparent);
          box-shadow: 0 0 38px rgba(76, 201, 240, 0.44), inset 0 -16px 22px rgba(0, 0, 0, 0.16);
          animation: intro-capsule 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .intro-copy {
          position: relative;
          z-index: 2;
          margin-top: 190px;
          text-align: center;
          opacity: 0;
          animation: copy-fade 1s ease 1.35s forwards;
        }

        .intro-copy h1 {
          margin: 0;
          font-size: clamp(2.6rem, 10vw, 5.5rem);
          font-weight: 700;
          letter-spacing: 0;
        }

        .intro-copy p {
          margin: 0.2rem 0 0;
          color: #64748b;
          font-size: clamp(1.1rem, 4vw, 1.55rem);
          font-weight: 500;
        }

        .top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: clamp(1.25rem, 4vw, 2.5rem);
        }

        .hospital-mark {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #64748b;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .top-bar h1 {
          margin: 0.2rem 0 0;
          color: #0a1628;
          font-size: clamp(1.35rem, 4vw, 2.25rem);
          font-weight: 700;
          letter-spacing: 0;
        }

        .top-bar p {
          margin: 0;
          color: #64748b;
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          text-align: right;
        }

        .message-stage {
          display: grid;
          min-height: calc(100vh - 190px);
          place-items: center;
          overflow: hidden;
          padding: 1rem 0 5rem;
        }

        .monitor-stack {
          display: grid;
          box-sizing: border-box;
          width: 100%;
          max-width: 760px;
          justify-items: center;
          margin: 0 auto;
        }

        .main-monitor {
          box-sizing: border-box;
          width: 100%;
          border: 12px solid #d4cfc6;
          border-bottom: 0;
          border-radius: 10px 10px 10px 10px;
          background: #e8e4dc;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.06),
            0 10px 30px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          overflow: hidden;
        }

        .monitor-screen {
          position: relative;
          display: grid;
          height: 124px;
          place-items: center;
          overflow: hidden;
          border-radius: 6px;
          background:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.02) 2px,
              rgba(0, 0, 0, 0.02) 4px
            ),
            #f0ede6;
        }

        .monitor-screen::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.36), transparent 36%, rgba(26, 58, 92, 0.05));
          pointer-events: none;
        }

        .monitor-text {
          position: relative;
          z-index: 1;
          margin: 0;
          padding: 0 1rem;
          color: #1a3a5c;
          font-family: "Courier New", monospace;
          font-size: clamp(1rem, 4vw, 22px);
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
          text-shadow: none;
          opacity: 0;
          transition: opacity 300ms ease;
        }

        .monitor-text.visible {
          opacity: 1;
        }

        .monitor-chin {
          position: relative;
          height: 24px;
          border-radius: 0 0 10px 10px;
          background: #ddd8ce;
        }

        .power-led {
          position: absolute;
          top: 50%;
          right: 18px;
          width: 8px;
          height: 8px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.38);
          animation: led-pulse 2s ease-in-out infinite;
        }

        .monitor-control-row {
          display: flex;
          box-sizing: border-box;
          width: 100%;
          align-items: stretch;
          gap: 12px;
          margin-top: 12px;
        }

        .mini-monitor {
          box-sizing: border-box;
          flex: 1;
          min-width: 0;
          border: 6px solid #d4cfc6;
          border-bottom: 0;
          border-radius: 6px 6px 8px 8px;
          background: #e8e4dc;
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          overflow: hidden;
        }

        .mini-screen {
          display: grid;
          height: 54px;
          align-content: center;
          gap: 0.25rem;
          background: #f5f2ec;
          padding: 0.45rem 0.75rem;
        }

        .mini-label {
          color: #888480;
          font-family: "Courier New", monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1;
        }

        .mini-unit {
          color: #1a3a5c;
          font-family: "Courier New", monospace;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
          animation: mini-unit-fade 200ms ease both;
        }

        .mini-chin {
          position: relative;
          height: 12px;
          background: #ddd8ce;
        }

        .mini-led {
          position: absolute;
          top: 50%;
          right: 11px;
          width: 5px;
          height: 5px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: #f59e0b;
          box-shadow: 0 0 9px rgba(245, 158, 11, 0.48);
        }

        .monitor-nav-button {
          display: grid;
          box-sizing: border-box;
          width: 72px;
          height: 72px;
          flex-shrink: 0;
          place-items: center;
          border: 2px solid #d4cfc6;
          border-radius: 10px;
          background: #e8e4dc;
          color: #1a3a5c;
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          pointer-events: all;
          transition: background 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 80ms ease;
        }

        .monitor-nav-button:hover,
        .monitor-nav-button:focus-visible {
          border-color: #bbb6ae;
          background: #ddd8ce;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          outline: none;
        }

        .monitor-nav-button:active {
          transform: scale(0.95);
        }

        .tube-container {
          position: relative;
          display: grid;
          width: 100vw;
          min-height: clamp(176px, 30vw, 230px);
          place-items: center;
          margin: 32px auto 1.8rem;
          overflow: hidden;
          touch-action: pan-y;
        }

        .capsule-shell {
          position: relative;
          display: grid;
          width: 100vw;
          min-height: clamp(176px, 30vw, 230px);
          place-items: center;
          border: 0;
          background: transparent;
          cursor: pointer;
          perspective: 1100px;
          transform-style: preserve-3d;
        }

        .tube-rail {
          position: absolute;
          left: -2px;
          right: -2px;
          top: 50%;
          width: calc(100% + 4px);
          height: clamp(118px, 20vw, 150px);
          overflow: hidden;
          transform: translateY(-50%);
          border: 1px solid rgba(10, 22, 40, 0.12);
          border-radius: 0;
          background:
            linear-gradient(180deg, rgba(192, 200, 212, 0.34), rgba(76, 201, 240, 0.07) 42%, rgba(10, 22, 40, 0.2) 100%);
          box-shadow:
            inset 0 22px 30px rgba(232, 237, 242, 0.09),
            inset 0 -28px 32px rgba(10, 22, 40, 0.22),
            0 0 46px rgba(76, 201, 240, 0.15);
        }

        .tube-rail::after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -100%;
          width: 58%;
          content: "";
          background: linear-gradient(90deg, transparent, rgba(232, 237, 242, 0.3), transparent);
          opacity: 0.3;
          transform: skewX(-18deg);
          animation: tube-sheen 4s linear infinite;
        }

        .capsule-3d {
          position: relative;
          z-index: 2;
          display: block;
          width: min(100%, 620px);
          height: clamp(118px, 19vw, 148px);
          transform-style: preserve-3d;
          filter: drop-shadow(0 24px 32px rgba(0, 0, 0, 0.35));
          animation: capsule-idle-float 3s ease-in-out infinite;
          transition: filter 180ms ease, transform 180ms ease;
        }

        .capsule-shell:hover .capsule-3d,
        .capsule-shell:focus-visible .capsule-3d {
          filter: drop-shadow(0 0 30px rgba(240, 165, 0, 0.54)) drop-shadow(0 26px 34px rgba(0, 0, 0, 0.38));
          transform: scale(1.03);
        }

        .capsule-shell:active .capsule-3d {
          transform: scale(0.97);
        }

        .capsule-exit-right {
          animation: capsule-shoot-right 200ms cubic-bezier(0.55, 0, 1, 0.45) forwards;
          pointer-events: none;
        }

        .capsule-exit-left {
          animation: capsule-shoot-left 200ms cubic-bezier(0.55, 0, 1, 0.45) forwards;
          pointer-events: none;
        }

        .capsule-enter-from-left {
          animation: capsule-arrive-from-left 480ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .capsule-enter-from-right {
          animation: capsule-arrive-from-right 480ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .capsule-clunk {
          animation: capsule-clunk-stop 180ms ease-out forwards;
        }

        .capsule-body,
        .capsule-cap,
        .capsule-ring,
        .accent-ring,
        .capsule-window {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .capsule-body {
          left: 10.5%;
          right: 10.5%;
          height: 72%;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 27%, rgba(93, 58, 28, 0.22) 69%, rgba(0, 0, 0, 0.32) 100%),
            #d4b896;
          box-shadow:
            inset 0 -8px 20px rgba(0, 0, 0, 0.4),
            inset 0 8px 15px rgba(255, 255, 255, 0.15),
            inset 18px 0 26px rgba(255, 255, 255, 0.13),
            inset -18px 0 26px rgba(0, 0, 0, 0.2),
            0 0 38px rgba(76, 201, 240, 0.22);
        }

        .capsule-body::before {
          position: absolute;
          top: 13%;
          right: 7%;
          left: 7%;
          height: 18%;
          border-radius: 999px;
          content: "";
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
          opacity: 0.65;
        }

        .capsule-cap {
          z-index: 5;
          width: 18%;
          height: 84%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background:
            radial-gradient(ellipse at 50% 28%, rgba(255, 255, 255, 0.18), transparent 42%),
            linear-gradient(180deg, #525252, #2d2d2d 46%, #171717 100%);
          box-shadow:
            inset 0 14px 18px rgba(255, 255, 255, 0.12),
            inset 0 -16px 22px rgba(0, 0, 0, 0.58),
            0 12px 24px rgba(0, 0, 0, 0.26);
        }

        .cap-left {
          left: 0;
          border-radius: 999px 26px 26px 999px;
        }

        .cap-right {
          right: 0;
          border-radius: 26px 999px 999px 26px;
        }

        .capsule-ring {
          z-index: 4;
          width: 15%;
          height: 88%;
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.13), transparent 32%, rgba(0, 0, 0, 0.5)),
            #1a1a1a;
          box-shadow:
            inset 0 10px 14px rgba(255, 255, 255, 0.08),
            inset 0 -12px 18px rgba(0, 0, 0, 0.72);
        }

        .ring-left {
          left: 12%;
        }

        .ring-right {
          right: 12%;
        }

        .accent-ring {
          z-index: 6;
          width: 2.8%;
          height: 82%;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.45), rgba(240, 165, 0, 0.96) 42%, rgba(105, 57, 0, 0.9)),
            #f0a500;
          box-shadow: 0 0 18px rgba(240, 165, 0, 0.38), inset 0 -8px 12px rgba(0, 0, 0, 0.32);
        }

        .accent-left {
          left: 27%;
        }

        .accent-right {
          right: 27%;
        }

        .capsule-window {
          z-index: 7;
          display: grid;
          left: 31%;
          width: 38%;
          min-width: 210px;
          height: 60%;
          align-content: center;
          justify-items: center;
          gap: 0.2rem;
          padding: clamp(0.7rem, 2vw, 1rem);
          border: 1px solid rgba(232, 237, 242, 0.42);
          border-radius: 24px;
          background:
            linear-gradient(180deg, rgba(232, 237, 242, 0.2), rgba(232, 237, 242, 0.03) 32%),
            rgba(245, 240, 232, 0.95);
          color: var(--dark-text);
          box-shadow:
            0 0 36px rgba(76, 201, 240, 0.34),
            inset 0 0 16px rgba(255, 255, 255, 0.55),
            inset 0 -10px 18px rgba(26, 26, 46, 0.08);
          overflow: hidden;
          animation: capsule-glow 2.8s ease-in-out infinite;
        }

        .capsule-shell:hover .capsule-window,
        .capsule-shell:focus-visible .capsule-window {
          animation: capsule-glow 2.8s ease-in-out infinite, capsule-jiggle 520ms ease;
        }

        .capsule-shell:focus-visible {
          outline: 2px solid var(--glow);
          outline-offset: 10px;
          border-radius: 999px;
        }

        .motion-trail {
          position: absolute;
          top: 50%;
          z-index: 1;
          width: 200px;
          height: 80px;
          border-radius: 999px;
          opacity: 0;
          filter: blur(8px);
          pointer-events: none;
          transform: translateY(-50%);
        }

        .capsule-phase-exit-right .motion-trail {
          right: 52%;
          background: linear-gradient(to left, transparent, rgba(240, 165, 0, 0.22), transparent);
          animation: trail-flash 200ms ease both;
        }

        .capsule-phase-exit-left .motion-trail {
          left: 52%;
          background: linear-gradient(to right, transparent, rgba(240, 165, 0, 0.22), transparent);
          animation: trail-flash 200ms ease both;
        }

        .air-puffs {
          position: absolute;
          inset: 0;
          z-index: 8;
          pointer-events: none;
          opacity: 0;
        }

        .air-puffs span {
          position: absolute;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(232, 237, 242, 0.86);
          box-shadow: 0 0 10px rgba(76, 201, 240, 0.75);
        }

        .air-puffs span:nth-child(1) {
          left: 22%;
          transform: translateY(-22px);
        }

        .air-puffs span:nth-child(2) {
          left: 25%;
          transform: translateY(20px);
        }

        .air-puffs span:nth-child(3) {
          right: 22%;
          transform: translateY(-18px);
        }

        .air-puffs span:nth-child(4) {
          right: 25%;
          transform: translateY(24px);
        }

        .capsule-phase-enter-left .air-puffs,
        .capsule-phase-enter-right .air-puffs {
          animation: puff-burst 360ms ease-out both;
        }

        .sender-label {
          color: #888888;
          font-family: var(--font-rajdhani), sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          text-align: center;
          text-transform: uppercase;
        }

        .sender-name {
          max-width: 100%;
          color: #0a1628;
          font-family: var(--font-rajdhani), sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.05;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .dot-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border: 1px solid rgba(10, 22, 40, 0.28);
          border-radius: 999px;
          background: transparent;
          transition: width 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .dot.active {
          width: 28px;
          border-color: var(--red);
          background: var(--red);
          box-shadow: 0 0 18px rgba(230, 57, 70, 0.42);
        }

        .footer-note {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          left: 1rem;
          color: #64748b;
          text-align: center;
          font-size: 0.98rem;
        }

        .message-overlay {
          position: fixed;
          inset: 0;
          z-index: 15;
          display: grid;
          place-items: center;
          padding: 1rem;
        }

        .overlay-backdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: rgba(4, 10, 20, 0.72);
          backdrop-filter: blur(10px);
          animation: overlay-in 220ms ease both;
        }

        .message-card {
          position: relative;
          z-index: 1;
          display: flex;
          width: min(92vw, 620px);
          max-height: min(78vh, 680px);
          flex-direction: column;
          border: 1px solid rgba(26, 26, 46, 0.12);
          border-radius: 8px;
          background:
            linear-gradient(90deg, rgba(230, 57, 70, 0.08) 0 1px, transparent 1px 100%),
            var(--paper);
          background-size: 44px 100%, auto;
          color: var(--dark-text);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.38);
          padding: clamp(1.2rem, 4vw, 2rem);
          transform-origin: bottom center;
          animation: paper-open 480ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        .message-overlay.closing .overlay-backdrop {
          animation: overlay-out 460ms ease both;
        }

        .message-overlay.closing .message-card {
          animation: paper-close 460ms ease both;
        }

        .modal-x {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(26, 26, 46, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.36);
          color: var(--dark-text);
        }

        .chart-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-right: 2.9rem;
        }

        .avatar {
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border: 1px dashed rgba(26, 26, 46, 0.22);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.34);
          font-size: 2rem;
        }

        .chart-label p {
          margin: 0;
          color: var(--dark-text);
          font-size: clamp(1.35rem, 5vw, 1.9rem);
          font-weight: 700;
          line-height: 1.05;
        }

        .chart-label span:not(.avatar) {
          display: block;
          margin-top: 0.18rem;
          color: rgba(26, 26, 46, 0.62);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .red-line {
          height: 3px;
          margin: 1.25rem 0 1rem;
          background: var(--red);
        }

        .message-body {
          min-height: 180px;
          overflow: auto;
          color: #2c2c2c;
          font-family: var(--font-questrial), sans-serif;
          font-size: 16px;
          line-height: 1.75;
          padding-right: 0.3rem;
        }

        .close-stamp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          width: fit-content;
          margin: 1.5rem auto 0;
          border: 2px solid rgba(26, 26, 46, 0.1);
          border-radius: 8px;
          background: var(--red);
          color: white;
          padding: 0.78rem 1.25rem;
          font-family: var(--font-rajdhani), sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 8px 0 rgba(121, 23, 31, 0.55);
          transition: transform 160ms ease, box-shadow 160ms ease;
        }

        .close-stamp:hover,
        .close-stamp:focus-visible {
          transform: translateY(3px);
          box-shadow: 0 5px 0 rgba(121, 23, 31, 0.55);
          outline: none;
        }

        @keyframes route-dot {
          0% {
            transform: translateX(0);
          }
          55% {
            transform: translateX(56vw);
          }
          70% {
            transform: translate(56vw, 25vh);
          }
          100% {
            transform: translate(12vw, 25vh);
          }
        }

        @keyframes intro-capsule {
          0% {
            transform: translateX(-85vw);
          }
          72% {
            transform: translateX(22px);
          }
          84% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes copy-fade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes intro-fade {
          0%,
          82% {
            opacity: 1;
            pointer-events: auto;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes capsule-shoot-right {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          15% {
            transform: translateX(20px) scale(0.98);
          }
          100% {
            transform: translateX(120vw) scale(0.85);
            opacity: 0.3;
          }
        }

        @keyframes capsule-shoot-left {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          15% {
            transform: translateX(-20px) scale(0.98);
          }
          100% {
            transform: translateX(-120vw) scale(0.85);
            opacity: 0.3;
          }
        }

        @keyframes capsule-arrive-from-left {
          0% {
            transform: translateX(-120vw) scale(0.85);
            opacity: 0.3;
          }
          70% {
            transform: translateX(8px) scale(1.02);
            opacity: 1;
          }
          85% {
            transform: translateX(-3px) scale(0.99);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes capsule-arrive-from-right {
          0% {
            transform: translateX(120vw) scale(0.85);
            opacity: 0.3;
          }
          70% {
            transform: translateX(-8px) scale(1.02);
            opacity: 1;
          }
          85% {
            transform: translateX(3px) scale(0.99);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes capsule-idle-float {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(1px) translateY(-1px);
          }
          75% {
            transform: translateX(-1px) translateY(1px);
          }
        }

        @keyframes capsule-clunk-stop {
          0% {
            transform: translateX(0);
          }
          30% {
            transform: translateX(6px);
          }
          60% {
            transform: translateX(-2px);
          }
          80% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes capsule-glow {
          0%,
          100% {
            box-shadow: 0 0 28px rgba(76, 201, 240, 0.26), inset 0 0 24px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 48px rgba(76, 201, 240, 0.48), inset 0 0 24px rgba(255, 255, 255, 0.45);
          }
        }

        @keyframes capsule-jiggle {
          0%,
          100% {
            transform: rotate(0) scale(1);
          }
          24% {
            transform: rotate(-1.3deg) scale(1.02);
          }
          54% {
            transform: rotate(1.2deg) scale(1.02);
          }
          78% {
            transform: rotate(-0.5deg) scale(1.01);
          }
        }

        @keyframes tube-sheen {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        @keyframes trail-flash {
          0% {
            opacity: 0;
            transform: translateY(-50%) scaleX(0.5);
          }
          25% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-50%) scaleX(1.45);
          }
        }

        @keyframes puff-burst {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          18% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        @keyframes led-pulse {
          0%,
          100% {
            opacity: 0.5;
            box-shadow: 0 0 6px rgba(34, 197, 94, 0.28);
          }
          50% {
            opacity: 0.9;
            box-shadow: 0 0 12px rgba(34, 197, 94, 0.48);
          }
        }

        @keyframes mini-unit-fade {
          from {
            opacity: 0;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes overlay-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes overlay-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes paper-open {
          0% {
            opacity: 0;
            transform: translateY(34vh) scaleY(0.18) scaleX(0.76);
          }
          62% {
            opacity: 1;
            transform: translateY(-8px) scaleY(1.02) scaleX(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes paper-close {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(34vh) scaleY(0.18) scaleX(0.76);
          }
        }

        @media (max-width: 700px) {
          .top-bar {
            display: grid;
          }

          .top-bar p {
            text-align: left;
          }

          .message-stage {
            min-height: calc(100vh - 210px);
            padding-top: 0;
          }

          .monitor-stack {
            width: min(100% - 1.5rem, 680px);
          }

          .main-monitor {
            border-width: 10px;
            border-bottom: 0;
          }

          .monitor-screen {
            height: 116px;
          }

          .monitor-control-row {
            width: min(100% - 1.5rem, 680px);
          }

          .monitor-nav-button {
            width: 64px;
            height: 72px;
            flex-basis: 64px;
          }

          .capsule-shell {
            min-height: 176px;
          }

          .capsule-3d {
            width: min(100%, 520px);
            height: 126px;
          }

          .capsule-window {
            left: 28%;
            width: 44%;
            min-width: 190px;
            border-radius: 22px;
          }
        }

        @media (max-width: 430px) {
          .monitor-screen {
            height: 108px;
          }

          .monitor-text {
            font-size: 0.95rem;
          }

          .monitor-control-row {
            gap: 8px;
          }

          .mini-monitor {
            flex-basis: 0;
          }

          .mini-screen {
            padding-inline: 0.6rem;
          }

          .mini-unit {
            font-size: 13px;
          }

          .monitor-nav-button {
            width: 52px;
            height: 72px;
            flex-basis: 52px;
          }

          .capsule-window {
            left: 26%;
            width: 48%;
            min-width: 178px;
            padding: 0.72rem;
          }

          .sender-name {
            font-size: 14px;
          }

          .capsule-cap {
            width: 20%;
          }

          .capsule-ring {
            width: 16%;
          }

          .ring-left {
            left: 11%;
          }

          .ring-right {
            right: 11%;
          }

          .accent-left {
            left: 27%;
          }

          .accent-right {
            right: 27%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }

          .intro-layer {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
