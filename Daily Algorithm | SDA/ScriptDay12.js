/*
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards
  Do not ignore spaces, punctuation and capitalization
 */ //           >>  <<
//               v   v
const str1 = "a x a"
// const expected1 = true

const str2 = "racecar"
// const expected2 = true

const str3 = "Dud"
// const expected3 = false

const str4 = "oho!"
// const expected4 = false

function isPalindrome(str) {
    var newString = ""
    for (var i = str.length-1 ; i>=0 ; i--){
        newString += str[i];
    }
    if (str == newString){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome(str1))
console.log("----------------")
console.log(isPalindrome(str2))
console.log("----------------")
console.log(isPalindrome(str3))
console.log("----------------")
console.log(isPalindrome(str4))