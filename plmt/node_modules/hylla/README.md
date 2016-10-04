# Hylla

`hylla` is a package to deal with bibliographic references in the citeproc-json
format. It is currently very bare bones. If you want to see an example of it in
action, try [seilf][seilf] (for the browser).

[seilf]: http://github.com/tpoisot/seilf

[![Code climate](https://img.shields.io/codeclimate/github/tpoisot/hylla.svg)](https://codeclimate.com/github/tpoisot/hylla)
[![Travis](https://img.shields.io/travis/tpoisot/hylla.svg)](https://travis-ci.org/tpoisot/hylla)
[![Coveralls](https://img.shields.io/coveralls/tpoisot/hylla.svg)](https://coveralls.io/github/tpoisot/hylla)
![Dependencies](https://img.shields.io/david/tpoisot/hylla.svg)
![Dependencies](https://img.shields.io/david/dev/tpoisot/hylla.svg)
![License](https://img.shields.io/github/license/tpoisot/hylla.svg)

## Setting-up

`hylla` will need two folders to operate: `records` (to store individual
entries) and `files` (to store the PDF that you stole from sci-hub).

~~~ javascript
var hylla = require('hylla');
var path = require('path').dirname(require.main.filename);
var lib = new hylla.Library(path);
~~~

## Adding references

`hylla` add references from objects in the citeproc format. Most of the time,
you will get these from external sources, like a DOI:

~~~ javascript
var dna = '10.1038/171737a0';
var dna_ref = hylla.doi.refFromDoi(dna);
var newref = lib.new(dna_ref);
console.log(lib.keys());
~~~

## Exporting the bibliography

`pandoc` can use files in the citeproc format -- `hylla` can write these:

~~~ javascript
lib.write()
~~~
