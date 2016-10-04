/**
Create an entry object

 @param {String} entry The object representation of a citeproc json file
 */
function Entry(entry) {
  this.content = entry;
}

Entry.prototype.id = function() {
  return this.content.id;
};

Entry.prototype.doi = function() {
  return this.content.DOI;
};

Entry.prototype.json = function() {
  return JSON.stringify(this.content, null, 2);
};

module.exports.Entry = Entry;
