"use strict";

const { src, dest, watch } = require("gulp");
const rimraf = require('gulp-rimraf');
const sass = require("gulp-sass");
const minify = require('gulp-minify-css');

const config = {
  distPath: "dist/",
};

function compileSass(done) {
  rimraf(config.distPath);

  src("styles/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(minify())
    .pipe(dest(config.distPath));

  done();
}

exports.compileSass = compileSass;

function watchSass() {
  watch("styles/**/*.scss", compileSass);
}

exports.watchSass = watchSass;
