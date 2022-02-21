// # Palindrome Words

// A palindromic word reads the same both ways. The longest English palindrome is _"tattarrattat"_, 
// which means "the sound of a knock on the door".

// Write a function that takes a word as input, and returns a boolean indicating if the word is a palindrome.

const palindrome = (str) => {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr) {
        return true
    } else {
        return false
    }
  }
  let boolReturn = palindrome("tattarrattat")
  console.log(boolReturn)
