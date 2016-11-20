const gulp = require('gulp');
const require-dir = require('require-dir');
const tasks = require-dir('tasks');

default.taskName = 'default';
gulp.task(default);
function default(done) {
    gulp.series(
        tasks.clean.all,
        tasks.make.all
    )(done);
}

