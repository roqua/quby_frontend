var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    return gulp.src('app/styles/**/*.scss')
               .pipe(sass({style: 'expanded',
                           precision: 10,
                           loadPath: [path.join(__dirname, '../../app/bower_components/bourbon/dist'),
                                      path.join(__dirname, '../../app/bower_components/neat/app/assets/stylesheets')]}))
               .pipe(gulp.dest('build'))
});
