function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    const shortest = arr[0].length < arr[1].length ? arr[0] : arr[1];
    return shortest
  }

  else {
    const divisor = Math.floor(arr.length / 2)
    const firstHalfShortest = findShortestStringRecursive(arr.slice(0, divisor));
    const secondHalfShortest = findShortestStringRecursive(arr.slice(divisor));
    const shortest = secondHalfShortest.length < firstHalfShortest.length 
    ? secondHalfShortest 
    : firstHalfShortest;
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

  //benchmark
  let longInput = [];
  for (let index = 0; index < 10; index++) {
    longInput.push("abde");
    longInput.push("dds");
    longInput.push("A");
  }
  const startTime = Date.now();
  console.log("Expecting: recursion depth exceeding tbh: ");
  console.log("=>", findShortestStringRecursive(longInput));
  for (let index = 0; index < 100; index++) {
    findShortestStringRecursive(longInput);
  }
  const endTime = Date.now();
  const averageTime = (endTime - startTime)/101;
  console.log("average runtime: ", averageTime);


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
