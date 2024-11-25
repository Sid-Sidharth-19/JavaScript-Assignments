let array = [1, 2, 3, 4, 5];
let valueToSearch = prompt("Enter the value between 1-5 to search:");
function findIndex(arr, value) {
    return arr.indexOf(value);
}
let index = findIndex(array, parseInt(valueToSearch));
if (index !== -1) {
    document.getElementById("output").innerHTML = `Index of ${valueToSearch}: ${index}`;
} else {
    document.getElementById("output").innerHTML = `${valueToSearch} is not found in the array.`;
}
