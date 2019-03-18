"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const debug = require("gulp-debug");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const newer = require("gulp-newer");

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
  return gulp
    .src("src/assets/**/*.*", { since: gulp.lastRun("assets") }) // копируем только то что изменилось с последнего запуска "assets"
    .pipe(newer("build"))
    .pipe(debug({ title: "assets" }))
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", gulp.parallel("assets", "style")));

gulp.task("watch", function() {
  gulp.watch("src/scss/**/*.*", gulp.series("style"));
  gulp.watch("src/assets/**/*.*", gulp.series("assets"));
});

gulp.task("dev", gulp.series("build", "watch"));
