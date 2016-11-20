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

exports.make = {
    src: [
        `${dirs.src}/${globs.js},
    ],
    test: [
        `${dirs.test}/${globs.spec},
    ],
}

exports.clean = {
}

exports.test = {
}
