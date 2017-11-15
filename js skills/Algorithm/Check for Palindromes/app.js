/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/


function palindrome(str) {
  // this cleans up our output so we are only testing for numbers and letters. remove all commas or underscores.
  // also making sure that its all lowercase so when we run our if test, it doesn't fail because of an upper case letter.
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // this sets up our check to. here we are converting it to an array so we can then reverse the array. After that we join them back to make a string again but because of hte array we have to remove the commas
  var newStr = str.split('').reverse().join().replace(/,/g, '');

  // this is our check
  if (str === newStr){
    return true;
  } else {
    return false;
  }

}


palindrome("1 eye for of 1 eye."); //inpute test
