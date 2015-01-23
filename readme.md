## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Hybridifies all the selected functions in an object.

## Install
```bash
npm install hybridify-all
npm test
```

## Related
- [hybridify][hybridify]


## API
> For more use-cases see the [tests](./test.js)

### [.hybridifyAll](./index.js#L41)
> Hybridifies all the selected functions in an object.

- `<source>` **{Object|Function}** the source object for the async functions  
- `[dest]` **{Object|Function}** the destination to set all the hybridified methods
- `return` **{Object|Function}**

**Example:**

```js
var hybridifyAll = require('hybridify-all');
var fs = require('fs');

fs = hybridifyAll(fs);
fs.readFile(__filename, 'utf8', function(err, res) {
  //=> err, res
})
.then(function(res) {
  //=> res
  return fs.stat(__filename);
})
.then(function(stat) {
  assert.strictEqual(stat.size, fs.statSync(__filename).size);
  done();
});
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/hybridify-all
[npmjs-img]: https://img.shields.io/npm/v/hybridify-all.svg?style=flat&label=hybridify-all

[coveralls-url]: https://coveralls.io/r/tunnckoCore/hybridify-all?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/hybridify-all.svg?style=flat

[license-url]: https://github.com/tunnckoCore/hybridify-all/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/hybridify-all
[travis-img]: https://img.shields.io/travis/tunnckoCore/hybridify-all.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/hybridify-all
[daviddm-img]: https://img.shields.io/david/tunnckoCore/hybridify-all.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/hybridify-all/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 23, 2015_

[hybridify]: https://github.com/tunnckoCore/hybridify