const gulp = require('gulp')

gulp.task('css', function () {
  return gulp
    .src('src/styles/*.css')
    .pipe(gulp.dest('build/styles/'))
})

gulp.task('assets', function () {
  return gulp
    .src('src/assets/*.svg')
    .pipe(gulp.dest('build/assets'))
})