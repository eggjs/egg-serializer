# egg-serializer

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-serializer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-serializer
[travis-image]: https://img.shields.io/travis/eggjs/egg-serializer.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-serializer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-serializer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-serializer?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-serializer.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-serializer
[snyk-image]: https://snyk.io/test/npm/egg-serializer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-serializer
[download-image]: https://img.shields.io/npm/dm/egg-serializer.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-serializer

<!--
Description here.
-->

## Install

```bash
$ npm i egg-serializer --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.serializer = {
  enable: true,
  package: 'egg-serializer',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.serializer = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
