/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    numbers.sort((a, b) => a - b);

  const l = numbers.length;

  if (l % 2 === 0) {
    return numbers[l / 2]
  } else {
    return numbers[(l - 1) / 2]
  }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};