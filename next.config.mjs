/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'adonportfolio'; // 对应 Gitee 仓库名

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Gitee Pages 部署在子路径时需要配置 basePath
  // 本地开发(dev)不需要，只有 build(production) 时需要
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;
