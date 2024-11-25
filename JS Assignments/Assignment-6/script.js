let numbers = [];
for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt(`Enter number ${i}:`));
    numbers.push(num); 
}
let sum = numbers.reduce((total, num) => total + num, 0); 
document.getElementById("sum-output").innerHTML = `Sum of numbers: ${sum}`;
