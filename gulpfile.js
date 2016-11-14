const gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);