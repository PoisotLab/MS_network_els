describe('Library', function() {

  describe('loading', function() {

    it('should create the appropriate folders');

    it('should create a default path if none is given', function() {
      // var lib = new hylla.Library();
      // chai.assert.include(lib.path, ".pandoc");
    });

    it('should use the given path if a path is given', function() {
      var library = path.resolve("./test/data");
      var lib = new hylla.Library(library);
      chai.assert.equal(library, lib.path);
    });

    it(
      'should fix the file name if the filename and the key are mismatched'
    );

    it(
      'should create an id if there is no idea given'
    );

  });

  describe('writing', function() {

    it('should write a default.json file in the path', function() {
      var library = path.resolve("./test/data");
      var lib = new hylla.Library(library);
      lib.write();
      assertIsFile(library + "/default.json");
    });

    it('should write to a different location');
    it('should write only the specified keys');
    it('should write the specified keys to a different location');

  });

});
