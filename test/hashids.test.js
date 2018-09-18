'use strict';

const mock = require('egg-mock');
const { assert } = require('egg-mock/bootstrap');

describe('test/hashids.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should have app.hashids', () => {
    assert(app.hashids);
    assert(app.hashids.encode);
    assert(app.hashids.decode);
    assert(app.hashids.encodeHex);
    assert(app.hashids.decodeHex);
  });

  it('encode', () => {
    const hashids = app.hashids;
    const id = hashids.encode(1);
    assert(id === 'jR');
  });

  it('decode', () => {
    const hashids = app.hashids;
    const [ numbers ] = hashids.decode('jR');
    assert(numbers === 1);
  });

  it('encodeHex', () => {
    const hashids = app.hashids;
    const id = hashids.encodeHex('507f1f77bcf86cd799439011');
    assert(id === 'y42LW46J9luq3Xq9XMly');
  });

  it('decodeHex', () => {
    const hashids = app.hashids;
    const id = hashids.decodeHex('y42LW46J9luq3Xq9XMly');
    assert(id === '507f1f77bcf86cd799439011');
  });
});
