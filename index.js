'use strict';

var markdownIt = require('jstransformer-markdown-it');

exports.name = 'mmd';
exports.inputFormats = ['md', 'mmd', 'multimarkdown'];
exports.outputFormat = 'html';

exports.render = markdownIt.render;
