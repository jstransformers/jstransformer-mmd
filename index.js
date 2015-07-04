'use strict';

var mmd = require('mmd');
var extend = require('extend');

exports.name = 'mmd';
exports.inputFormats = ['md', 'mmd', 'multimarkdown'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  return mmd.convert(str, extend({}, options || {}, locals || {}));
};
