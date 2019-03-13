"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const debug = require("gulp-debug");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

gulp.task("style", function() {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css/"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("assets", function() {
  return gulp.src("src/assets/**/*.*").pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", gulp.parallel("assets", "style")));
