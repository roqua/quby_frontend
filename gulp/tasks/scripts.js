var gulp             = require('gulp');
var webpack          = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('../../webpack.config.js');
var bundleLogger     = require('../util/bundleLogger');
var handleErrors     = require('../util/handleErrors');


// gulp.task('browserify', function() {

// 	var bundleMethod = global.isWatching ? watchify : browserify;

// 	var bundler = bundleMethod({
// 		// Specify the entry point of your app
// 		entries: ['./app/scripts/quby.coffee'],
// 		// Add file extentions to make optional in your requires
// 		extensions: ['.coffee', '.hbs']
// 	});

// 	var bundle = function() {
// 		// Log when bundling starts
// 		bundleLogger.start();

// 		return bundler
// 			// Enable source maps!
// 			.bundle({debug: true})
// 			// Report compile errors
// 			.on('error', handleErrors)
// 			// Use vinyl-source-stream to make the
// 			// stream gulp compatible. Specifiy the
// 			// desired output filename here.
// 			.pipe(source('quby.js'))
// 			// Specify the output destination
// 			.pipe(gulp.dest('./build/'))
// 			// Log when bundling completes!
// 			.on('end', bundleLogger.end);
// 	};

// 	if(global.isWatching) {
// 		// Rebundle with watchify on changes.
// 		bundler.on('update', bundle);
// 	}

// 	return bundle();
// });
