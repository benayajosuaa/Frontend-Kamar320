import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
