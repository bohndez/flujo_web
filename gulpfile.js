/*
* Para trabajar con gulp.
* Boris Hernández.
* http://www.cajonarioum.cl
*/

//Dependencias - - -
var gulp 		= require('gulp'),
	cambio		= require('gulp-changed'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	less 		= require('gulp-less'),
	minifyCSS 	= require('gulp-minify-css'),
	notify 		= require('gulp-notify'),
	livereload 	= require('gulp-livereload'),
	imagemin 	= require('gulp-imagemin'),
	cache 		= require('gulp-cache'),
	jshint 		= require('gulp-jshint'),
	rename 		= require('gulp-rename');

//Tareas - - - - - -
gulp.task('less', function () {
	return gulp.src('src/less/*.less')
	.pipe(less())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(minifyCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/assets/css/'))
	.pipe(notify({ message: 'less listo!'}));
});

gulp.task('js', function () {
	return gulp.src('src/js/*.js')
	.pipe(uglify())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/assets/js/'))
	.pipe(notify({ message: 'js listo!'}));
});

gulp.task('libs', function () {
	return gulp.src('src/js/libs/*.js')
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(gulp.dest('dist/assets/js/libs/'))
});

gulp.task('images', function() {
	return gulp.src('src/images/**/*')
	.pipe(cambio('dist/assets/images/'))
	.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
	.pipe(gulp.dest('dist/assets/images/'))
	.pipe(notify({ message: 'Imágenes comprimidas!' }));
});

gulp.task('jshint', function() {
	return gulp.src('src/js/main.js')
	.pipe(jshint());
});

gulp.task('watch', function() {
	gulp.watch('src/less/*.less', ['less']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/js/libs/*.jss', ['libs']);
	gulp.watch('src/images/**/*', ['images']);

	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('default', ['less', 'js', 'libs', 'images', 'watch']);