var app = require("../app/add.js");

describe('add numbers', function(){
  it('should add two numbers together', function(){
    var total = app.sum(1,2)
    expect(total).toBe(3)
  });
});