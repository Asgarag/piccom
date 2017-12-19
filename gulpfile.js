var gulp = require('gulp');
var less = require('gulp-less');
uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');



gulp.task('css', function () {
    return gulp.src('css/style.less')
        .pipe(less())
        .pipe(csso())
        .pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
        .pipe(gulp.dest('css'))
});

gulp.task('build', function () {
  gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'))
  gulp.src('css/style.css')
  .pipe(gulp.dest('build/css'))
  gulp.src('scripts/main.js')
  .pipe(gulp.dest('build/scripts'))
});

gulp.task('js', function () {
  gulp.src([
                'scripts/parts/moment.js',
                'scripts/parts/pikaday.js',
                'scripts/parts/datepicker.js',
                'scripts/parts/menu.js'
        ])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('scripts'))
});

gulp.task('watch', function () {
 gulp.watch('./css/blocks/*.less', ['css']);
 gulp.watch('./scripts/parts/*.js', ['js']);
});
