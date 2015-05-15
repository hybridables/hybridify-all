# hybridify-all [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Hybridifies all the selected functions in an object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i hybridify-all --save
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [hybridifyAll](./index.js#L41)
> Hybridifies all the selected functions in an object.

- `<source>` **{Object|Function}** the source object for the async functions  
- `[dest]` **{Object|Function}** the destination to set all the hybridified methods
- `return` **{Object|Function}**

**Example:**

```js
var hybridifyAll = require('hybridify-all')
var fs = require('fs')

fs = hybridifyAll(fs)
fs.readFile(__filename, 'utf8', function(err, res) {
  //=> err, res
})
.then(function(res) {
  //=> res
  return fs.stat(__filename)
})
.then(function(stat) {
  assert.strictEqual(stat.size, fs.statSync(__filename).size)
});
```


## Related
- [exec-cmd](https://github.com/hybridables/exec-cmd): Flexible and cross-platform executing commands. Hybrid. Async and Promise API.
- [hybridify](https://github.com/hybridables/hybridify#readme): Building hybrid APIs. You can use both callback and promise in same time.  Like `asyncFn(name, cb).then().catch()`
- [handle-callback](https://github.com/hybridables/handle-callback): Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give promise and callback return promise.
- [handle-arguments](https://github.com/hybridables/handle-arguments#readme): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [then-got](https://github.com/hybridables/then-got): Simplified and promisified HTTP/HTTPS requests (`sindresorhus/got`). **Hybrid, Async and Promise API.**


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/hybridify-all/issues/new).  
But before doing anything, please that read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/hybridify-all
[npmjs-img]: https://img.shields.io/npm/v/hybridify-all.svg?label=hybridify-all

[license-url]: https://github.com/hybridables/hybridify-all/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/hybridables/hybridify-all
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/hybridify-all.svg

[travis-url]: https://travis-ci.org/hybridables/hybridify-all
[travis-img]: https://img.shields.io/travis/hybridables/hybridify-all.svg

[coveralls-url]: https://coveralls.io/r/hybridables/hybridify-all
[coveralls-img]: https://img.shields.io/coveralls/hybridables/hybridify-all.svg

[david-url]: https://david-dm.org/hybridables/hybridify-all
[david-img]: https://img.shields.io/david/hybridables/hybridify-all.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg