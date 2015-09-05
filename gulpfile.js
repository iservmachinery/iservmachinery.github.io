var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload')
    browserSync = require('browser-sync').create();

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
    // .pipe(livereload());
});

// gulp.task('watch', function() {
//   livereload.listen();
//   // gulp.watch('less/*.less', ['less']);
// });

gulp.task('default', ['serve']);

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./"
    });

    // gulp.watch("css/*.css", ['less']);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    // gulp.watch("js/**/*.js", ['js-watch']);

    gulp.watch('less/*.less', ['less']);
});
