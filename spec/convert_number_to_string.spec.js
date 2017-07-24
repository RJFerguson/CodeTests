var app = require("../app/convert_number_to_string.js")


describe('convert number to string', function(){
  it('should convert a given number to a string', function(){
    var string_num = app.convertNum(123)
    expect(string_num).toBe("123")
  })
})