/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/MV.Tech" : "",
  assetPrefix: isProd ? "/MV.Tech/" : "",
  trailingSlash: true,
};

module.exports = withContentlayer({ ...nextConfig });
