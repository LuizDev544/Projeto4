const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*', {encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.build = gulp.series(scripts, styles, images);

function watch() {
  gulp.watch('./src/styles/*.scss', styles);
  gulp.watch('./src/scripts/*.js', scripts);
  gulp.watch('./src/images/**/*', images);
}

exports.watch = watch;

exports.default = exports.build;
