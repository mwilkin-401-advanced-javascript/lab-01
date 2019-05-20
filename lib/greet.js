'use strict';

module.exports = exports = (name) => {
  if (typeof name !== 'string') return null;
  return `hello ${name}`;
};