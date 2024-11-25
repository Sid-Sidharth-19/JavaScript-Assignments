let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
function mergeAndRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
let mergedArray = mergeAndRemoveDuplicates(array1, array2);
document.getElementById("output").innerHTML = `Array-1: [${array1.join(', ')}]<br>Array-2: [${array2.join(', ')}]<br>Merged array: [${mergedArray.join(', ')}]`;
