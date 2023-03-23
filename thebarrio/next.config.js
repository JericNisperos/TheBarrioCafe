/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "media.discordapp.net", "upload.wikimedia.org"],
  }
}

module.exports = nextConfig
