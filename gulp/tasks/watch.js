var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('app/styles/**.scss', ['sass']);
	gulp.watch('app/images/**',      ['images']);
	gulp.watch('app/*.html',         ['copy']);
	// Note: The browserify task handles js recompiling with watchify
});
