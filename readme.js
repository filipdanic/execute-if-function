/**
 * execute-if-function
 * --------------
 *
 * Execute passed argument if it is a function.
 *
 * `npm install execute-if-function`
 *  or
 * `yarn add execute-if-function`
 *
 * Example:
 * executeIfFunction(someFunction); // will execute function and return result
 * executeIfFunction(someNonFunction); // will just return back someNonFunction
 *
 */

/**
 * @param {*} fn
 * @returns {*}
 */
var executeIfFunction = function executeIfFunction(fn) {
  return typeof fn === 'function' ? fn() : fn;
};

module.exports = executeIfFunction;
