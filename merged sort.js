// Time complexity is O(n log(n))

function mergedSort(arr){
    if (arr.length<2){
        return arr
    }
    console.log('lvl 1', arr)
    const middleIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex,arr.length)

    return merge(mergedSort(leftArr), mergedSort(rightArr))
}

function merge(leftArr, rightArr){
    let result = [];
    let leftIndex = 0
    let rightIndex = 0
    console.log("lvl 2", leftArr, rightArr)
    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if (leftArr[leftIndex] < rightArr[rightIndex]){
            result.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else{
            result.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

 arr = [42, 5, 643, 3, 4, 86, 97, 47]

 console.log(mergedSort(arr))