# egg-hashids

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/eggjs-hashids.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eggjs-hashids
[travis-image]: https://img.shields.io/travis/weihongyu12/egg-hashids.svg?style=flat-square
[travis-url]: https://travis-ci.org/weihongyu12/egg-hashids
[codecov-image]: https://img.shields.io/codecov/c/github/weihongyu12/egg-hashids.svg?style=flat-square
[codecov-url]: https://codecov.io/github/weihongyu12/egg-hashids?branch=master
[david-image]: https://img.shields.io/david/weihongyu12/egg-hashids.svg?style=flat-square
[david-url]: https://david-dm.org/weihongyu12/egg-hashids
[snyk-image]: https://snyk.io/test/npm/eggjs-hashids/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/eggjs-hashids
[download-image]: https://img.shields.io/npm/dm/eggjs-hashids.svg?style=flat-square
[download-url]: https://npmjs.org/package/eggjs-hashids

<!--
Description here.
-->

## Install

```bash
$ npm i egg-hashids --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.hashids = {
  enable: true,
  package: 'egg-hashids',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.hashids = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
