/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted.
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
// const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
// const searchNum2 = 5
// const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
// const searchNum3 = 3
// const expected3 = true

const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
// const searchNum4 = 2
// const expected4 = true

function binarySearch   (arr, x) {
    let start=0, end=arr.length-1;
    // Iterate while start not meets end
    while (start<=end){
      // Find the mid index
        let mid=Math.floor((start + end)/2);

      // If element is present at mid, return True
        if (arr[mid]===x) return true;

      // Else look in left or right half accordingly
    else if (arr[mid] < x)
        start = mid + 1;
    else
        end = mid - 1;
    }

    return false;
}

console.log(binarySearch(nums1,4))
console.log(binarySearch(nums2,5))
console.log(binarySearch(nums3,3))
console.log(binarySearch(nums4,2))
