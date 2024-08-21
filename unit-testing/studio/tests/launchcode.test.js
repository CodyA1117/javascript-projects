const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  
  test("Check Organization Name", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  
  test("Check Executive Director Name", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  
  test("Check Percentage Cool Employees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  
  test("Check Programs Offered", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

 
  test("launchOutput returns 'Launch!' when passed a number only divisible by 2", function() {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });

  test("launchOutput returns 'Code!' when passed a number only divisible by 3", function() {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });

  
  test("launchOutput returns 'Rocks!' when passed a number only divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("launchOutput returns 'LaunchCode!' when passed a number divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("launchOutput returns 'Code Rocks!' when passed a number divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("launchOutput returns 'Launch Rocks! (CRASH!!!!)' when passed a number divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("launchOutput returns 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("launchOutput returns 'Rutabagas! That doesn't work.' when passed a number not divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});