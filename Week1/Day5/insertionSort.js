//Insertion Sort
/*

* Insertion sort is a method of sorting an array by dividing the array into a
* 'sorted' portion and 'unsorted' portion. Then we compare the unsorted item
* to see if it is larger than the previous element, if not we insert the new item.

* I: Array
* O: Sorted array
* C: -
* E: -

*/

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let x = [7, 2, 0, 1, 8, 6]
insertionSort(x) // [0, 1, 2, 6, 7, 8]