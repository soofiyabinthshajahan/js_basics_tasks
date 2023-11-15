// Looping through an array:
// Write a function that takes an array as an argument and logs each element to the console.

function printArray(argumentArray) {
    let outputArray = [];
    for (let i = 0; i < argumentArray.length; i++) {
      console.log(argumentArray[i]);
      outputArray.push(argumentArray[i]);
    }
    return outputArray;
  }
  let argument = [1, 2, 3, 4, 5, 6];
  
  let b = printArray(argument);
  console.log(b);
  
  //Even or Odd:
//Create a function that takes a number as input and logs whether it's even or odd.

function numberCheck(argumentNumber) {
  if (argumentNumber % 2 === 0) {
    console.log(`the given ${argumentNumber} is an even number`);
  }
  console.log(`the given ${argumentNumber} is an odd number`);
}

numberCheck(25);


// Sum of Array:
// Write a function that calculates and returns the sum of elements in an array.

function arraySum(argumentArray1) {
  let sum = 0;
  for (let i = 0; i <= argumentArray1.length; i++) {
  sum += i;
  }
  console.log(sum);

}

let sumArray = [1, 2, 3, 4, 5];
arraySum(sumArray);