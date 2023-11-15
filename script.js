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
  
  