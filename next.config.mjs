/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: this is a marketing/corporate site with no server-side
  // logic (the contact form posts client-side to Formspree). A static
  // export deploys cheaply to Vercel, Cloudflare Pages, Netlify or any
  // static host with no server runtime to operate.
  output: 'export',
  images: {
    // next/image's optimization API needs a server; static export doesn't
    // have one, so we serve the pre-sized brand PNGs as-is.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
