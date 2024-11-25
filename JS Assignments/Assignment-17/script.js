let array = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let evenNumbers = filterEvenNumbers(array);
document.getElementById("output").innerHTML = `Integer array: [${array.join(', ')}]<br>Even numbers: [${evenNumbers.join(', ')}]`;
