var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    return gulp.src('app/styles/quby.scss')
               .pipe(sass({style: 'expanded',
                           precision: 10,
                           loadPath: ['app/bower_components']}))
               .pipe(gulp.dest('build'))
});
