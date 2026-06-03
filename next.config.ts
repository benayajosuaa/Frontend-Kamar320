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
    ];
  },
};

export default nextConfig;
