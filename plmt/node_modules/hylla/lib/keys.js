var diacritics = require('diacritics');
var keyword = require('keyword-extractor');

/**
 Return a cleaned version of a string

 Specifically, this function will remove all punctuation signs and numbers. It
 will then remove all the diacritics, so that the end result is a string with
 only `a-ZA-Z` and whitespaces.

 @param {String} word The string to be cleaned
 */
function cleanWord(word) {
  // Remove the punctuation
  word = word.replace(/[“”’‘.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/[0-9]/g,
      '');
  // Remove the diacritics
  word = diacritics.remove(word);
  return word;
}

/**
 Return a cleaned version of a name

 Specifically, this function will return the family name for persons, and the
 literal names in all other cases. The names will be cleaned using {@link cleanWord}.

 @param {Object} name The name object
 */
function formatName(name) {
  var fname = name.family ? name.family : name.literal;
  return cleanWord(fname)
    .replace(/\s/g, '');
}

/** Extract the name of the first author
@param {Object} entry The object representation of a citeproc reference
@return {String} A string with either the family or institution name, or "Anonymous"
*/
function nameOfFirstAuthor(entry) {
  /*
  By default, the name of the first author will be `Anonymous` -- we only
  populate this field if we manage to get additional information.
  */
  var name = 'Anonymous';
  if (entry.author) {
    // Specifically, the first thing that we look for is the presence of an
    // `author` field. This is because some journals export the name of the
    // academic editor in the citeproc they return, and we don't need this
    // information for articles.
    name = formatName(entry.author[0]);
  } else if (entry.editor) {
    // Then we only look at the `editor` field if no `author` was found. The
    // idea is that the editor is only really meaningful for books anyways,
    // since the author matters more for book chapters, etc.
    name = formatName(entry.editor[0]);
  }
  return name;
}

// ## First letters of title keywords
/** First letters of title keywords

@param {Object} entry The entry in object format
@return {String} Up to three letters identifying the title
 */
function firstLettersOfTitle(entry) {
  // In the absence of information, we assume that the first three letters will
  // be `???`. The `?` is a valid character in `pandoc` citation keys.
  var titleUniqueLetters = '???';
  if (entry.title) {
    var title = cleanWord(entry.title);
    // Extract keywords by removing all stop-words and short words from the
    // title.
    var keywords = keyword.extract(title, {
      language: 'english',
      remove_duplicates: 'false'
    });
    // We then build the list of the first letters of the title keywors, by taking all of the keywords...
    titleUniqueLetters = keywords.map(function (x) {
        // ... returning the first letter ...
        return x[0];
        // ... then converting everything to lowercase, and returning up to the
        // first three letters.
      })
      .join('')
      .toLowerCase()
      .substr(0, 3);
  }
  return titleUniqueLetters;
}

function entireYear(entry) {
  var dates = [
    'published-print',
    'issued',
    'created',
    'deposited',
    'indexed',
    'accessed'
  ];
  for (var i = 0; i < dates.length; i++) {
    var dateFieldType = dates[i];
    if (dateFieldType in entry) {
      if (entry[dateFieldType].timestamp) {
        var date = new Date(entry[dateFieldType].timestamp);
        return String(date.getFullYear());
      } else {
        var parts = entry[dateFieldType]['date-parts'];
        if (parts) {
          if (parts[0] !== null) {
            return String(parts[0][0]);
          }
        }
      }
    }
  }
  return '????';
}

function lastDigitsOfYear(entry) {
  var year = entireYear(entry);
  year = year.substr(-2);
  return year;
}

// Piece-wise functions
module.exports.nameOfFirstAuthor = nameOfFirstAuthor;

module.exports.entireYear = entireYear;
module.exports.lastDigitsOfYear = lastDigitsOfYear;

module.exports.firstLettersOfTitle = firstLettersOfTitle;
