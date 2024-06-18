// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let crewReady = false;  //created a new variable crewReady to separate from launchReady.

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;    // changed to crewReady
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;   //changed to crewReady
}

console.log("launchReady = ", launchReady);

if (launchReady != false) {
   console.log("Liftoff!")
}  else {
   console.log("Launch scubbed.")
}
