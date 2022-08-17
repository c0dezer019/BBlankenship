const { withAxiom } = require('next-axiom');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withAxiom({
  reactStrictMode: true,
  withBundleAnalyzer: (phase, defaultConfig) =>
    withBundleAnalyzer(defaultConfig),
  styledComponents: true,
});
