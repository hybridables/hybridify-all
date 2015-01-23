/**
 * hybridify-all <https://github.com/tunnckoCore/hybridify-all>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var hybridifyAll = require('./index');

describe('hybridify-all:', function() {
  it('hybridifyAll(require(\'fs\').readFile)', function(done) {
    var fs = require('fs');

    var readFile = hybridifyAll(fs.readFile);
    var stat = hybridifyAll(fs.stat);

    readFile(__filename, 'utf8', function(err, res) {
      assert(!err)
      assert(~res.indexOf('kasjdflasj'));
    })
    .then(function(res) {
      assert(~res.indexOf('kasjdflasj'));
      return stat(__filename);
    })
    .then(function(stat) {
      assert.strictEqual(stat.size, fs.statSync(__filename).size);
      done();
    })
  });

  it('hybridifyAll(require(\'fs\'), destination)', function(done) {
    var fsfake = {customAsyncFn: function() {}};
    var fs = require('fs');

    fsfake = hybridifyAll(fs, fsfake);

    fsfake.readFile(__filename, 'utf8', function(err, res) {
      assert(!err)
      assert(~res.indexOf('kasjdflasj'));
    })
    .then(function(res) {
      assert(~res.indexOf('kasjdflasj'));
      return fsfake.stat(__filename);
    })
    .then(function(stat) {
      assert.strictEqual(typeof fsfake.customAsyncFn, 'function')
      assert.strictEqual(stat.size, fs.statSync(__filename).size);
      done();
    })
  });

  it('hybridifyAll(require(\'got\'))', function(done) {
    this.timeout(10000);
    var gotfake = {customAsyncFn: function() {}};
    var got = require('got');

    gotfake = hybridifyAll(got, gotfake);

    gotfake.get('https://github.com')
    .then(function(res) {
      assert(res);
      done();
    });
  });
});
