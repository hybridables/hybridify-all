/**
 * hybridify-all <https://github.com/tunnckoCore/hybridify-all>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var reduce = require('object.reduce');
var hybridify = require('hybridify');

/**
 * Hybridifies all the selected functions in an object.
 *
 * @param {Object} `<source>` the source object for the async functions
 * @return {Object}
 * @api public
 */
module.exports = function hybridifyAll(source, dest) {
  if (!source) {
    throw new Error('hybridify-all: should have at least 1 arguments');
  }

  dest = dest || {};

  if (typeof source === 'function') {
    dest = hybridify(source);
  }

  return Object.keys(source).length ? reduce(source, function(dest, fn, key) {
    if (typeof fn === 'function') {
      dest[key] = hybridify(fn);
    }
    return dest;
  }, dest) : dest;
};
