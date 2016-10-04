var request = require('sync-request');
var fs = require('fs');

// # ICanHazPDF? Please?

// ## Identify publisher from doi
// There is no really elegant way of dealing with this problem -- this is just a
// series of re, returning the name of the publisher. Then we need basically one
// function by publisher to get the PDF URL.
/**
@param {String} doi The DOI to indentify
@return {String} The identified publisher (or `undefined`)
 */
function getPublisherFromDoi(doi) {
  // Wiley
  if (/10\.(1111|1890|1002)/.test(doi)) {
    return 'wiley';
  }
  // Elsevier
  if (/10\.1016/.test(doi)) {
    return 'elsevier';
  }
  // Taylor & Francis
  if (/10\.1080/.test(doi)) {
    return 'taylorfrancis';
  }
  // Royal Society
  if (/10\.1098/.test(doi)) {
    return 'royal_society';
  }
  // PNAS
  if (/pnas/.test(doi)) {
    return 'pnas';
  }
  // PeerJ
  if (/peerj/.test(doi)) {
    return 'peerj';
  }
  // Plos
  if (/10\.1371\/journal\.p(pat|one|med|gen|ntd|bio|cbi)\./.test(doi)) {
    return 'plos';
  }
  // If not, return undefined
  return undefined;
}

function getPdfFromRoyalSociety(doi) {
  var url;
  var res = request('GET', 'http://dx.doi.org/' + doi);
  var ftext = res.getBody('utf-8');
  var pdf = /http:\/\/(.+)\.full\.pdf/g.exec(ftext);
  if (pdf.length > 0) {
    url = pdf[0];
  }
  return url;
}

function getPdfFromTaylorFrancis(doi) {
  var url = 'http://tandfonline.com/doi/pdf/' + doi;
  return url;
}

function getPdfFromWiley(doi) {
  var url;
  var res = request('GET', 'http://onlinelibrary.wiley.com/doi/' + doi + '/pdf');
  var ftext = res.getBody('utf-8');
  var asset = /id="pdfDocument" src="(.+asset.+)" width/.exec(ftext);
  if (asset.length > 1) {
    url = asset[1];
  }
  return url;
}

function getPdfFromPlos(doi) {
  // All PLOS journals have a similar DOI structure, with `p` and a three letter
  // code, so this is easy to get the journal name from the DOI.
  var PLOS = {
    cbi: 'compbiol',
    med: 'medicine',
    pat: 'pathogens',
    one: 'one',
    ntd: 'ntds',
    bio: 'biology'
  };
  // Note that (unless PLOS creates a new journal) the doi cannot be anything
  // else. This is the same possibilities used in the function to identify PLOS
  // as a publisher.
  var match = /10\.1371\/journal\.p(pat|one|med|gen|ntd|bio|cbi)\./.exec(doi);
  var journal = match[1];
  // From the journal name, we can simply re-construct the PDF URL, and return
  // this.
  var url = 'http://www.plos' + PLOS[journal] +
    '.org/article/fetchObject.action?uri=info:doi/' + doi +
    '&representation=PDF';
  return url;
}

// ## Get the PDF from a DOI
function getPdf(doi) {
  if (doi === undefined) return undefined;
  var publisher = getPublisherFromDoi(doi);
  var url = '';
  var fname;

  // We will pretend to be a browser, most publishers won't let us access the
  // pdf without this. Specifically, we pretend to be someone using a fairly
  // recent version of OS X with a strangely out of date version of firefox. The
  // perfect academic, in short.
  var ua =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:32.0) ' +
    'Gecko/20100101 Firefox/32.0';

  // If we get a publisher...
  if (publisher === undefined) return undefined;
  if (publisher === 'plos') url = getPdfFromPlos(doi);
  if (publisher === 'royal_society') url = getPdfFromRoyalSociety(doi);
  if (publisher === 'wiley') url = getPdfFromWiley(doi);
  if (publisher === 'taylorfrancis') url = getPdfFromTaylorFrancis(doi);

  // The name of the PDF is temporarily changed, to avoid issues with slashes
  // and periods
  fname = doi.replace(/\./g, 'fizz')
    .replace(/\//g, 'buzz') + '.pdf';

  // Now we download the pdf
  var pdf_content = request('GET', url, {
    headers: {
      'user-agent': ua
    }
  });

  var content = pdf_content.getBody();
  // TODO: error code
  fs.writeFileSync(fname, content, 'utf-8', function (e) {
    if (e) console.log(e);
  });

  return fname;
}

module.exports.match = getPublisherFromDoi;
module.exports.get = getPdf;
