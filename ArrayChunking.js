/*
Chunk an Array into Smaller Groups

Problem Statement:
    Write a function chunkArray(arr, n) that takes in:
    an array arr (of any length), and
    a number n (the chunk size),
    and returns a new array where the original array is split into sub-arrays ("chunks") of size n.
    If the array can't be split evenly, the last chunk should contain the remaining elements.
    If n is greater than the array length, return one chunk containing the entire array.

Example:
chunkArray([1, 2, 3, 4, 5], 2);
// Output: [[1, 2], [3, 4], [5]]

chunkArray([1, 2, 3], 5);
// Output: [[1, 2, 3]]

chunkArray([], 3);
// Output: []

*/

function chunkArray(arr, n) {
    // Your implementation
    let chunked = [];
    for (let i = 0; i < arr.length; i += n){
        chunked.push(arr.slice(i, i+n));
    }
    return chunked;

}

//For the purpose of user debugging.
//pass your array and chunk size in function call

module.exports = chunkArray
