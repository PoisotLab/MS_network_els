var fs = require('fs');
var path = require('path');
var hylla = require('../hylla.js');
var lib = new hylla.Library(path.resolve('./test/data'));

function assertIsFile(filename) {
  fs.stat(filename, function(err, stats) {
    if (err) throw (err);
  });
}

global.assertIsFile = assertIsFile;

// Directly add from DOI
function addRefFromDoi(d) {
  var info = hylla.doi.refFromDoi(d);
  return lib.new(info);
}

before(function() {
  // Add some informations
  var DOIs = ['10.1890/09-1328.1', '10.1017/CBO9781107415324',
    '10.1109/WI-IAT.2009.15'
  ];
  DOIs.map(addRefFromDoi);
  lib.icanhazpdfs(lib.keys());
});

after(function() {
  fs.unlinkSync(lib.path + '/default.json'); // NOTE remove the test file
  var dir = fs.readdirSync(lib.records);
  for (var i = 0; i < dir.length; i++) {
    fs.unlink(lib.records + '/' + dir[i], function(err) {
      console.log(err);
    });
  }

  var dir = fs.readdirSync(lib.files);
  for (var i = 0; i < dir.length; i++) {
    var to_remove = lib.files + '/' + dir[i];
    fs.unlink(to_remove, function(err) {
      console.log(err);
    });
  }
});
