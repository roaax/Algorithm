/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */




function partition(left, right ) {
    var rightIndex = nums[right];
    var leftIndex = left-1;

    for(let i=left; i<right; i++){
        if(nums[i]<=rightIndex){
            leftIndex++;

            var temp = nums[leftIndex];
            nums[leftIndex]=nums[i];
            nums[i]=temp;
        }
    }
    var temp=nums[leftIndex+1];
    nums[leftIndex+1]=nums[rigth];
    nums[rigth]=temp;
    return leftIndex+1;
}


function quickSort(left, right) {
    if(left<right){
        var p=partition(left,right);
        quickSort(left,p-1);
        quickSort(p+1,right);
    }
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// console.log(partition(nums1))
// console.log(partition(nums2))
// console.log(partition(nums3))
console.log(nums1.quickSort(0,nums1.length-1))
