'use strict';

/**
 * egg-hashids default config
 * @member Config#hashids
 * @property {String} SOME_KEY - some description
 */
exports.hashids = {
  salt: '',
  minLength: 0,
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  useAgent: false,
};
