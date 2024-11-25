let array = [10, 20, 30, 40];
function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
let sum = calculateSum(array);
document.getElementById("output").innerHTML = `Numbers array: [${array.join(', ')}]<br>Sum of numbers: ${sum}`;
