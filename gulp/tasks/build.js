var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
usemin = require('gulp-usemin'),
del = require('del')

gulp.task('deleteDistFolder', function () {
  return del("./dist")
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./dist/assets/images"))
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin())
    .pipe(gulp.dest("./dist"))
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);