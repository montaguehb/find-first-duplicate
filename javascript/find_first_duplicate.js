function findFirstDuplicate(arr) {
  // type your code here
  let dupIndex = -1
  for(let i = 0; i !== dupIndex && i < arr.length; i++) { 
    const tempIndex = arr.slice(i + 1, arr.length).findIndex(num => num === arr[i])
    tempIndex !== -1?dupIndex = tempIndex + i + 1:true 
  }
  
  return dupIndex===-1?dupIndex:arr[dupIndex]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log(findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([5]));

  console.log("");

  console.log("Expecting: 7");
  console.log(findFirstDuplicate([7, 1, 3, 2, 7]));
}

// module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
//Set a default dupplicate index of -1
//Iterate through the array and check if a value exists elsewhere in the array
//keep the lowest value
//return dup index
// And a written explanation of your solution
//Sets a default value for dupIndex to -1
//Iterates through the array for the whole length or as long as i, the current index, is lower than the dup index
//returns dupIndex