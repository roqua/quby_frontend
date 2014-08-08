var path = require('path');
var webpack = require('webpack');

module.exports = {
    // Entry point for static analyzer:
    entry: [
      'webpack-dev-server/client?http://localhost:3002',
      'webpack/hot/dev-server',
      './app/scripts/quby'
    ],

    output: {
      path: path.join(__dirname, '../../build'),
      filename: 'quby.js',
    },

    resolveLoader: {
      modulesDirectories: ['node_modules']
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
      // Allow to omit extensions when requiring these files
      extensions: ['', '.js', '.cjsx', '.coffee']
    },

    module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css']},
        { test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx']},
        { test: /\.coffee$/, loaders: ['react-hot', 'coffee'] },
      ]
    }
  };
