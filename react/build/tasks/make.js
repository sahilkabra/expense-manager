//make.js - gulp tasks to make source and test files

const gulp = require('gulp');
const paths = require('../config/paths');

exports.all = makeAll;
exports.src = makeSrc;
exports.test = makeTest;
