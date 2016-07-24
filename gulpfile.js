/*
* Para trabajar con gulp.
* Boris Hernández.
* https://github.com/bohndez
*/

// DEPENDENCIAS
// ------------
var gulp 		= require('gulp'),              // Automatiza las tareas.
	concat 		= require('gulp-concat'),       // Toma el contenido de varios archivos y los deja en un único archivo.
	uglify 		= require('gulp-uglify'),       // Comprime el código Javasscript.
	less 		= require('gulp-less'),         // Procesa archivos ".less" y los deja como  ".css".
	cleanCss 	= require('gulp-clean-css'),    // Minifica los archivos CSS.
	notify 		= require('gulp-notify'),		// Lanza notificaciones del sistema operativo.
	livereload 	= require('gulp-livereload'),   // Detecta si hubo cambios en los archivos y refresca el navegador si los hay.
	imagemin 	= require('gulp-imagemin'),     // Comprime imágenes para dejarlas más livianas.
	rename 		= require('gulp-rename');       // Cambia nombres y agrega prefijos y sufijos.

// TAREAS
// ------

	// Procesa y comprime los archivos LESS. - - -
	gulp.task('less', function () {
		return gulp.src('src/less/*.less')
		.pipe(less())
		.on("error", notify.onError("<%= error.message %>"))
		.pipe(cleanCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/assets/css/'))
		.pipe(notify({ message: 'Less listo!'}));
	});

	// Minifica los archivos Javascript. - - -
	gulp.task('js', function () {
		return gulp.src('src/js/*.js')
		.pipe(uglify())
		.on("error", notify.onError("<%= error.message %>"))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/assets/js/'))
		.pipe(notify({ message: 'JS listo!'}));
	});

	// Minifica y deja en un único archivo los archivos Javascript que estén en "src/js/libs/". - - -
	gulp.task('libs', function () {
		return gulp.src('src/js/libs/*.js')
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.on("error", notify.onError("<%= error.message %>"))
		.pipe(gulp.dest('dist/assets/js/libs/'))
	});

	// Comprime las imágenes.
	gulp.task('images', function() {
		return gulp.src('src/images/**/*')
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('dist/assets/images/'))
		.pipe(notify({ message: 'Imágenes comprimidas!' }));
	});

	// Monitorea si hay cambios. Si los hay, ejecuta la tarea correspondiente. - - -
	gulp.task('watch', function() {
		gulp.watch('src/less/*.less', ['less']);
		gulp.watch('src/sass/*.scss', ['sass']);
		gulp.watch('src/js/*.js', ['js']);
		gulp.watch('src/js/libs/*.js', ['libs']);
		gulp.watch('src/images/**/*', ['images']);

		livereload.listen(); // Permite ver si hay cambios y refresca de inmediato el navegador si los hay.
		gulp.watch(['dist/**']).on('change', livereload.changed);
	});

// LLAMADO A LAS TAREAS
// --------------------
gulp.task('default', ['less', 'js', 'libs', 'images', 'watch']);