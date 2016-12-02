const path = require('path');

const dirs = exports.dirs = {
    build: {
        root: 'build',
        config: 'build/config',
        tasks: 'build/tasks',
        lib: 'build/lib',
    },
    dist: 'dist',
    test: 'test',
    src: 'src',
    root: path.join(__dirname, '..', '..'),
};

const globs = {
    js: '**/*.js',
    spec: '**/*.spec.js',
};

const sources = [
    `${dirs.src}/${globs.js}`,
];

const test = [
    `${dirs.test}/${globs.spec}`,
];

exports.make = {
    src: sources,
    test: test,
}

exports.clean = {
    dist: `${dirs.dist}/${globs.js}`,
}
