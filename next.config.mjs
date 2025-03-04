/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/image.js',
  }
};

export default nextConfig;
