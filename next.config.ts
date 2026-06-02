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
        source: "/cheatsheet-wdk3",
        destination:
          "https://uph365-my.sharepoint.com/:f:/g/personal/01082240013_student_uph_edu/IgAuktWUK_-JS6Icr7tFbhQ-AWaMU_5Zsc0vTlnBIbqG1zs?e=zakJau",
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
