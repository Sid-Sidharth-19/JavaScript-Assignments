let userString = prompt("Enter a string:");
let upperCaseString = userString.toUpperCase();
let lowerCaseString = userString.toLowerCase();
document.getElementById("output").innerHTML = 
    `Uppercase: "${upperCaseString}" <br> 
    Lowercase: "${lowerCaseString}"`;
