var request = require('sync-request');

/**
@param {String} doi A DOI
@return {Object} The object representation of the reference associated with this DOI.
*/
function refFromDoi(doi) {
  var url = "http://api.crossref.org/works/" + doi +
    "/transform/application/vnd.citationstyles.csl+json";
  var res = request('GET', url);
  if (res.statusCode === 200) {
    return JSON.parse(res.getBody('utf-8'));
  } else {
    return undefined;
  }
}

module.exports.refFromDoi = refFromDoi;
