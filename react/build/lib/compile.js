//compile.js - gulp tasks to compile JS/TS sources

const path = require('path');
const gulp = require('gulp');
const tsc = require('typescript');
const paths = require('../config/paths');
const babelPreset2015 = require('babel-preset-es2015');
const babelPreset2016 = require('babel-preset-es2016');
const babelPreset2017 = require('babel-preset-es2017');
const babelPresetReact = require('babel-preset-react');
const babelPresetStage3 = require('babel-preset-stage-3');
const babelSystemjsTransfrom =
    require('babel-plugin-transform-es2015-modules-systemjs');

const $ = require('gulp-load-plugins')({
    DEBUG: false,
    lazy: true,
});

module.exports = {
    ts: ts,
    babel: babel,
};

/**
 * Use to compile js and ts files.
 * The js files need to have ts compatible syntax
 */
function ts(filesRoot, filesDest, mapsDest, filesGlob, options) {
    const title = filesRoot.replace('/', ':');
    const config = Object.assign({
        typescript: tsc,
    }, options);
    const tsProject = $.typescript.createProject('tsconfig.json', config);

    const result = gulp.src([].concat(filesGlob, paths.typings.all))
        .pipe($.plumber(plumb))
        .pipe($.cached('compileTs', {optimizeMemory: true}))
        .pipe($.sourcemaps.init({debug: true, identityMap: true}))
        .pipe($.typescript(tsProject));

    return result.js
        .pipe($.sourcemaps.write(mapsDest, {
            sourceRoot: path.join(paths.dirs.project),
        }))
        .pipe($.size({
            title,
        }))
        .pipe(gulp.dest(filesDest))
        .pipe($.livereload());
};

/**
 * Use to compile js files only.
 * This can be used to compile js files with babel
 * compatible syntax
 */
function babel(filesRoot, filesDest, mapsDest, filesGlob, options) {
    const title = filesRoot.replace('/', ':');
    const result = gulp.src([].concat(filesGlob))
        .pipe($.plumber(plumb))
        .pipe($.cached('compileBabel', {optimizeMemory: true}))
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: [babelPreset2015, babelPresetStage3, babelPresetReact],
            plugins: [babelSystemjsTransfrom]
        }))
        .pipe($.sourcemaps.write(mapsDest, {
            sourceRoot: '../'
        }))
        .pipe($.size({
            title,
        }))
        .pipe(gulp.dest(filesDest))
    ;
    return result;
};
