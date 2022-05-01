/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://zeyaddev:zeyaddev@ziadcluster.1sqxp.mongodb.net/audiophile-ecommerce-website?retryWrites=true&w=majority",
    BASE_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
