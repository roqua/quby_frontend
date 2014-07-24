var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
	browserSync.init(['build/**'], {
    open: false,      // dont open browser always, since it might still be open
    ghostMode: false, // syncing clicks and form changes doesnt work well with react.
		server: {
			baseDir: 'build'
		}
	});
});
