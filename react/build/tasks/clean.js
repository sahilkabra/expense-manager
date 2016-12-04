//clean.js - gulp tasks to clean all output files

const gulp = require('gulp');
const del = require('del');

const paths = require('../config/paths');

exports.all = cleanAll;
exports.dist = cleanDist;
exports.test = cleanTest;

////////////////////

cleanAll.displayName = 'clean';
gulp.task(cleanAll);
function cleanAll(done) {
    gulp.parallel(
        cleanDist,
        cleanTest
    )(done);
}

cleanDist.displayName = 'clean:dist';
gulp.task(cleanDist);
function cleanDist() {
    return del(paths.clean.dist);
}

cleanTest.displayName = 'clean:test';
gulp.task(cleanTest);
function cleanTest() {
    return del(paths.clean.test, {force: true});
}
