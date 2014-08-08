var gulp             = require('gulp');
var gutil            = require('gulp-util');
var webpack          = require('webpack');
var _                = require('underscore');
var webpackConfig    = require('../config/webpack.config.js');
var bundleLogger     = require('../util/bundleLogger');
var handleErrors     = require('../util/handleErrors');

gulp.task("scripts", function() {
  // Modify some webpack config options.
  var config = _.extend({}, webpackConfig);

  // Don't use react-hot-loader for the production build.
  config.entry = _.last(config.entry);
  config.module.loaders[1] = { test: /\.cjsx$/,   loaders: ['coffee', 'cjsx']};
  config.module.loaders[2] = { test: /\.coffee$/, loaders: ['coffee']};
  config.plugins = [];

  config.plugins = config.plugins.concat([
    // This has effect on the react lib size.
    new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]);

  // Run webpack.
  webpack(config, function(err, stats) {
    gutil.log("[scripts:build]", stats.toString({colors: true}));
  });

});


