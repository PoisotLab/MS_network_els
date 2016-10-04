var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

// Read the document
var readTo = path.normalize(process.argv[2])
var writeTo = path.normalize(process.argv[3])

// Read the header
var meta = yaml.safeLoad(fs.readFileSync('plmt.yaml', 'utf8'));

// TODO: detect extension

function writeFigureBlock(str, p1, p2, offset, s) {
  var block = p1;
  for (var i = 0; i < meta.figure.length; i++) {
    var fig = meta.figure[i];
    if (fig.id === p2) {
      // Caption elements
      var short = fig.short;
      var caption = fig.caption;
      var _CAPT = '\t\\caption' + (short ? '[' + short + ']' : '') + '{' +
        caption + '}\n\t\\label{' + fig.id + '}\n';
      // Width
      var width = fig.wide ? '\\textwidth' : '\\columnwidth';
      var type = fig.wide ? 'figure*' : 'figure';
      var _BLOCKBEGIN = '\\begin{' + type + '}[bt]\n\t\\centering\n';
      var _BLOCKCENTER;
      if (fig.file.substr(-4) === '.tex') {
        _BLOCKCENTER = '\t\\begin{adjustbox}{max width = ' + width + '}\n';
        _BLOCKCENTER += '\t\t\\input{figures/' + fig.file + '}\n';
        _BLOCKCENTER += '\t\\end{adjustbox}\n';
      } else {
        _BLOCKCENTER = '\t\\includegraphics[width=' + width + ']{figures/' +
          fig.file + '}\n';
      }
      var _BLOCKEND = '\\end{' + type + '}\n\n';
      block = _BLOCKBEGIN + _BLOCKCENTER + _CAPT + _BLOCKEND;
    }
  }
  return block;
}

var data = fs.readFile(readTo, 'utf-8', function (err, data) {
  if (err) console.log(err);
  if (meta.figure) {
    var figure = /(!\{([a-z0-9A-Z_-]+)\}){1}/g;
    data = data.replace(figure, writeFigureBlock);
  }
  fs.writeFile(writeTo, data, 'utf-8', function (err) {
    if (err) console.log(err);
  });


});
