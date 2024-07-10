//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function findMinimumvalue (arr){
    let minValue = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minValue){
            minValue = arr[i];
        }

    }
    return minValue;
}   
console.log(findMinimumvalue(nums3));

let finalSort = function (numbers){
    const newNumberSort = [];
    
    while (numbers.length > 0){
        const minimum = findMinimumvalue(numbers);
        newNumberSort.push(minimum);

        const minIndex = numbers.indexOf(minimum);
            numbers.splice(minIndex, 1);
    }

    return newNumberSort;


}
console.log(finalSort(nums1));
console.log(finalSort(nums2));
console.log(finalSort(nums3));
//Sample arrays for testing:
// let nums1 = [5, 10, 2, 42];
// let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
// let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(/* your code here */);
