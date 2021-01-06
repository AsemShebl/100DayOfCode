//Selection Sort
/**

* The Selection sort algorithm is based on the idea of finding the minimum or maximum element
* in an unsorted array and then putting it in its correct position in a sorted array.

* I: Array
* O: Sorted array
* C: -
* E: -

*/

function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;      
        }
    }
    return arr;
}

let x = [5,8,4,6,3,1,4]
selectionSort(x) // [1, 3, 4, 4, 5, 6, 8]