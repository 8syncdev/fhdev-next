/** @type {import('next').NextConfig} */
import nextra from "nextra";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/nextjs-djninex-store.appspot.com/**',
      },
    ],
  },
};

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    defaultShowCopyCode: true,
    staticImage: true,
});

export default withNextra(nextConfig);
