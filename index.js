function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
*/
// Quadratic Time
// O(n2)

/*
  Add your pseudocode here
*/
// for each number in array
// if any 2 numbers within the array sum up to equal the target num 
// then return true
// else return false

//does [0] + [1] = target? no? continue
//does [0] + [2] = target? no? continue
//does [0] + [3] = target? no? continue
//does [1] + [2] = target?...
// this is done for total number of numbers within array


/*
  Add written explanation of your solution here
*/
// looking at each number within array : for(i = 0)
// then looking at second number within array : for(j = 0)
// function goes through each number and sums (array[i] + array[j])
// if any combo of numbers sums to target
// then return true
// else return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting true")
  console.log("=>", hasTargetSum([19, 13, 80, 85], 98))

  console.log("")

  console.log("Expecting false");
  console.log("=>", hasTargetSum([100, 1, 13, 23, 25, 55], 10))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
