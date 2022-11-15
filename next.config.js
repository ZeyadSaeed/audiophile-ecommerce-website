/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
