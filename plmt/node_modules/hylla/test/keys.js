describe('Keys', function() {

  describe('names', function() {

    it('should return anonymous if there are no authors');

    it('should return the last name if the first author is a person');

    it('should return the institution name if the first author is an institution', function() {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(hylla.keys.nameOfFirstAuthor(lib.entry("inte09ccp").content), "IntergovernmentalPanelonClimateChange");
    });

    it('should remove diacritics', function() {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(hylla.keys.nameOfFirstAuthor(lib.entry("lali10dht").content), "Laliberte");
    });

    it('should return the editor name if there are no authors');
    it('should work with short author names (less than 2 valid chars)', function () {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(lib.entry("liu09cdl").id(), "liu09cdl");
    });
  });

  describe('date', function() {
    it('should return the issued year if present', function () {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(hylla.keys.entireYear(lib.entry("lali10dht").content), "2010");
    });
    it('should work with the shortened year too', function () {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(hylla.keys.lastDigitsOfYear(lib.entry("lali10dht").content), "10");
    });
    it('should return the accessed year if there is no issued date present');
    it('should return ???? if there are no dates');
  });

  describe('title', function() {

    it('should return the title first letters', function () {
      var lib = new hylla.Library(path.resolve("./test/data"));
      chai.assert.equal(hylla.keys.firstLettersOfTitle(lib.entry("lali10dht").content), "dht");
    });

    it('should return the title first letters even if there are less than three words');
    it('should remove diacritics from the title');
    it('should return something even when there is no title');
  });

  describe('unicity', function() {
    it('should return a unique number at the end if there is a duplicate');
  });

});
