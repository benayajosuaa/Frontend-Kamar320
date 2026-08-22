import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/marsada-uph",
        destination:
          "https://drive.google.com/drive/folders/1pzaP4dMcxzXxGZ_msXGhtHN_p5q4u2tg?usp=sharing",
        permanent: false,
      },
      {
        source: "/be723",
        destination:
          "https://drive.google.com/drive/folders/1NIQmYw2XwMp7zCTQFc2J3N-9i9hg-13L?usp=sharing",
        permanent: false,
      },
      {
        source: "/gpt/olipiarachel",
        destination:
          "https://chatgpt.com/g/g-p-6a0b0d2f05108191896823fe29aa785e-tugas-adek-olip/project",
        permanent: false,
      },
      {
        source: "/gpt/shandthebear",
        destination:
          "https://chatgpt.com/g/g-p-69e9a76a8ae48191a248cf816486084c-nashanya-haechan-3/project",
        permanent: false,
      },
      {
        source: "/gpt/learnify-rahel",
        destination:
          "https://chatgpt.com/g/g-p-6a0e8c3431c0819185d27d544b72df65-rahel/project",
        permanent: false,
      },
      {
        source: "/card",
        destination:
          "https://card-rho-lyart.vercel.app/",
        permanent: false,
      },
      {
        source: "/wdk3-summary",
        destination:
          "https://benayasimamora.notion.site/WDK-3-Allah-dan-Ciptaan-Baru-36c7b4f7e45680afbb3affe5c61fb2b1",
        permanent: false,
      },
      {
        source: "/25-Juni",
        destination:
          "https://drive.google.com/drive/folders/1Y2LKf9H8G6fu4iStkFxQBoB6g9s_U4qW?usp=sharing",
        permanent: false,
      },
      {
        source: "/blok-m",
        destination:
          "https://drive.google.com/drive/folders/1gf5fftLGPt0vc8krWsqV0WIxJj8UkHXw?usp=sharing",
        permanent: false,
      },
      {
        source: "/tabungan-kami",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfvi6lm8WBg_JF17dUSA3hruSAFk9fbiAujdke4SCqf-fSbBg/viewform",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
