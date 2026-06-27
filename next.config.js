/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // 🌟 核心：开启纯静态导出模式
  images: {
    unoptimized: true,    // 🌟 必须：静态导出模式下，必须禁用 Next.js 的图片优化组件
  },
};

module.exports = nextConfig;