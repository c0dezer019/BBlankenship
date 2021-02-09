const plugins = [
  [
    'babel-plugin-import',
    {
      'libraryName': '@material-ui/core',
      // Use "'libraryDirectory': ''," if your bundler does not support ES modules
      'libraryDirectory': '',
      'camel2DashComponentName': false
    },
    'core'
  ],
  [
    'babel-plugin-import',
    {
      'libraryName': '@material-ui/icons',
      // Use "'libraryDirectory': ''," if your bundler does not support ES modules
      'libraryDirectory': '',
      'camel2DashComponentName': false
    },
    'icons'
  ]
];

const presets = [
  require("@babel/preset-react")
]

module.exports = {plugins, presets};