const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  reactStrictMode: true,
  withBundleAnalyzer: (phase, defaultConfig) => withBundleAnalyzer(defaultConfig),
  distDir: 'dist',
  styledComponents: true
};
