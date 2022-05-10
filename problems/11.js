/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};