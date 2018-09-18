'use strict';

const hashids = require('./lib/hashids');

module.exports = agent => {
  const useAgent = agent.config.hashids.useAgent;
  if (useAgent) {
    hashids(agent);
  }
};
