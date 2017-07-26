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

describe("find the size of the required missing array", function(){
  describe("it should return 0 if anything is null, undefined, or empty", function(){
    it('should return 0 if a null value exists', function(){
      var result = app.missingArray([ [ 1, 2, 2 ], null ])
      expect(result).toBe(0)
    });
    it('should return 0 of a array is empty', function(){
      var result = app.missingArray([ [ 4 ], [], [ 0, 3, 2, 1 ], [ 2, 2, 4 ] ])
      expect(result).toBe(0)
    });
  });
  describe("it should return the length of the array missing", function(){
    it('should return the correct array value', function(){
      var result = app.missingArray([ [ 4, 3, 0, 3 ],
  [ 1, 0, 1, 2, 3 ],
  [ 3, 4, 3 ],
  [ 1, 2, 3, 3, 2, 0 ],
  [ 0, 1, 0, 4, 2, 2, 4 ],
  [ 2, 0, 1, 4, 3, 1, 3, 3 ],
  [ 1, 1, 2, 2, 2, 0, 4, 3, 4, 3 ],
  [ 3, 4, 0, 0, 1, 0, 0, 3, 1, 0, 3 ] ])
      expect(result).toBe(9)
    });
    it('should return 0 of a array is empty', function(){
      var result = app.missingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ])
      expect(result).toBe(3)
    });
  });
});