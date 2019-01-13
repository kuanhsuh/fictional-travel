var gulp = require('gulp'),
    watch = require('gulp-watch')

gulp.task('default', function() {
  console.log('horray')
})

gulp.task('html', function() {
  console.log('html task')
})

gulp.task('styles', function() {
  console.log('css task')
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html')
  })

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  })
})