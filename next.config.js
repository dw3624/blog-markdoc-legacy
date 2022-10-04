/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
}

module.exports = withMarkdoc()(nextConfig)
