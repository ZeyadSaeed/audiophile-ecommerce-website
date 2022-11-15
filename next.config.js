/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGODB_URI:
      "mongodb+srv://zeyaddev:zeyaddev@ziadcluster.1sqxp.mongodb.net/audiophile-ecommerce-website?retryWrites=true&w=majority",
    VERCEL_URL: "http://localhost:3000",
  },
  presets: ["next/babel"],
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
