'use strict';

const hashids = require('./lib/hashids');

module.exports = app => {
  hashids(app);
};
