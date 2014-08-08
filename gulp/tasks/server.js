var path             = require('path');
var gulp             = require('gulp');
var gutil            = require('gulp-util');
var webpack          = require('webpack');
var _                = require('underscore');
var touch            = require('touch');
var webpackConfig    = require('../config/webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

gulp.task("server", function() {
  // Ensure there's a `./build/quby.css` file that can be required.
  touch.sync('./build/quby.css', {time: new Date(0)});

  var config = _.extend({}, webpackConfig);
  var compiler = webpack(webpackConfig);
  var devServer = new WebpackDevServer(compiler, {contentBase: './build/', hot: true});

  devServer.listen(3002, "localhost", function() { });
});
