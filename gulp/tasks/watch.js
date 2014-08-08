var path             = require('path');
var gulp             = require('gulp');
var gutil            = require('gulp-util');
var webpack          = require('webpack');
var webpackConfig    = require('../../webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

gulp.task("webpack-dev-server", function() {
  var config = webpackConfig;

  var compiler = webpack({
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
        { test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx']},
        { test: /\.coffee$/, loaders: ['react-hot', 'coffee'] },
      ]
    }
  });

  var devServer = new WebpackDevServer(compiler,
    {contentBase: './build/',
     hot: true}
  );

  devServer.listen(3002, "localhost", function() { });
});

gulp.task('watch', ['images', 'copy', 'webpack-dev-server'], function() {
	// gulp.watch('app/styles/quby.scss', ['sass']);
	gulp.watch('app/images/**',      ['images']);
	gulp.watch('app/*.html',         ['copy']);
});
