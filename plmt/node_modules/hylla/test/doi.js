describe('DOI utility', function() {

  describe('get references', function() {

    it('should return a JSON string when given a DOI', function() {
      var dna = '10.1038/171737a0';
      var dna_ref = hylla.doi.refFromDoi(dna);
      chai.assert.equal(dna, dna_ref.DOI);
    });

    it('should return undefined if given a fake doi', function() {
      var out = hylla.doi.refFromDoi('ThisIsNotADOI');
      chai.assert.isUndefined(out);
    });

  });

});
