'use strict';

var gulp = require('gulp'), 
	sass = require('gulp-sass'),
	autoprefix = require('gulp-autoprefixer'),
	bsync = require('browser-sync');

const reload = bsync.reload;
// build-css: compiles sass to css and adds vendor prefixes where needed

gulp.task('build-css', function() {
  return gulp.src('styles/*.scss')   // add other files here if needed
  	.pipe(autoprefix('last 2 versions'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}));
});


// browser-sync: runs build-sass and starts up page in the browser browser

gulp.task('browser-sync',['build-css'], function(){
    bsync.init({
        server: {
            baseDir: "./"
        }
    });
});

// serve: watches for changes to files - upon change, run build-sass and browser-sync, reload

gulp.task('serve', ['build-css'], () => {
  bsync({
    notify: false,
    port: 3000,
    server: {
      baseDir: "./"
    }
  });

  gulp.watch([
    '*.html',
    'images/**/*'
  ]).on('change', reload);

  gulp.watch('styles/**/*.scss', ['build-css']);
});


// gulp: defaults to running 'serve' task

gulp.task('default', () => {
  gulp.start('serve');
});
