var gulp             = require('gulp');

gulp.task('watch', ['sass', 'images', 'copy', 'server'], function() {
	gulp.watch('app/styles/**/*.scss', ['sass']);
	gulp.watch('app/images/**',        ['images']);
	gulp.watch('app/*.html',           ['copy']);
});
