describe('Entries', function() {

  describe('getting entries', function() {

    it('should return something when a valid key is accessed', function() {
      var lib = new hylla.Library(path.resolve("./test/data"));
      var ref_0_key = lib.entries[0].id();
      chai.assert.isDefined(lib.entry(ref_0_key));
    });

    it('should return undefined when an invalid key is accessed',
      function() {
        var lib = new hylla.Library(path.resolve("./test/data"));
        chai.assert.isUndefined(lib.entry("ThisIsNotAnEntry"));
      });
  });

  describe('adding references', function() {

    it('should create a new key', function() {
      var doi = "10.1111/ecog.01748";
      var ref = hylla.doi.refFromDoi(doi);
      var lib = new hylla.Library(path.resolve("./test/data"));
      var newref = lib.new(ref);
      // First we check the key
      chai.assert.equal(newref, 'gray15tts');
      // Then we remove the file
      fs.unlinkSync(lib.records + "/" + newref + ".json");
    });

    // Currently disabled because the DOI unicity condition in .new() will catch most of these
    it('should create a new key with a unique identifier');

    it('should create a new file when a key is created', function() {
      var doi = "10.1111/ecog.01748";
      var ref = hylla.doi.refFromDoi(doi);
      var lib = new hylla.Library(path.resolve("./test/data"));
      var newref = lib.new(ref);
      // First we check the key
      chai.assert.equal(newref, 'gray15tts');
      assertIsFile(lib.records + "/" + newref + ".json");
      // Then we remove the file
      fs.unlinkSync(lib.records + "/" + newref + ".json");
    });

    it('should load the updated library');

  });

});
