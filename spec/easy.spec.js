var app = require("../app/easy.js");

describe('add numbers', function(){
  it('should add two numbers together', function(){
    var total = app.sum(1,2)
    expect(total).toBe(3)
  });
});

describe('convert number to string', function(){
  it('should convert a given number to a string', function(){
    var string_num = app.convertNum(123)
    expect(string_num).toBe("123")
  })
})

describe('compute the average of an array', function(){
  it('should take in an array and compute the average', function(){
    var avg = app.average([1,2,3,4])
    expect(avg).toBe(2.5)
  })
})

describe('compute the middle of a tuple array', function(){
  it('should take a tuple and return the index of the middle value', function(){
    var middle = app.middleNum([2,1,3])
    expect(middle).toBe(0)
  })
})

describe('finds the non repeated number in an odd length array ', function(){
  it('should return the non repeated number as an int', function(){
    var middle = app.stray([2,1,1])
    expect(middle).toBe(2)
  })
})

describe('finds the cube of odd number is an array ', function(){
  it('should return the cube value', function(){
    var final = app.cubeOdd([2,1,3])
    expect(final).toBe(28)
  })
})