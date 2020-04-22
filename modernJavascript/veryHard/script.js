// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string. 
 // Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”

function firstOccur(str){
 for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            console.log(str.charAt(i));
         break;
        }
        
    }
}

firstOccur("the quick brown fox jumps over the calm kitten quietly");
