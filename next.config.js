require("dotenv").config();

/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // output: "export",
  // basePath: isProd ? "/MV.Tech" : "",
  // assetPrefix: isProd ? "/MV.Tech/" : "",
  // trailingSlash: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

module.exports = withContentlayer({ ...nextConfig });
