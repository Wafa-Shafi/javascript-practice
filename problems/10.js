/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    var string1 = str;
    var string1_len = string1.length;
    var part_a = '';
    var part_b = '';
    for(var i=0 ; i<Math.ceil(string1_len/2) ; i++)
    {
        part_a+=string1[i];
    }
 
    for(var i=Math.ceil(string1_len/2) ; i<string1_len ; i++)
    {
        part_b+=string1[i];
    }
 
    var new_part_a = part_a.toUpperCase();
 
    var changed_string = new_part_a + part_b;
 
    return changed_string;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};