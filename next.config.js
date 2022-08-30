const { withAxiom } = require('next-axiom');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withAxiom({
    reactStrictMode: true,
    compiler: {
      styledComponents: {
        displayName: true,
      },
    },
  })
);
