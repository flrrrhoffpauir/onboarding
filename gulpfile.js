var changed		= require('gulp-changed'),
	concat		= require('gulp-concat'),
	filesize	= require('gulp-filesize'),
	gulp		= require('gulp'),
	gutil		= require('gulp-util'),
	jshint		= require('gulp-jshint'),
	minify		= require('gulp-minify-css'),
	plumber		= require('gulp-plumber'), 
	rename		= require('gulp-rename'),
	sass		= require('gulp-ruby-sass'),
	uglify		= require('gulp-uglify'),
	watch		= require('gulp-watch');

var paths = {
	styles: 'src/sass/**/*.scss',
	js: 'js/**/*.js',
}

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass({style: 'nested'}))
		.pipe(gulp.dest('build/css'))
		// .pipe(filesize())
		.pipe(rename('styles.min.css'))
		.pipe(minify())
		.pipe(gulp.dest('build/css'))
		// .pipe(filesize())
		.on('error', gutil.log)
});

gulp.task('js', function() {
	return gulp.src(paths.js)
		.pipe(plumber())
		.pipe(changed('build/js'))
		.pipe(concat('app.js'))
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		.pipe(gulp.dest('build/js'))
		.pipe(filesize())
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('build/js'))
		.pipe(filesize())
		.on('error', gutil.log)
});

gulp.task('build', ['styles', 'js'], function() {
	// 
});

gulp.task('watch', function() {
	gulp.watch([paths.styles, paths.js], function() {
		gulp.start('build');
	});
});

gulp.task('default', function() {
	gulp.run('styles');
});