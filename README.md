# jstransformer-mmd

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-mmd.svg)](https://greenkeeper.io/)

[MultiMarkdown](https://github.com/mnichols/node-mmd) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mmd/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mmd)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-mmd/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-mmd)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mmd/master.svg)](http://david-dm.org/jstransformers/jstransformer-mmd)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mmd.svg)](https://www.npmjs.org/package/jstransformer-mmd)

## Installation

    npm install jstransformer-mmd

## API

```js
var mmd = require('jstransformer')(require('jstransformer-mmd'));

mmd.render('# Hello, World!').body
//=> '<h1 id="helloworld">Hello, World!</h1>'
```

## License

MIT
