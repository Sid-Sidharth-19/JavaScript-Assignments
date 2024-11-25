let numbers = [12, 45, 7, 89, 23];
let smallest = Math.min(...numbers); 
let largest = Math.max(...numbers); 
document.getElementById("output").innerHTML = `Smallest number: ${smallest} <br> Largest number: ${largest}`;
