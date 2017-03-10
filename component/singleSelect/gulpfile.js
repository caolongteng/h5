var path = require('path');
var gulp = require('gulp');
var gulpImage = require('gulp-image');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpCssnano = require('gulp-cssnano');
var gulpSass = require('gulp-sass');


//全局配置相关
var config = {
	//发布目录
	release: '../../../dist/kjz/'+path.basename(__dirname)+'/',
};

gulp.task('scss', function () {
	return gulp.src('./scss/*.scss')
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('css', ['scss'], function () {
	return gulp.src('./css/*.css')
		.pipe(gulpCssnano())
		.pipe(gulp.dest('./build/css/'));
});

gulp.task('image', function () {
	return gulp.src('./img/*.+(jpg|png|gif|svg)')
		.pipe(gulpImage())
		.pipe(gulp.dest('./build/img/'));
});
gulp.task('html', function(){
	return gulp.src('./*.html')
		.pipe(gulpHtmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build/'));
});
gulp.task('default', ['image', 'css', 'html'], function () {
	return gulp.src('./build/**')
		.pipe(gulp.dest(config.release));
});

//启动一个本地调试服务器
gulp.task('server', function () {
	gulpConnect.server({
		root: 'build',
		port: 8000
	});
});

