var hylla = require('/home/tpoisot/Code/packages/node/hylla/hylla.js');
var fs = require('fs');
var path = require('path');

// Load the library
var lib = new hylla.Library();

// Read the document
var doc = path.normalize(process.argv[2])

fs.readFile(doc, 'utf-8', function (err, data) {
  if (err) console.log(err);
  var pandocKeyRE = /@([a-zA-Z0-9_:]*)/g;
  var keys = data.match(pandocKeyRE)
    .map(function (e) {
      return e.replace('@', '')
    });
  keys = keys.filter(function (e, i, a) {
    // if (lib.entry) lib.fix(e);
    return lib.entry(e) ? true : false;
  })
  lib.write("./default.json", keys);
});
