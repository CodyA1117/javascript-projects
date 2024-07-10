function checkFuel(level) {
  if (level > 100000) {
    return 'green';
  } else if (level > 50000) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr) {
  if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}.`;
  } else if (arr.length > 7) {
    return `Over capacity by ${arr.length - 7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Define anonymous function to siphon fuel
let siphonFuel = function(fuelLevel) {
  if (fuelLevel > 100000) {
    return fuelLevel - 99999; // Reduce fuel just enough to stay green
  } else if (fuelLevel > 50000) {
    return fuelLevel - 49999; // Reduce fuel just enough to stay yellow
  } else {
    return fuelLevel; // Do not reduce further if it's already red
  }
};

// Test the function
let newFuelLevel = siphonFuel(fuelLevel);
console.log("New Fuel Level: " + newFuelLevel); // Should print 100001
console.log("Fuel level: " + checkFuel(newFuelLevel)); // Should still print "green"

// Define anonymous function to swipe cargo
let liberateCargo = function(cargoHold) {
  let stolenItems = cargoHold.splice(0, 2, "worthless item 1", "worthless item 2");
  return stolenItems;
};

// Test the function
let stolenGoods = liberateCargo(cargoHold);
console.log("Stolen Goods: " + stolenGoods); // Should print the first two items of the cargoHold
console.log("Updated Cargo Hold: " + cargoHold); // Should show the cargoHold with two worthless items replacing the stolen ones

// Define the irs function
function irs(fuelLevel, cargoHold) {
  let siphonedFuel = siphonFuel(fuelLevel);
  let stolenItems = liberateCargo(cargoHold);
  return `Raided ${fuelLevel - siphonedFuel} kg of fuel from the tanks, and stole ${stolenItems[0]} and ${stolenItems[1]} from the cargo hold.`;
}

// Test the irs function
console.log(irs(fuelLevel, cargoHold)); // Should print the correct receipt


 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

// Next, liberate some of that glorious cargo.


//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.

 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

