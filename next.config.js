/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flowbite.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
