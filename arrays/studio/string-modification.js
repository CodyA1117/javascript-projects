const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(0,3);

let newString2 = str.slice(3);


console.log (newString2);
console.log (newString);
console.log (newString2 + newString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log (`This is what happens when ${str} too many bears: ${newString2},${newString}!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = input.question("How many letters do you want relocated?:");



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (isNaN(answer)|| answer <= 0){
}   else if (answer > str.length) {
    console.log ("This is greater than the inputed word, we will default to moving 3 characters.")

    }


newString = str.slice(0, answer);
newString = str.slice(answer);


console.log(newString2);
console.log(newString);
console.log(newString2 + newString);
console.log(`This is what happens when ${str} encounters too many bears: ${newString2}, ${newString}!`);

