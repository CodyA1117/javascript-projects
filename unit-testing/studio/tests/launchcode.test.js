// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Check Organization Name" , function(){
    expect(launchcode.organization).toEqual("nonprofit")
  })

  test("check execture director name"), fucntion(){
    expect(launchcode.executive).toBe("Jeff");
  }

  
  
});