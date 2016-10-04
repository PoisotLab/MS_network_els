var fs = require('fs');
var path = require('path');
var fuzzaldrin = require('fuzzaldrin');

var entries = require('./lib/entries.js');
var keys = require('./lib/keys.js');
var doi = require('./lib/doi.js');
var pdf = require('./lib/icanhazpdf.js');

/**
@param {String} folder The folder to use / create
*/
function makeFolderIfNotExist(folder) {
  try {
    fs.statSync(folder)
      .isDirectory();
  } catch (err) {
    fs.mkdirSync(folder);
  }
}

// # Library class
/** Library class
@param {String} library The path to the library
 */
function Library(library) {
  // If no path is given, we will assume that the informations are stored in
  // `pandoc`'s default location, which is supposed to be the `.pandoc` folder
  // in the user's home / profile folder.
  if (library === undefined) {
    // This line should make things reasonably cross-platform
    var home = process.env.HOME || process.env.USERPROFILE;
    library = home + '/.pandoc';
  }
  this.path = path.resolve(library);
  makeFolderIfNotExist(this.path);

  // Build the path for records and files. These two lines will try to access
  // the path, and if it doesn't exist, the `makeFolderIfNotExist` function will
  // create it.
  this.records = this.path + '/records/';
  makeFolderIfNotExist(this.records);

  this.files = this.path + '/files/';
  makeFolderIfNotExist(this.files);

  // Finally, we start with an empty `Array` of entries, and read them using the
  // `read` method declared below.
  this.entries = [];
  this.read();

  // At this time, the `Library` object is created and ready to be used. It is a
  // fairly fast operation (on the order of 1 second to read close to 4000
  // references on my netbook).
}

// ## Read the references from the folder
Library.prototype.read = function () {
  // The path where the files are is part of the object
  var files = fs.readdirSync(this.records);
  // We create an empty array to store the records
  this.entries = [];
  for (var i = 0; i < files.length; i++) {
    // This is the file we read FROM
    var loadFrom = this.records + files[i];
    var entry = fs.readFileSync(loadFrom, 'utf-8');
    // We convert this into an object
    var entryObject = new entries.Entry(JSON.parse(entry), this);
    // If there is no id present, we generate one
    if (entryObject.content.id === undefined) {
      entryObject.content.id = this.generate(entryObject.content);
    }
    // Knowing the id, this is the filename the reference should have
    var loadExpect = this.records + entryObject.id() + '.json ';
    // If there is a mismatch, we fix it
    if (loadExpect.trim() !== loadFrom.trim()) {
      console.log('Change ' + loadFrom + ' to ' + loadExpect);
      // by removing the old file
      fs.unlinkSync(loadFrom);
      // and writing the correct one
      fs.writeFile(loadExpect, entryObject.json(), 'utf-8', function (e) {
        console.log(e);
      });
    }
    // Then we add the entry to the library
    this.entries.push(entryObject);
  }
};

Library.prototype.keys = function () {
  return this.entries.map(function (element, index, array) {
    return element.id();
  });
};

Library.prototype.select = function (ids) {
  return this.entries.filter(function (element, index, array) {
    return ids.indexOf(element.id()) !== -1;
  });
};

Library.prototype.entry = function (id) {
  var get_ref = this.select([id]);
  return get_ref.length === 1 ? get_ref[0] : undefined;
};

Library.prototype.generate = function (entry) {
  var rootAut = keys.nameOfFirstAuthor(entry)
    .toLowerCase()
    .substr(0, 4);
  var rootDat = keys.lastDigitsOfYear(entry);
  var rootLet = keys.firstLettersOfTitle(entry);
  var rootKey = rootAut + rootDat + rootLet;
  var trialKey = rootKey;
  var trials = 1;
  while (this.entry(trialKey)) {
    trials += 1;
    trialKey = rootKey + String(trials);
  }
  return trialKey;
};

Library.prototype.json = function (ids) {
  ids = ids ? ids : this.keys();
  var entries = this.select(ids);
  return JSON.stringify(entries.map(function (e) {
    return e.content;
  }), null, 2);
};

Library.prototype.write = function (file, keys) {
  // File is used to determine where to write the library
  if (file === undefined) {
    file = this.path + '/default.json';
  }
  // Finally, we write the entries in the output file
  fs.writeFileSync(file, this.json(keys), 'utf-8', function (
    err) {
    if (err) console.log(err);
  });
};

Library.prototype.new = function (infos) {
  var entry = new entries.Entry(infos);
  // Look for existing DOI
  var doi_match = this.entries.filter(function (e, i, a) {
    var same = false;
    if (e.doi() && entry.doi()) {
      same = e.doi()
        .trim()
        .toLowerCase() === entry.doi()
        .trim()
        .toLowerCase();
    }
    return same;
  });
  // Is there a match?
  if (doi_match.length > 0) {
    // Note that this is transparent for the user -- it give the same
    // output if it's a new, or existing, reference.
    entry = doi_match[0];
  } else {
    entry.content.id = this.generate(entry.content);
    // The reference is written to file
    fs.writeFileSync(this.records + '/' + entry.id() + '.json', entry.json(),
      'utf-8',
      function (err) {
        if (err) console.log(err);
      });
  }
  // The library is reloaded immediately after
  this.read(); // IDEA: maybe push instead of reloading?
  // NOTE the id of the new reference is returned because it might be useful
  return entry.id();
};

Library.prototype.attach = function (id, file) {
  var entry = this.entry(id);
  if (entry) {
    var moveFileTo = this.files + id + '.pdf';
    fs.stat(file, function (err, stats) {
      if (err) {
        console.log(err);
      } else {
        fs.renameSync(file, moveFileTo, function (e) {
          if (e) {
            console.log(e);
          }
        });
      }
    });
  } else {
    console.log('No entry with ID ' + id);
  }
};

Library.prototype.fix = function (id) {
  if (this.entry(id)) {
    var entry = this.entry(id);
    if (entry.doi()) {
      console.log(entry.doi());
      var updatedInfo = doi.refFromDoi(entry.doi());
      if (updatedInfo) {
        updatedInfo.id = entry.id();
        fs.writeFileSync(this.records + '/' + entry.id() + '.json',
          JSON.stringify(updatedInfo, null, 2),
          'utf-8',
          function (err) {
            if (err) console.log(err);
          });
        this.read();
      }
    }
  }
};

Library.prototype.icanhazpdfs = function (ids) {
  var entries = this.select(ids);
  var pdfs = entries.map(function (e, i, a) {
    var file;
    if (e.doi()) {
      file = pdf.get(e.doi());
    }
    return [e.id(), file];
  });
  for (var i = 0; i < pdfs.length; i++) {
    var file_info = pdfs[i];
    if (file_info[1]) {
      this.attach(file_info[0], file_info[1]);
    }
  }
};

Library.prototype.icanhazpdf = function (id) {
  this.icanhazpdfs([id]);
};

Library.prototype.searchByTitle = function (query) {
  var candidates = this.entries.map(function (e) {
    return e.content;
  });
  var results = fuzzaldrin.filter(candidates, query, {
      key: 'title'
    })
    .map(function (e) {
      return e.id;
    });
  return results;
};

module.exports.Library = Library;
module.exports.keys = keys;
module.exports.doi = doi;
module.exports.pdf = pdf;
