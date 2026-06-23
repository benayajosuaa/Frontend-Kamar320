Build a React single-page application (no router needed) for a farewell website dedicated to someone beginning their nursing career at Siloam Hospital. The entire visual theme is a **Pneumatic Tube System** — the message delivery network used in hospitals.

---

## DATA

```jsx
const pesan = [
  {
    id: 1,
    dari: "Rina Kusuma",
    isi: "Selamat menempuh perjalanan baru...."
  },
  {
    id: 2,
    dari: "Budi Santoso",
    isi: "Dari semua orang di angkatan...."
  },
  {
    id: 3,
    dari: "Mama & Papa",
    isi: "Nak, melihatmu mengenakan seragam...."
  },
  {
    id: 4,
    dari: "Sari Dewi",
    isi: "Kita udah ngelewatin..."
  },
  {
    id: 5,
    dari: "Dosen Pembimbing",
    isi: "Selama bimbingan, saya..."
  }
];
```

---

## VISUAL DESIGN

**Color palette:**
- Background: `#0a1628` (deep hospital night blue)
- Tube metal: `#c0c8d4` (brushed steel)
- Tube highlight: `#e8edf2`
- Tube shadow: `#6b7a8d`
- Capsule body: `#f5f0e8` (aged cream / medical paper)
- Capsule accent: `#e63946` (Siloam red)
- Glow: `#4cc9f0` (pneumatic blue glow)
- Text primary: `#f0f4f8`
- Text dark: `#1a1a2e`

**Typography:** Use Google Fonts — `Rajdhani` for UI labels/headers (futuristic medical), `Lora` for message body text (warm, personal).

---

## SCREEN STRUCTURE

### 1. INTRO ANIMATION (plays on first load, ~3 seconds)
- Dark background with faint grid lines (like hospital blueprint)
- A pneumatic tube shoots a capsule from off-screen left → slides to center → stops with a satisfying **clunk** micro-animation (slight overshoot + bounce back)
- Text fades in: **"Ada pesan untukmu..."** in Rajdhani, white, large
- Then a subtext: **"dari orang-orang yang menyayangimu 💙"**
- After 3s, transition smoothly into the main view

---

### 2. MAIN VIEW — TUBE CAROUSEL

**Layout concept:**

┌─────────────────────────────────────────────┐

│          ✦ PESAN UNTUKMU ✦                 │

│     Geser untuk melihat pesan berikutnya    │

│                                             │

│  ←  [TUBE CAPSULE — centered, large]  →    │

│                                             │

│     ● ○ ○ ○ ○   (dot indicators)           │

└─────────────────────────────────────────────┘

## CAPSULE DESIGN 

Render capsule sebagai silinder 3D menggunakan pure CSS perspective/transform:
- Body capsule: silinder memanjang horizontal, warna cream/beige (#d4b896)
- Dua ring di sisi kiri dan kanan body: warna hitam pekat (#1a1a1a), 
  tebal ~15% dari panjang capsule, sedikit lebih lebar dari body (seperti seal/gasket)
- Di antara ring ada accent ring tipis warna kuning/amber (#f0a500)
- Ujung kiri & kanan capsule: rounded metallic cap, warna dark charcoal (#2d2d2d)
- Seluruh capsule punya CSS box-shadow layered untuk efek 3D silinder:
  box-shadow: inset 0 -8px 20px rgba(0,0,0,0.4), inset 0 8px 15px rgba(255,255,255,0.15)
- Tube background (tempat capsule meluncur): silinder gelap transparan dengan 
  rim metalik di kiri-kanan layar, seperti potongan penampang pipa

## SWIPE / NAVIGATION ANIMATION — "MELESAT"

Ini bagian paling penting. Setiap ganti pesan harus terasa seperti capsule 
ditembakkan dengan tekanan udara, bukan sekadar slide biasa.

Implementasikan dengan CSS keyframes berikut:

Saat swipe KIRI (next message):
1. Capsule aktif: acceleration burst ke kanan — mulai lambat 10ms pertama, 
   lalu MELESAT keluar dalam 150ms (ease-in yang agresif), 
   sambil sedikit mengecil scale(0.85) seperti efek kedalaman pipa
2. Gap kosong ~50ms (tube kosong sebentar — ini penting untuk feel pneumatic!)
3. Capsule baru: masuk dari kiri dengan kecepatan tinggi, 
   lalu deselerasi mendadak di tengah (overshoot 8px ke kanan, 
   bounce balik ke center) dalam 250ms
4. Saat berhenti: micro-vibration (translateX -2px, 2px, -1px, 0) 50ms

Saat swipe KANAN (prev message): mirror dari atas.

CSS keyframes yang harus dibuat:
@keyframes capsule-shoot-right {
  0%   { transform: translateX(0) scale(1); opacity: 1; }
  15%  { transform: translateX(20px) scale(0.98); }
  100% { transform: translateX(120vw) scale(0.85); opacity: 0.3; }
  /* duration: 180ms, easing: cubic-bezier(0.55, 0, 1, 0.45) */
}

@keyframes capsule-shoot-left {
  0%   { transform: translateX(0) scale(1); opacity: 1; }
  15%  { transform: translateX(-20px) scale(0.98); }
  100% { transform: translateX(-120vw) scale(0.85); opacity: 0.3; }
}

@keyframes capsule-arrive-from-left {
  0%   { transform: translateX(-120vw) scale(0.85); opacity: 0.3; }
  70%  { transform: translateX(8px) scale(1.02); opacity: 1; }
  85%  { transform: translateX(-3px) scale(0.99); }
  100% { transform: translateX(0) scale(1); opacity: 1; }
  /* duration: 320ms, easing: cubic-bezier(0.16, 1, 0.3, 1) */
}

@keyframes capsule-arrive-from-right {
  0%   { transform: translateX(120vw) scale(0.85); opacity: 0.3; }
  70%  { transform: translateX(-8px) scale(1.02); opacity: 1; }
  85%  { transform: translateX(3px) scale(0.99); }
  100% { transform: translateX(0) scale(1); opacity: 1; }
}

@keyframes capsule-idle-float {
  /* Saat capsule diam, dia gently "bergetar" kecil seperti ada tekanan udara */
  0%, 100% { transform: translateX(0) translateY(0); }
  25%       { transform: translateX(1px) translateY(-1px); }
  75%       { transform: translateX(-1px) translateY(1px); }
  /* duration: 3s infinite, easing: ease-in-out */
}

@keyframes capsule-clunk-stop {
  /* Sound-feel saat capsule berhenti */
  0%   { transform: translateX(0); }
  30%  { transform: translateX(6px); }
  60%  { transform: translateX(-2px); }
  80%  { transform: translateX(1px); }
  100% { transform: translateX(0); }
  /* duration: 200ms, play AFTER arrive animation */
}

## TAMBAHAN EFEK VISUAL

- Saat capsule melesat: tambahkan "motion trail" — pseudo-element ::after 
  dengan gradient horizontal yang muncul hanya saat animasi shoot berlangsung:
  background: linear-gradient(to left, transparent, rgba(240,165,0,0.15), transparent)
  width: 200px, blur effect

- Tube di background: tambahkan subtle scanline/sheen animation yang bergerak 
  dari kiri ke kanan secara loop, seperti refleksi cahaya di pipa metal:
  @keyframes tube-sheen { 0% {left: -100%} 100% {left: 200%} }
  opacity: 0.3, duration: 4s infinite

- Particle effect ringan saat capsule arrive: 3-4 tiny dots (2px) muncul 
  dari sisi kiri/kanan capsule lalu fade out — simulasi "puff of air"

## INTERACTION FEEL

- Hover pada capsule: scale(1.03) + glow kuning amber melebar, cursor: pointer
- Click/tap capsule: scale(0.97) instant lalu kembali (tactile press feel) 
  sebelum trigger open animation
- Swipe threshold: 40px (lebih sensitif dari sebelumnya)
- Tambahkan swipe velocity detection — semakin cepat swipe, 
  semakin cepat shoot animation (clamp antara 150ms - 300ms)

**Swipe/Navigation:**
- On **mobile**: touch swipe left/right to navigate between messages
- On **desktop**: click left `←` / right `→` arrow buttons OR keyboard arrow keys
- Use `framer-motion` or pure CSS transitions:
  - Swiping left: current capsule shoots out right, new one enters from left (pneumatic feel — fast exit, slight deceleration on entry)
  - Swiping right: opposite direction
  - Transition duration: ~400ms, easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Show dot indicators below the tube (one per message, active dot highlighted in Siloam red)

---

### 3. OPENING A MESSAGE

When user **clicks/taps the capsule**:

**Animation sequence:**
1. Capsule jiggles (scale pulse) indicating it's clickable (hover state)
2. On click: capsule lid pops open with a satisfying animation — the end caps separate, and a paper/card **slides up** out of the capsule
3. The card expands into a **full message modal/overlay**

**Message Card:**
- Background: `#f5f0e8` (cream paper) with very subtle lined-paper texture (CSS repeating-linear-gradient)
- Top section: sender's avatar emoji (large, ~48px), bold name, role in smaller text — styled like a hospital patient wristband or chart label
- A thin red Siloam-red line separator
- Message body: full text, scrollable if needed, in `Lora` font, dark text, comfortable line-height
- At the bottom: a **"Tutup Pesan"** button — styled like a hospital stamp/button, Siloam red, with icon 📮

**Closing animation:**
1. On "Tutup Pesan" click: the card text fades/collapses back down
2. Paper slides back into the capsule
3. Capsule lids close shut with a satisfying click animation
4. Returns to the main carousel view, ready to swipe

---

### 4. BACKGROUND AMBIANCE
- Faint animated tube network in the background (thin CSS lines/SVG paths suggesting a hospital tube system spreading across the walls)
- Very subtle: opacity ~10-15%, don't distract from the main content
- Optional: a slow animated `@keyframes` that moves a tiny dot along one of these background tubes every few seconds

---

### 5. HEADER / FOOTER
**Header (minimal):**
- Small Siloam Hospital logo text or `🏥 SILOAM HOSPITAL` in top-left
- Title: **"Pneumatic Message System"** — Rajdhani font, monospace feel
- Tagline: *"Khusus untuk: [Nama Penerima]"* — editable constant at top of file: `const NAMA_PENERIMA = "Nama Kamu"`

**Footer:**
- Small text: *"Dengan cinta, dari semua yang mendoakanmu 💙"*
- Faint, bottom-centered

---

## IMPLEMENTATION NOTES

- **React** functional components with hooks (`useState`, `useEffect`, `useRef`)
- All animations: pure CSS `@keyframes` + `transition` OR `framer-motion` (prefer CSS if possible for simplicity)
- Touch events: use `onTouchStart` / `onTouchEnd` to calculate swipe direction (threshold: 50px)
- The `pesan` array is defined at the top of the file — easy to edit
- `NAMA_PENERIMA` constant at top of file
- Mobile-first responsive design — the tube capsule should work great on phone screens
- No backend, no database — pure frontend static app
- Add a `prefers-reduced-motion` media query that simplifies animations for accessibility

---

## DELIVERABLE

One single `App.jsx` file (with all CSS either in a `<style>` tag or inline/CSS-in-JS) that can run with `npx create-react-app` or Vite. Include sample data from the `pesan` array above. The result should feel like a beautifully crafted, emotional farewell gift — premium, not generic.





---

## PERBAIKAN YANG HARUS DIFIX

### 1. TUBE FULL WIDTH
- Tube (pipa) harus memanjang 100vw — dari ujung kiri layar sampai ujung kanan layar
- Tidak boleh ada batas/clip di area button < >
- Button navigasi < > posisinya OVERLAY di atas tube, 
  bukan membatasi lebar tube
- CSS: tube container width: 100vw, overflow: hidden pada parent, 
  tapi tube sendiri width: 100%

### 2. FIX BUTTON < > TIDAK BISA DIKLIK
- Pastikan button prev/next tidak tertutup element lain (z-index issue)
- Button harus z-index: 50, position: absolute, 
  left: 20px dan right: 20px, vertically centered pada tube
- Tambahkan pointer-events: all pada button
- Pastikan tidak ada overlay/wrapper yang intercept click event
- Test: onClick handler harus trigger state change index pesan

### 3. SWIPE MOBILE
- Implementasikan touch handler langsung di tube container element:
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
  }
- Pasang onTouchStart dan onTouchEnd pada div tube container
- Tambahkan touch-action: pan-y pada tube CSS agar tidak konflik scroll
- Pastikan passive: false tidak dipakai (biarkan default)

### 4. BACKGROUND PUTIH BERSIH — HAPUS GRID
- Background seluruh halaman: #ffffff (putih murni)
- HAPUS semua CSS grid/blueprint background pattern
- HAPUS background-image yang menggunakan repeating-linear-gradient 
  atau SVG grid apapun
- Semua warna text yang sebelumnya putih (#f0f4f8) 
  ganti ke dark navy (#0a1628) agar kontras di background putih
- Header title "Pneumatic Message System" → warna #0a1628
- Subtext "Geser untuk melihat..." → warna #64748b
- Judul "PESAN UNTUKMU" → warna #0a1628 atau navy gradient

### 5. PREVIEW CAPSULE — HANYA NAMA PENGIRIM
- Di dalam jendela transparan capsule, tampilkan HANYA:
  - Label kecil "dari:" dalam font Rajdhani, ukuran 11px, warna #888
  - Nama pengirim dalam font Rajdhani bold, ukuran 16px, warna #0a1628
  - HAPUS avatar/emoji sama sekali
  - HAPUS preview teks pesan
- Contoh tampilan di capsule window:
    dari:
    Rina Kusuma
- Buat nama center-aligned di dalam window capsule
- Window capsule background: rgba(245, 240, 232, 0.95)



## REVISI DESIGN — MONITOR DISPLAY SYSTEM

### UPDATE DATA STRUCTURE
Tambahkan field "unit" pada setiap object di array pesan:

const pesan = [
  {
    id: 1,
    dari: "Rina Kusuma",
    role: "Sahabat SMA",
    unit: "Keluarga & Sahabat",
    avatar: "🩺",
    isi: "Selamat menempuh perjalanan baru sebagai perawat!..."
  },
  {
    id: 2,
    dari: "Budi Santoso",
    role: "Teman Kuliah",
    unit: "Teman Kuliah",
    avatar: "💉",
    isi: "Dari semua orang di angkatan kita..."
  },
  {
    id: 3,
    dari: "Mama & Papa",
    role: "Keluarga",
    unit: "Keluarga",
    avatar: "❤️",
    isi: "Nak, melihatmu mengenakan seragam perawat..."
  },
  {
    id: 4,
    dari: "Sari Dewi",
    role: "Partner Cerita",
    unit: "Teman Praktik",
    avatar: "✨",
    isi: "Kita udah ngelewatin banyak banget fase..."
  },
  {
    id: 5,
    dari: "Dosen Pembimbing",
    role: "Bu Hartini, S.Kep., Ns.",
    unit: "Civitas Akademik",
    avatar: "📋",
    isi: "Selama bimbingan, saya melihat dedikasi..."
  }
];

---

### MONITOR UTAMA — GANTI "PESAN UNTUKMU" HEADER

HAPUS tulisan "✦ PESAN UNTUKMU ✦" yang sekarang.
GANTI dengan komponen <MainMonitor /> yang merupakan 
layar monitor CRT/LCD hospital display.

Desain monitor:
- Bentuk: rectangle dengan border-radius 8px, 
  background #0a0a0a (hitam layar mati)
- Bezel/frame monitor: warna #2a2a2a, border 10-14px solid,
  box-shadow: 0 0 0 3px #444, 0 20px 60px rgba(0,0,0,0.3)
- Sudut bezel sedikit lebih rounded dari layar dalam: border-radius 14px
- Di bawah bezel ada "chin" monitor: strip #1a1a1a, height 28px, 
  border-radius 0 0 10px 10px, dengan satu titik power LED 
  hijau (#00ff88) berkedip pelan (CSS animation pulse 2s infinite)
- Layar punya subtle scanline effect:
  background: repeating-linear-gradient(
    0deg, transparent, transparent 2px, 
    rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
  )
- Ukuran monitor: max-width 680px, height ~160px, centered

Konten dalam layar monitor (animasi teks):
Buat const animation_monitor_1 = [
  "Pesan untuk kamu...",
  "dari orang-orang yang menyayangimu 💙",
  "Selamat menjalani babak baru",
  "Semoga setiap harimu penuh makna",
  "You are not alone ✦"
]

Animasi teks monitor:
- Gunakan useEffect + setInterval, ganti teks setiap 3000ms
- Setiap ganti teks: teks lama fade out (opacity 0, 300ms),
  teks baru fade in (opacity 1, 300ms) — seperti display 
  yang refresh
- Font: 'Courier New' atau monospace, warna #00e5ff 
  (cyan hospital monitor color), font-size 22px
- Tambahkan efek "typing cursor" — karakter "|" yang 
  blink setelah teks: animation blink 1s step-end infinite
- Sebelum teks muncul, ada efek "text scramble" ringan:
  3-4 karakter random (@#$%) muncul 80ms lalu resolve 
  ke teks asli (opsional tapi sangat direkomendasikan)

---

### MINI MONITOR — DISPLAY UNIT

Tepat di bawah monitor utama, jarak 12px, buat komponen <MiniMonitor />

Desain mini monitor:
- Ukuran: max-width 280px, height 52px, centered
- Bezel: #2a2a2a, border 6px solid, border-radius 6px
- Layar: background #0a0a0a
- "Chin" kecil di bawah: height 12px, ada LED orange 
  kecil (#ff8800) — berbeda warna dari monitor utama

Konten mini monitor:
- Label kiri atas (dalam layar): teks "UNIT" ukuran 9px, 
  warna #ff8800, letter-spacing 2px — seperti label kategori
- Di bawah label: tampilkan nilai pesan[currentIndex].unit
  Font: monospace, warna #ff8800, font-size 15px, bold
- Animasi: setiap ganti capsule (swipe), teks unit 
  juga fade out → fade in 200ms sync dengan pergantian capsule

Layout akhir dari atas ke bawah:
┌─────────────────────────────┐
│  [MAIN MONITOR — 680px]     │  ← animasi teks berganti
│  "Pesan untuk kamu..."      │
│  [LED hijau berkedip]       │
└─────────────────────────────┘
         12px gap
┌──────────────────┐
│ UNIT             │  ← mini monitor
│ Teman Kuliah     │
│ [LED orange]     │
└──────────────────┘
         32px gap
[====== TUBE FULL WIDTH ======]  ← capsule dengan nama pengirim
         dot indicators



## REVISI DESIGN — MONITOR & LAYOUT

### 1. REDESIGN MONITOR FRAME — WARNA PUTIH/LIGHT

HAPUS background hitam (#0a0a0a) dari monitor.
Ganti dengan tema terang yang bersih:

Monitor utama frame/bezel:
- Bezel warna: #e8e4dc (warm off-white, seperti plastik perangkat medis lama)
- Layar dalam: #f0ede6 (cream sangat terang, bukan hitam)
- Border bezel: 12px solid #d4cfc6, border-radius 10px luar / 6px dalam
- Box-shadow monitor: 
  0 4px 6px rgba(0,0,0,0.06),
  0 10px 30px rgba(0,0,0,0.1),
  inset 0 1px 0 rgba(255,255,255,0.8)
- "Chin" bawah monitor: #ddd8ce, height 24px
- Power LED: tetap ada tapi warna #22c55e (hijau natural), lebih subtle

Warna teks di dalam layar monitor:
- HAPUS warna cyan (#00e5ff) dan kuning
- Ganti dengan warna Aerocom realistis — 
  teks warna #1a3a5c (navy biru tua) atau #2d5a27 (hijau tua medical)
  PILIH: #1a3a5c navy — clean, professional, seperti display rumah sakit modern
- Scanline effect tetap ada tapi sangat subtle: opacity 0.02

Mini monitor:
- Bezel: #e8e4dc sama dengan monitor utama (satu keluarga desain)
- Layar: #f5f2ec
- Teks UNIT label: #888480 (abu warm)
- Teks unit value: #1a3a5c (sama dengan monitor utama, konsisten)
- LED: #f59e0b (amber) — satu-satunya aksen warna hangat

### 2. LAYOUT BARU — BUTTON < > DI BAWAH LAYAR, BUKAN DI PIPA

Sesuai sketsa: 
- Baris 1 (atas): Monitor utama — LEBAR PENUH relatif container (max-width 760px)
- Baris 2 (bawah monitor): flex row dengan gap 12px, terdiri dari:
  - Mini monitor UNIT (flex: 1, max-width ~380px, height 72px)
  - Button PREV "<" (width 72px, height 72px, border-radius 10px)
  - Button NEXT ">" (width 72px, height 72px, border-radius 10px)

Desain button < > baru (bukan circle, sesuai sketsa — rectangle rounded):
- Background: #e8e4dc (sama dengan bezel monitor — satu keluarga)
- Border: 2px solid #d4cfc6
- Border-radius: 10px
- Icon < > : warna #1a3a5c, font-size 20px, font-weight 600
- Hover: background #ddd8ce, border-color #bbb6ae, 
  box-shadow 0 2px 8px rgba(0,0,0,0.12)
- Active/click: scale(0.95) transform 80ms
- Box-shadow (normal): 0 2px 4px rgba(0,0,0,0.08), 
  inset 0 1px 0 rgba(255,255,255,0.7)
- Efek seperti tombol fisik perangkat medis

HAPUS button < > yang ada di kiri-kanan area pipa/tube.
Pipa/tube area sekarang BERSIH dari button — full width tanpa interupsi.

Layout keseluruhan dari atas ke bawah:
┌────────────────────────────────────────────┐
│         MONITOR UTAMA (cream/white)        │  ~160px height
│    "Semangat Menjalani Pelayanannya..."    │
│                              [LED •]       │
└────────────────────────────────────────────┘
  12px gap
┌──────────────────────────┐  ┌───┐  ┌───┐
│ UNIT                     │  │ < │  │ > │   72px height
│ Keluarga & Sahabat       │  │   │  │   │
│                     [•]  │  └───┘  └───┘
└──────────────────────────┘
  32px gap
[======= TUBE FULL WIDTH — NO BUTTONS =======]
  dot indicators

### 3. FONT PESAN — QUESTRIAL

Install dan import font Questrial dari Google Fonts:
Tambahkan di head atau @import:
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

Terapkan Questrial HANYA pada:
- Isi pesan (message body text) di dalam modal/overlay ketika pesan dibuka
- font-family: 'Questrial', sans-serif
- font-size: 16px, line-height: 1.75
- color: #2c2c2c

Semua elemen lain (header, label, button, monitor display) tetap menggunakan 
Rajdhani atau font yang sudah ada sebelumnya.