"use strict";
const gulp = require("gulp");

gulp.task("hello", function(callback) {
  console.log(`helloo`);
  callback();
});

gulp.task("1", function(callback) {
  console.log(`1`);
  callback();
});

gulp.task("2", function(callback) {
  console.log(`2`);
  callback();
});

gulp.task("3", function(callback) {
  console.log(`3`);
  callback();
});

gulp.task("all", gulp.series("hello", "1", "2", "3"));
