describe('PDF finder', function() {
  describe('publisher identifier', function() {
    it('should recognize plos', function() {
      chai.assert.equal(hylla.pdf.match(
        '10.1371/journal.pcbi.1004725'), 'plos');
    });
    it('should recognize pnas', function() {
      chai.assert.equal(hylla.pdf.match('10.1073/pnas.1523317113'),
        'pnas');
    });
    it('should recognize wiley', function() {
      chai.assert.equal(hylla.pdf.match(
        '10.1111/j.1461-0248.2010.01572.x'), 'wiley');
    });
    it('should recognize royal society', function() {
      chai.assert.equal(hylla.pdf.match(
        '10.1098/rspb.2009.2139'), 'royal_society');
    });
    it('should recognize peerj', function() {
      chai.assert.equal(hylla.pdf.match('10.7717/peerj.1974'),
        'peerj');
    });
  });

  describe('download module', function() {

    it('should work with plos journals', function() {
      hylla.pdf.get('10.1371/journal.pcbi.0030102');
      assertIsFile('10fizz1371buzzjournalfizzpcbifizz0030102.pdf');
      fs.unlinkSync('10fizz1371buzzjournalfizzpcbifizz0030102.pdf');
    });

    it('should work with royal society journals', function() {
      hylla.pdf.get('10.1098/rspb.2009.2139');
      assertIsFile('10fizz1098buzzrspbfizz2009fizz2139.pdf');
      fs.unlinkSync('10fizz1098buzzrspbfizz2009fizz2139.pdf');
    });

    it('should work with wiley journals', function() {
      hylla.pdf.get('10.1111/j.2041-210X.2010.00032.x');
      assertIsFile(
        '10fizz1111buzzjfizz2041-210Xfizz2010fizz00032fizzx.pdf');
      fs.unlinkSync(
        '10fizz1111buzzjfizz2041-210Xfizz2010fizz00032fizzx.pdf');
    });



    it('should work from the library', function() {
      var lib = new hylla.Library(path.resolve('./test/data'));
      var doi = '10.1371/journal.pcbi.0030102';
      var ref = hylla.doi.refFromDoi(doi);
      var newref = lib.new(ref);
      lib.icanhazpdf(newref);
    });
  });
});
