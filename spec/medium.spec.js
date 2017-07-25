var app = require("../app/medium.js");

describe("it should add two numbers together and convert it to binary", function(){
  describe("it should add two numbers together", function(){
    it('should add two numbers together', function(){
      var total = app.addBinary(1,5)
      expect(total).not.toBeNull()
    });
  });
  describe("it should convert the number to binary", function(){
    it('should convert number to binary', function(){
      var total = app.addBinary(1,5)
      expect(total).toMatch('110')
    });
  });
});