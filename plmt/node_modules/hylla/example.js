var hylla = require('hylla');

// We start a new library in the current folder
var path = require('path').dirname(require.main.filename);
var lib = new hylla.Library(path);

// And we add a reference from a DOI
var dna = '10.1038/171737a0';
var dna_ref = hylla.doi.refFromDoi(dna);
var newref = lib.new(dna_ref);
console.log(lib.keys());
