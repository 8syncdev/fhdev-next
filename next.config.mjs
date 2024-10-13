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
      {
        protocol: 'https',
        hostname: 'fullhousedev.com',
        pathname: '/**',
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
