var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    minifyCSS = require("gulp-clean-css"),
    minifyJs = require("gulp-uglify"),
    concat = require("gulp-concat"),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin');

// browser syncing
gulp.task('browser-sync', function() {
    // Start the server
    browserSync.init({
        server: "app"
    });
});

gulp.task("default", ['browser-sync']);
