/*
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World"
// const rotateAmnt1 = 0
// const expected1 = "Hello World"

const str2 = "Hello World"
// const rotateAmnt2 = 1
const expected2 = "dHello Worl"

// const str3 = "Hello World"
// const rotateAmnt3 = 2
// const expected3 = "ldHello Wor"

// const str4 = "Hello World"
// const rotateAmnt4 = 4
// const expected4 = "orldHello W"

// const str5 = "Hello World"
// const rotateAmnt4 = 26
// const expected4 = "orldHello W"

function rotateStr(str,n) {
    var arr =[]
    for(var i=str.length-1; i>=0 ; i--){
        arr.push(str[i])
    }
    for (var i=0 ; i<n ; i++){
        var last = arr.shift();
        arr.push(last);
    }
    str='';
    for(var i=arr.length-1; i>=0 ; i--){
        str+= arr[i]
    }
    return str;
}
console.log("----------Algo2-----------")
console.log(rotateStr(str1,0))
console.log(rotateStr(str1,1))
console.log(rotateStr(str1,2))
console.log(rotateStr(str1,4))
console.log(rotateStr(str1,26))



/*****************************************************************************/

/*
        Create the function isRotation(str1,str2) that
        returns whether the second string is a rotation of the first.
      */

const strA1 = "ABCD";
const strB1 = "CDAB";
  // const expected1 = true;
  // // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
  // const expected2 = false;
  // // Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
    for(var i=0; i<s1.length ; i++){
        if(s1 == rotateStr(s2,i)){
            return true
        }
    }
    return false
}
console.log("----------Algo2-----------")
console.log(isRotation(strA1,strB1))
console.log(isRotation(strA2,strB2))


