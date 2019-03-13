"use strict";
const gulp = require("gulp");

gulp.task("start", function(callback) {
  return gulp
    .src("src/**/*.*")
    .on("data", function(data) {
      console.log(data);
    })
    .pipe(
      gulp.dest(function(file) {
        if (file.extname == ".js") {
          return "dest/js";
        } else if (file.extname == ".css") {
          return "dest/css";
        } else return "dest";
      })
    );
});
