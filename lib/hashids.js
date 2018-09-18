'use strict';

const Hashids = require('hashids');

module.exports = app => {
  const { salt, minLength, alphabet } = app.config.hashids;
  app.hashids = new Hashids(salt, minLength, alphabet);
};
