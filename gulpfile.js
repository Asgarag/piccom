var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');



gulp.task('default', function () {
    return gulp.src('css/style.less')
        .pipe(less())
        .pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
        .pipe(gulp.dest('css'))
});

gulp.task('build', function() {
    gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
    gulp.src('css/style.css')
    .pipe(csso())
    .pipe(gulp.dest('build/css'))
    gulp.src('scripts/main.js')
    .pipe(gulp.dest('build/scripts'))
});
