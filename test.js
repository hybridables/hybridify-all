/*!
 * hybridify-all <https://github.com/hybridables/hybridify-all>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var hybridifyAll = require('./index')

test('hybridify-all:', function () {
  test('should throw Error if no arguments', function (done) {
    function fixture () {
      hybridifyAll()
    }
    test.throws(fixture, Error)
    done()
  })
  test('TypeError when first argument isnt Object', function (done) {
    function fixture () {
      hybridifyAll('some string')
    }
    test.throws(fixture, TypeError)
    done()
  })
  test('TypeError when first argument isnt Function', function (done) {
    function fixture () {
      hybridifyAll(['args', 123])
    }
    test.throws(fixture, TypeError)
    done()
  })
  test('hybridifyAll(require("fs").readFile)', function (done) {
    var fs = require('fs')
    var readFile = hybridifyAll(fs.readFile)
    var stat = hybridifyAll(fs.stat)

    readFile(__filename, 'utf8', function (err, res) {
      test.ifError(err)
      test.ok(~res.indexOf('kasjdflasj'))
    })
    .then(function (res) {
      test.ok(~res.indexOf('kasjdflasj'))
      return stat(__filename)
    })
    .then(function (stat) {
      test.equal(stat.size, fs.statSync(__filename).size)
      done()
    })
  })
  test('hybridifyAll(require("fs"), destination)', function (done) {
    var fsfake = {customAsyncFn: function () {}}
    var fs = require('fs')

    fsfake = hybridifyAll(fs, fsfake)
    fsfake.readFile(__filename, 'utf8', function (err, res) {
      test.ifError(err)
      test.ok(~res.indexOf('kasjdflasj'))
    })
    .then(function (res) {
      test.ok(~res.indexOf('kasjdflasj'))
      return fsfake.stat(__filename)
    })
    .then(function (stat) {
      test.equal(typeof fsfake.customAsyncFn, 'function')
      test.equal(stat.size, fs.statSync(__filename).size)
      done()
    })
  })
  test('hybridifyAll(require("got"))', function (done) {
    var gotfake = {customAsyncFn: function () {}}
    var got = require('got')

    gotfake = hybridifyAll(got, gotfake)
    gotfake.get('https://github.com')
    .then(function (res) {
      test.ok(res)
      done()
    })
  })
})
