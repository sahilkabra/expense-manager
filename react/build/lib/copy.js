const gulp = require('gulp');
const syncy = require('syncy');

module.exports = function copysrc(src, dest, fnName, options) {
    const fn = function() {
        return _copy(src, dest, options);
    };
    fn.displayName = fnName ? fnName : `copy:${src} -> ${dest}`;
    return fn;
}

/**
 * copies all files from src to des
 */
function _copy(src, dest, options) {
    return syncy(src, dest, Object.assign({
        verbose: true,
        base: src.substring(0, src.lastIndexOf('/')),
    }, options));
}

