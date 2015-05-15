/*!
 * hybridify-all <https://github.com/hybridables/hybridify-all>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var reduce = require('object.reduce')
var hybridify = require('hybridify')

/**
 * > Hybridifies all the selected functions in an object.
 *
 * **Example:**
 *
 * ```js
 * var hybridifyAll = require('hybridify-all')
 * var fs = require('fs')
 *
 * fs = hybridifyAll(fs)
 * fs.readFile(__filename, 'utf8', function(err, res) {
 *   //=> err, res
 * })
 * .then(function(res) {
 *   //=> res
 *   return fs.stat(__filename)
 * })
 * .then(function(stat) {
 *   assert.strictEqual(stat.size, fs.statSync(__filename).size)
 * })
 * ```
 *
 * @name hybridifyAll
 * @param {Object|Function} `<source>` the source object for the async functions
 * @param {Object|Function} `[dest]` the destination to set all the hybridified methods
 * @return {Object|Function}
 * @api public
 */
module.exports = function hybridifyAll (source, dest) {
  if (!source) {
    throw new Error('hybridify-all: should have at least 1 arguments')
  }

  if (typeOf(source) !== 'function' && typeOf(source) !== 'object') {
    throw new TypeError('hybridify-all: expect `source` be object|function')
  }

  dest = dest || {}

  if (typeof source === 'function') {
    dest = hybridify(source)
  }

  return Object.keys(source).length ? reduce(source, function (dest, fn, key) {
    if (typeof fn === 'function') {
      dest[key] = hybridify(fn)
    }
    return dest
  }, dest) : dest
}

/**
 * Get correct type of value
 *
 * @param  {*} `val`
 * @return {String}
 * @api private
 */
function typeOf (val) {
  if (Array.isArray(val)) {
    return 'array'
  }
  if (typeof val !== 'object') {
    return typeof val
  }

  return Object.prototype.toString(val).slice(8, -1).toLowerCase()
}
