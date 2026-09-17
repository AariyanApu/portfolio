import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
  async redirects() {
    return [
      // Old links still floating around (GitHub README, older profiles).
      { source: "/archive", destination: "/projects", permanent: true },
      { source: "/resume", destination: "/resume.pdf", permanent: true },
      { source: "/cv", destination: "/resume.pdf", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
