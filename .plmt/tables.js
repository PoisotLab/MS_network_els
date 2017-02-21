var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

// Read the document
var readTo = path.normalize(process.argv[2])
var writeTo = path.normalize(process.argv[3])

// Read the header
var meta = yaml.safeLoad(fs.readFileSync('metadata.yaml', 'utf8'));

function writeTableBlock(str, p1, p2, offset, s) {
  var block = p1;
  for (var i = 0; i < meta.table.length; i++) {
    var tab = meta.table[i];
    if (tab.id === p2) {
      var content = fs.readFileSync('tables/' + tab.file, 'utf-8', function (
        err) {
        if (err) console.log(err);
      });

      var latexfile = 'tables/' + tab.file.replace('.md', '.tex');

      var table = fs.readFileSync(latexfile,
        'utf-8',
        function (err) {
          if (err) console.log(err);
        });
      table = table.replace(/longtable/g, 'tabular');
      table = table.replace(/\{tabular\}\[c\]/g, '{tabular}');
      table = table.replace(/@\{\}/g, '');
      table = table.replace(/\\endhead/g, '');
      table = table.replace(/\\tabularnewline/g, ' \\\\');
      // End
      var type = tab.wide ? 'table*' : 'table';
      var short = tab.short;
      var caption = tab.caption;
      var _CAPT = '\t\\caption' + (short ? '[' + short + ']' : '') + '{' +
        caption + '}\n\t\\label{' + tab.id + '}\n';
      var _BLOCKBEGIN = '\\begin{' + type + '}[bt]\n\t\\centering\n';
      _BLOCKBEGIN += _CAPT;
      _BLOCKBEGIN += table;
      _BLOCKBEGIN += '\\end{' + type + '}';
      block = _BLOCKBEGIN;
    }
  }
  return block;
}


var data = fs.readFile(readTo, 'utf-8', function (err, data) {

  if (err) console.log(err);

  if (meta.table) {
    var table = /(\?\{([a-z0-9A-Z_-]+)\}){1}/g;
    data = data.replace(table, writeTableBlock);
  }
  fs.writeFileSync(writeTo, data, 'utf-8', function (err) {
    if (err) console.log(err);
  });

});
