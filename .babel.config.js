module.exports = api => {
  api.cache(false);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
    'next/babel',
  ]

  const plugins = [
    ["styled-jsx/babel", { "optimizeForSpeed": true }],
    ["styled-components", { "ssr": true }]
  ];

  return { plugins, presets };
}
