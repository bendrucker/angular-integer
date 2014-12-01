'use strict';

module.exports = require('angular')
  .module('integer', [])
  .directive('integer', require('./directive'))
  .name;
