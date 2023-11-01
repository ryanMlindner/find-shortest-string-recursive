function findShortestStringRecursive(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
/**
 * given array of length n, split the array into two arrays of length n/2
 * if the new array is length 1 or 2, compare string lengths and return the shorter 
 * or lower index if length is the same
 * else split the arrays again
 */
// And a written explanation of your solution
/**
 * this problem seems like a good opportunity to implement a divide and conquer algorithm
 * splitting the array in half if the array has more than two elements, and if it doesnt then
 * return the shortest (or if odd # of items return the only) string in the array
 * 
 */
