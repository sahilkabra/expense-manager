const gulp = require('gulp');

exports.watch = function (filesToWatch, tasksToRun, ignoreInitial) {
    // should the tasks run the first time
    const runOnce = null != ignoreInitial ? ignoreInitial : false;
    const tasks = Array.isArray(tasksToRun) ? tasksToRun : [tasksToRun];
    const watcher = gulp.watch(filesToWatch, {
            ignoreInitial: runOnce,
            delay: 1000,
        }, gulp.series.apply(gulp, tasks)
    );
    return watcher;
};

