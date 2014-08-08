var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3002',
    'webpack/hot/dev-server',
    './app/scripts/quby'
  ],

  output: {
    path: __dirname,
    filename: 'quby.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.coffee']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      { test: /\.coffee$/, loaders: ['react-hot', 'coffee'] },
    ]
  }
};
