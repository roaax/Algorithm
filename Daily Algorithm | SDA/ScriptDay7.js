/*
  Given an array and an index,
  remove the item at that index.
  return the removed item
  No built-in array methods except pop().
*/

const arr2 = ["a", "b", "c"]
// const removeIdx2 = 3
// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

const arr3 = ["a", "b", "c"]
// const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
  if (arr.length <= idx || -arr.length >= idx) {
    return null;
} else {
    let tem;
    for (let index = idx; index < arr.length; index++) {
        //const element = arr[index];
        if (index + 1 < arr.length) {
            tem = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = tem;
        }
    }
    return arr.pop();
}
}

console.log(removeAt(arr2,2))
// const arr1 = ["a", "b", "c"]
// const removeIdx1 = 1

// var returnedValue = removeAt(arr1, removeIdx1)

// const expected1 = "b"
// console.log(returnedValue === expected1) // true

// console.log(arr1)
// const arr1Expected = ["a", "c"]

/* ******************************************************************************** */

/*Given an array, move the minimum value to the front
return the array after done
No built in methods */

// const nums1 = [4, 5, 2, 9];
// const expected1 = [2, 4, 5, 9];

function minToFront(nums) {
  // your code here
}

// const nums2 = [5, 1, 0, 2, 3, 0];
// const expected2 = [0, 5, 1, 2, 3, 0];

// minToFront(nums2);
