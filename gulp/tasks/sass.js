var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    return gulp.src('app/styles/quby.scss')
               .pipe(sass({style: 'expanded',
                           precision: 10,
                           sourcemap: true,
                           sourcemapPath: ".",
                           loadPath: [path.join(__dirname, '../../app/styles'),
                                      path.join(__dirname, '../../app/bower_components/bourbon/dist'),
                                      path.join(__dirname, '../../app/bower_components/neat/app/assets/stylesheets')]}))
               .pipe(gulp.dest('build'))
});
