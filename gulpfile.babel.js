'use strict';

/** Dependencies */
import assign from 'lodash.assign';
import babelify from 'babelify';
import buffer from 'gulp-buffer';
import browserify from 'browserify';
import concat from 'gulp-concat';
import gulp from 'gulp';
import gutil from 'gulp-util';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import stylish from 'gulp-jscs-stylish';
import uglify from 'gulp-uglify';
import watch from 'gulp-watch';
import watchify from 'watchify';

/**
 * A map of application paths
 */
const PATHS = {
    APP_ENTRY: './app/src/main.js',
    DIST: './app/dist',
    SOURCE_JS: './app/src/**/*.js',
    SOURCE_SCSS: './app/src/scss/**/*.scss'
};

/**
 * Configures the Watchify bundler
 */
const browserifyOptions = {
    entries: [PATHS.APP_ENTRY],
    debug: false
};
const opts = assign({}, watchify.args, browserifyOptions);
var bundler = watchify(browserify(opts)).transform(babelify);

/**
 * Configures the SCSS compiler
 */
const sassOptions = {
    'max-line-len': 80,
    'outputStyle': 'compressed'
};

/** ****************************************************** */
/**                         Tasks                          */
/** ****************************************************** */

/**
 * Builds all source files
 */
gulp.task('default', ['build', 'styles']);

/**
 * Builds the application and initiates Watchify
 */
gulp.task('build', bundleJS);
bundler.on('update', bundleJS);
bundler.on('log', gutil.log);

function bundleJS() {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil))
        .pipe(source('bundle.js'))
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest(PATHS.DIST));
}

/**
 * Compiles the SCSS files
 */
gulp.task('sass', bundleSCSS);

/**
 * A watch task for changes to the SCSS files
 */
gulp.task('styles', ['sass'], function() {
    watch(PATHS.SOURCE_SCSS, bundleSCSS);
});

function bundleSCSS() {
    return gulp.src(PATHS.SOURCE_SCSS)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(PATHS.DIST));
}

/**
 * Runs JSHint and JSCS against the source files and logs the results
 */
gulp.task('lint', function() {
    gulp.src(PATHS.SOURCE_JS)
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});
