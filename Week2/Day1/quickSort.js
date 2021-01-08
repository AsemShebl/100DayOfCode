// Quick Sort
/*
 * Quick Sort algorithm follows Divide and Conquer approach.
 * divides elements into smaller parts based on some condition and
 * performing the sort operations on those divided smaller parts.

 * I: Array
 * O: Sorted array
 * C: -
 * E: -
 */

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    var pivot = arr[Math.floor(arr.length/2)], left = [], right = [];
    for(var i = 0; i < arr.length; i++) {
        if( i=== Math.floor(arr.length/2)) continue;
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    var sorted = quickSort(left).concat(pivot, quickSort(right));
    return sorted;
}

quickSort([7, -2, 4, 1, 6, 5, 0, -4, 2]) // [-4, -2, 0, 1, 2, 4, 5, 6, 7]