// Time complexity is O(logn)

let arr = [];
let start = 0;
let target = 4
 
for (i=1; i<=1024; i++) {
    arr.push(i)
}
let end = arr.length - 1;

function binarySearch(arr, start ,end, target){
    console.log(arr.slice(start, end))
    if (start>end) return false;
    let midindex = Math.floor((start + end)/2); //Log n comes from divide by 2 every time
    if (arr[midindex]=== target) return arr[midindex];

    if (arr[midindex]> target)    return binarySearch(arr, start, midindex-1, target);
    else return binarySearch(arr, midindex + 1, end, target);
}

console.log(binarySearch(arr, start, end, target))
