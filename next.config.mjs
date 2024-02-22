/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      "/": { page: "/flow" }, // 自定义根页面位置
    };
  },
};

export default nextConfig;
