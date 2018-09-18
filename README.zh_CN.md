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

[Hashids](https://www.npmjs.com/package/hashids) 是一个小型 JavaScript 库，可以从数字中生成类似 YouTube 的 ID。 当您不希望向用户公开数据库真实 ID 时可以使用它。

> 此插件仅用于 [egg.js](https://eggjs.org/)。

## 安装

```bash
$ npm i eggjs-hashids --save
```

## 开启插件

```js
// config/plugin.js
exports.hashids = {
  enable: true,
  package: 'egg-hashids',
};
```

## 详细配置

```javascript
// {app_root}/config/config.default.js
exports.hashids = {
  salt: '',
  minLength: 0,
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
};
```

有关更多详细信息，请参阅 [config/config.default.js](config/config.default.js) 和 [hashids](https://www.npmjs.com/package/hashids) 。

## 使用方法

```javascript
this.app.hashids.encode(1);   // => 'jR'
this.app.hashids.decode('jR'); // => [ 1 ]
this.app.hashids.encodeHex('507f1f77bcf86cd799439011'); // => 'y42LW46J9luq3Xq9XMly'
this.app.hashids.decodeHex('y42LW46J9luq3Xq9XMly'); // => '507f1f77bcf86cd799439011'
```

## 提问交流

请到 [egg issues](https://github.com/weihongyu12/egg-hashids/issues) 异步交流。

## License

[MIT](LICENSE)
