/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["misc.scdn.co", "i.scdn.co", "geo-media.beatsource.com", "i1.sndcdn.com", "media.pitchfork.com", "seed-mix-image.spotifycdn.com", "ismbhsudxsgfhmqtzgtk.supabase.co"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ismbhsudxsgfhmqtzgtk.supabase.co',
        port: '',
        pathname: '',
      },
    ],
  }
}

module.exports = nextConfig
