function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length < 3) {
    const shortest = arr[0].length < arr[1].length ? arr[0] : arr[1];
    console.log("index 0: " + arr[0] + " index 1: " + arr[1] + " shorter: " + shortest);
    return shortest
  }
  else {
    const divisor = Math.floor(arr.length / 2)
    const secondHalfShortest = findShortestStringRecursive(arr.slice(0, divisor));
    console.log("second half shortest: " + secondHalfShortest);
    const firstHalfShortest = findShortestStringRecursive(arr.slice(divisor));
    console.log("first half shortest: " +firstHalfShortest);
    const shortest = secondHalfShortest.length < firstHalfShortest.length 
    ? secondHalfShortest 
    : firstHalfShortest;
    console.log("shortest: " + shortest);
    return shortest;
  }
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
