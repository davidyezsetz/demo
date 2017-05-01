const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();

const sassPaths = [
  '/scss',
];

gulp.task('webserver', () => {
  connect.server({
    livereload: true,
    port: 8000,
    host: '0.0.0.0',
  });
});

// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp.src('*.js')
    .pipe(connect.reload());
});

gulp.task('sass', () =>
  gulp.src('scss/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
    }).on('error', $.sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
);

gulp.task('watch', ['sass', 'html', 'js'], () => {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/**/*.js'], ['js']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['sass', 'webserver', 'watch']);
